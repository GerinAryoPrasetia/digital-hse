<?php

namespace App\Http\Controllers\Apar;

use App\Http\Controllers\Controller;
use App\Models\Apar\AparArea;
use App\Models\Apar\AparCondition;
use App\Models\Apar\AparItem;
use App\Models\Apar\AparItemCondition;
use App\Models\Apar\AparItemRemarks;
use App\Models\Apar\AparReport;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Str;

class AparController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        // dd($request->area_id);
        // dd($query);
        $user = auth()->user()->getAuthIdentifier();
        $apar_report = AparReport::with('apar_area', 'checked_by', 'acknowladge_user', 'apar_condition.apar_item_condition')->where('checked_by_id', $user)
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();
        // dd($apar_report);
        if ($request->has('area_id')) {
            # code...
            $apar_report = AparReport::with('apar_area', 'checked_by', 'acknowladge_user', 'apar_condition.apar_item_condition')
                ->where('checked_by_id', $user)
                ->where('area_id', $request->area_id)
                ->take(3)
                ->get();
        }
        $area = AparArea::all();
        return Inertia::render('Modul/Apar/Index', [
            'items' => $apar_report,
            'area' => $area,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = User::all();
        $area = AparArea::all();
        $item = AparItem::all();
        return Inertia::render('Modul/Apar/Create', [
            'user' => $user,
            'area' => $area,
            'aparItem' => $item,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        // dd($request->all());
        try {
            //code...
            DB::beginTransaction();

            $apar_report = AparReport::create([
                'area_id' => $request->area_id,
                'checked_by_id' => $request->checked_by_id,
                'acknowladge_user_id' => $request->acknowledged_by_id,
                'spec_control' => $request->spec_control,
                'pressure_control' => $request->hasil_ujitekan,
                'pressure_control_at' => $request->tanggal_ujitekan,
                'pressure_control_expired_at' => $request->expired_ujitekan,
                'checked_pressure_control' => $request->control_ujitekan,
                'notes' => $request->keterangan,
                'expired_at' => $request->expired_at,
                'apar_number' => $request->apar_number,
                'apar_production' => $request->apar_production,
                'apar_type' => $request->apar_type,
                'apar_jenis' => $request->apar_jenis,
                'apar_year_of_production' => $request->apar_year_of_production,
                'apar_report_number' => $this->generateUniqueNumberReport(),
                'apar_weight' => $request->apar_weight,
            ]);

            foreach ($request->apar_item_condition as $apar_ic) {
                if (is_array($apar_ic)) {
                    $apar_item_condition = AparItemCondition::create([
                        'apar_report_id' => $apar_report->id,
                        'apar_item_id' => $apar_ic['item_id'] ?? null,
                        'checked' => $apar_ic['checked'] ?? null,
                        'condition' => $apar_ic['status'] ?? null,
                        'status_remarks' => $apar_ic['status_remarks'] ?? null,
                        'possible_cause' => $apar_ic['possible_cause'] ?? null,
                        'tanggal_remarks' => $apar_ic['tanggal_remarks'] ?? null,
                    ]);

                    AparCondition::create([
                        'pic_area_id' => $request->checked_by_id,
                        'apar_report_id' => $apar_report->id,
                        'apar_item_condition_id' => $apar_item_condition->id,
                        'verified_by_hse' => false,
                        'verified_by_p2k' => false,
                        'year_checked' => $request->year_checked,
                        'month_checked' => $request->month_checked,
                        'hse_id' => $request->hse_id,
                        'p2k_id' => $request->p2k_id,
                    ]);
                }
            }

            DB::commit();

            return redirect()->route("modul")->with('success', 'APAR Report Submitted Successfully');
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
        $apar = AparReport::with('apar_area', 'checked_by', 'acknowladge_user', 'apar_condition.apar_item_condition', 'apar_condition.apar_item_condition.apar_item', 'apar_condition.hse', 'apar_condition.p2k')->where('id', $id)->first();
        return Inertia::render('Modul/Apar/Detail', [
            'apar' => $apar,
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

    public function verified(Request $request)
    {
        // dd($request->all());
        try {
            //code...
            DB::beginTransaction();

            $apar_condition = AparCondition::where('apar_report_id', $request->apar_report_id)->first();
            // dd($apar_condition);

            if ($request->verified_by_hse == true) {
                $apar_condition->verified_by_hse = true;
            } else if ($request->verified_by_p2k == true) {
                $apar_condition->verified_by_p2k = true;
            }
            // $apar_condition->verified_by_hse = $request->verified_by_hse;
            // $apar_condition->verified_by_p2k = $request->verified_by_p2k;
            $apar_condition->save();

            DB::commit();

            return redirect()->route("modul")->with('success', 'APAR Report Verified Successfully');
        } catch (\Throwable $th) {
            //throw $th;
            DB::rollBack();
            return response()->json(['error' => $th->getMessage()]);
        }
    }

    public function generateUniqueNumberReport()
    {
        // Get the current date and time
        $currentDateTime = Carbon::now();

        // Format the date and time as "HHMMDD"
        $formattedDateTime = $currentDateTime->format('Hisd');

        // Generate a random string
        $randomString = Str::random(8); // You can adjust the length as needed

        // Combine everything with the prefix "WP-"
        $uniqueNumber = "APAR-$formattedDateTime-$randomString";

        return $uniqueNumber;
    }

    public function listApar()
    {
        // dd(auth()->user()->getAuthIdentifier());
        $user = auth()->user()->getAuthIdentifier();
        $apar_report = AparReport::with('apar_area', 'checked_by', 'acknowladge_user', 'apar_condition.apar_item_condition')->where('checked_by_id', $user)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Modul/Apar/AllApar', [
            'items' => $apar_report,
        ]);
    }
}
