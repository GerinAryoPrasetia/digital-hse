<?php

namespace App\Http\Controllers\WorkingPermit;

use App\Http\Controllers\Controller;
use App\Models\WorkingPermits;
use App\Models\WP\NatureOfWork;
use App\Models\WP\PermitToWork;
use App\Models\WP\SafetyEquipment;
use App\Models\WP\SafetyPersonal;
use App\Models\WP\SafetyProcedure;
use App\Models\WP\WorkArea;
use App\Models\WP\WpAttachments;
use App\Models\WP\WpUserBrief;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class WorkingPermitController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $works = WorkingPermits::with('natureOfWork', 'issuer')->orderBy('created_at', 'desc')
            ->take(3)->get();
        // dd($works);
        $approval = WorkingPermits::where('supervisor_id', auth()->user()->getAuthIdentifier())
            ->orWhere('officer_id', auth()->user()->getAuthIdentifier())
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();
        // dd($approval);
        return Inertia::render('Modul/WorkingPermits/Index', [
            'works' => $works,
            'approval' => $approval,
        ]);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $supervisor = DB::table('users')->where('id', auth()->user()->supervisor_id)->first();

        if ($supervisor) {
            $supervisor_name = $supervisor->name;
            $issuer = ['name' => $supervisor_name, 'id' => auth()->user()->supervisor_id];
        } else {
            // Handle the case where the supervisor user does not exist.
            // You might want to set a default value or handle it in another way.
            $issuer = ['name' => 'Default Supervisor', 'id' => null];
        }

        $users = DB::table('users')->get();

        $form_number = $this->generateUniqueNumber();
        $permit = ['form_number' => $form_number];

        return Inertia::render('Modul/WorkingPermits/Create', [
            'issuer' => $issuer,
            'permit' => $permit,
            'users' => $users,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        dd($request->all());
        // dd(count($request->workArea));

        $issuer_id = auth()->user()->getAuthIdentifier();
        try {

            DB::beginTransaction();
            $working_permits = WorkingPermits::create([
                'permit_number' => $request->permitNumber,
                'issuer_id' => $issuer_id,
                'supervisor_id' => $request->supervisorId,
                'officer_id' => $request->safetyOfficerId,
                'equipment_to_work' => $request->equipmentToWorkOn,
                'brief_of_work' => $request->briefDescriptionOfWork,
                'remarks' => "",
                'work_site' => $request->workSite,
                'additional_comments' => $request->additionalComments,
                'start_date' => Carbon::now(),
                'end_date' => Carbon::now(),
                'is_approved_first_step' => false,
                'is_approved_second_step' => false,
                'is_done_by_supervisor' => false,
                'is_done_by_officer' => false,
                'first_approved_at' => null,
                'second_approved_at' => null,
                'is_rejected' => false,
                'status' => 'pending',
                'company_name' => $request->companyName,
            ]);

            foreach ($request->file('attachments') as $attData) {
                // dd($attData);
                $attFile = $attData['originFileObj'];
                $originalName = str_replace(' ', '', $attFile->getClientOriginalName());

                WpAttachments::create([
                    'working_permit_id' => $working_permits->id,
                    'attachment_name' =>  $originalName,
                    'attachment_path' =>  $originalName,
                    'attachment_type' => $attFile->getMimeType(),
                ]);

                $attFile->move(
                    Storage::path('public/working_permit_attachments'),
                    $originalName
                );
            }

            foreach ($request->natureOfWork as $value) {
                NatureOfWork::create([
                    'working_permit_id' => $working_permits->id,
                    'data' => $value,
                ]);
            }

            foreach ($request->workArea as $value) {
                WorkArea::create([
                    'working_permit_id' => $working_permits->id,
                    'data' => $value,
                ]);
            }

            foreach ($request->safetyProcedure as $value) {
                SafetyProcedure::create([
                    'working_permit_id' => $working_permits->id,
                    'data' => $value,
                ]);
            }

            foreach ($request->safetyPersonal as $value) {
                SafetyPersonal::create([
                    'working_permit_id' => $working_permits->id,
                    'data' => $value,
                ]);
            }
            foreach ($request->safetyEquipment as $value) {
                SafetyEquipment::create([
                    'working_permit_id' => $working_permits->id,
                    'data' => $value,
                ]);
            }

            foreach ($request->permitToWork as $value) {
                PermitToWork::create([
                    'working_permit_id' => $working_permits->id,
                    'data' => $value,
                ]);
            }

            foreach ($request->userBrief as $value) {
                WpUserBrief::create([
                    'wp_id' => $working_permits->id,
                    'name' => $value['name'],
                    'company_name' => $value['companyName'],
                    'function_name' => $value['functionName'],
                    'no_telp' => $value['noTelp'],
                ]);
            }

            DB::commit();

            return redirect()->route("working-permits.index")->with('success', 'Working Permit Submitted Successfully');
        } catch (\Throwable $th) {
            //throw $th;
            DB::rollBack();
            return response()->json(['error' => $th->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $permit = WorkingPermits::with('natureOfWork', 'safetyProcedure', 'permitToWork', 'safetyPersonal', 'safetyEquipment', 'issuer', 'supervisor', 'officer', 'attachments', 'userBrief')->where('id', $id)->first();
        return Inertia::render('Modul/WorkingPermits/Detail', [
            'permit' => $permit,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function generateUniqueNumber()
    {
        // Get the current date and time
        $currentDateTime = Carbon::now();

        // Format the date and time as "HHMMDD"
        $formattedDateTime = $currentDateTime->format('Hisd');

        // Generate a random string
        $randomString = Str::random(8); // You can adjust the length as needed

        // Combine everything with the prefix "WP-"
        $uniqueNumber = "WP-$formattedDateTime-$randomString";

        return $uniqueNumber;
    }

    public function listWorks()
    {
        //
        $items = WorkingPermits::with('natureOfWork', 'issuer')->orderBy('created_at', 'desc')->get();

        return Inertia::render('Modul/WorkingPermits/AllWorks', [
            'items' => $items,
        ]);
    }

    public function listApprovals()
    {
        //
        $items = WorkingPermits::where('supervisor_id', auth()->user()->getAuthIdentifier())
            ->orWhere('officer_id', auth()->user()->getAuthIdentifier())
            ->orderBy('created_at', 'desc')
            ->get();
        return Inertia::render('Modul/WorkingPermits/AllApproval', [
            'items' => $items,
        ]);
    }

    public function approvePermit(string $id)
    {
        //
        $permit = WorkingPermits::where('id', $id)->first();
        $user_id = auth()->user()->getAuthIdentifier();
        if (($user_id == $permit->supervisor_id || $user_id == $permit->officer_id) && $permit->is_approved_second_step == true) {
            # code...
            // dd("done");
            if ($user_id == $permit->supervisor_id && $permit->is_done_by_supervisor == false) {

                $permit->is_done_by_supervisor = true;
            } else {
                $permit->is_done_by_officer = true;
                $permit->status = 'done';
            }
        } else if ($user_id == $permit->officer_id && $permit->is_approved_first_step == true) {

            $permit->is_approved_second_step = true;
            $permit->second_approved_at = Carbon::now();
        } else if ($user_id == $permit->supervisor_id && $permit->is_approved_first_step == false) {

            $permit->is_approved_first_step = true;
            $permit->first_approved_at = Carbon::now();
        } else {
            return redirect()->route('working-permits.show', $id)->with('error', 'You are not allowed to approve this working permit');
        }
        $permit->save();

        return redirect()->route('working-permits.show', $id)->with('success', 'Working Permit Approved Successfully');
    }

    public function reject(Request $request, string $id)
    {
        dd($request->all());
        $permit = WorkingPermits::where('id', $id)->first();
        $user_id = auth()->user()->getAuthIdentifier();

        if ($user_id != $permit->supervisor_id || $user_id != $permit->officer_id) {
            return redirect()->route('working-permits.show', $id)->with('error', 'You are not allowed to reject this working permit');
        } else {
            $permit->is_rejected = true;
            $permit->status = 'rejected';
            $permit->rejected_comments = $request->rejectedComments;
            $permit->save();
            return redirect()->route('working-permits.show', $id)->with('success', 'Working Permit Rejected Successfully');
        }
    }
}
