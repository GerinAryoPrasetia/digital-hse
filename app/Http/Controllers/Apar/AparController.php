<?php

namespace App\Http\Controllers\Apar;

use App\Http\Controllers\Controller;
use App\Models\Apar\AparArea;
use App\Models\Apar\AparItem;
use App\Models\Apar\AparItemCondition;
use App\Models\Apar\AparItemRemarks;
use App\Models\Apar\AparReport;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AparController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        return Inertia::render('Modul/Apar/Index');
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
            ]);

            foreach ($request->apar_item_condition as $apar_ic) {
                if (is_array($apar_ic)) {
                    AparItemCondition::create([
                        'apar_report_id' => $apar_report->id,
                        'apar_item_id' => $apar_ic['item_id'] ?? null,
                        'checked' => $apar_ic['checked'] ?? null,
                        'condition' => $apar_ic['status'] ?? null,
                        'status_remarks' => $apar_ic['status_remarks'] ?? null,
                        'possible_cause' => $apar_ic['possible_cause'] ?? null,
                        'tanggal_remarks' => $apar_ic['tanggal_remarks'] ?? null,
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
}
