<?php

namespace App\Http\Controllers\WorkingPermit;

use App\Http\Controllers\Controller;
use App\Models\WorkingPermits;
use App\Models\WP\NatureOfWork;
use App\Models\WP\SafetyEquipment;
use App\Models\WP\SafetyPersonal;
use App\Models\WP\SafetyProcedure;
use App\Models\WP\WorkArea;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class WorkingPermitController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $works = WorkingPermits::with('natureOfWork', 'issuer')->orderBy('created_at', 'desc')->orderBy('created_at', 'desc')
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
        $supervisor_name = DB::table('users')->where('id', auth()->user()->supervisor_id)->first()->name;
        $issuer = ['name' => $supervisor_name, 'id' => auth()->user()->supervisor_id];
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
        // dd($request->all());
        // dd(count($request->workArea));

        $issuer_id = auth()->user()->getAuthIdentifier();
        try {
            DB::beginTransaction();
            $working_permits = WorkingPermits::create([
                'permit_number' => $request->permitNumber,
                'issuer_id' => $issuer_id,
                'supervisor_id' => $request->supervisorId,
                'officer_id' => $request->safetyOfficerId,
                'permit_to_work' => $request->permitToWork,
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
            ]);

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

            DB::commit();

            return redirect()->route("modul")->with('success', 'Working Permit Submitted Successfully');
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
        $permit = WorkingPermits::with('natureOfWork', 'safetyProcedure', 'safetyPersonal', 'safetyEquipment', 'issuer', 'supervisor', 'officer')->where('id', $id)->first();
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
}
