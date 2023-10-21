<?php

namespace App\Http\Controllers\Incident;

use App\Http\Controllers\Controller;
use App\Models\Accident\Accident;
use App\Models\Accident\AccidentCauses;
use App\Models\Accident\AccidentInjuredPerson;
use App\Models\Accident\AccidnetClassification;
use App\Models\Accident\PersonInvolved;
use DOMDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class IncidentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Modul/Incident/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Modul/Incident/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        dd($request->all());
        try {
            DB::beginTransaction();
            $accident = Accident::create([]);

            $acc_id = $accident->id;

            foreach ($request->klasifikasi as $val) {
                AccidnetClassification::create([
                    'accident_id' => $acc_id,
                    'classification' => $val
                ]);
            }

            foreach ($request->penyebabLangsungKecelakaan as $val) {
                AccidentCauses::create([
                    'accident_id' => $acc_id,
                    'type' => $val['type'],
                    'condition' => $val['condition'],
                ]);
            }

            foreach ($request->personInvolved as $val) {
                // Accide
                PersonInvolved::create([
                    'accident_id' => $acc_id,
                    'name' => $val['name'],
                    'id_number' => $val['idNumber'],
                    'saksi' => $val['saksi'],
                    'id_number_saksi' => $val['idNumberSaksi']
                ]);
            }

            foreach ($request->personInjured as $val) {
                AccidentInjuredPerson::create([
                    'accident_id' => $acc_id,
                    'name' => $val['name'],
                    'id_number' => $val['idNumber'],
                    'tanggal_lahir' => $val['tanggalLahir'],
                    'jenis_kelamin' => $val['kelamin'],
                    'jabatan' => $val['jabatan'],
                    'lama_bekerja' => $val['lamaBekerja'],
                    'id_number' => $val['bagian'],
                    'seksi' => $val['seksi'],
                    'is_perusahaan' => $val['isKaryawanPT'],
                    'perusahaan' => $val['namaPerusahaan'],
                    'nama_supervisor' => $val['namaPengawasKerja'],
                ]);
            }
        } catch (\Throwable $th) {
            //throw $th;
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

    public function uploadImage(Request $request)
    {
        if ($request->hasFile('upload')) {
            $originName = $request->file('upload')->getClientOriginalName();
            $fileName = pathinfo($originName, PATHINFO_FILENAME);
            $extension = $request->file('upload')->getClientOriginalExtension();
            $fileName = $fileName . '_' . time() . '.' . str_replace(' ', '', $extension);
            // $file->move(Storage::path('public/news-images'), $filename);

            $request->file('upload')->move(Storage::path('public/accident-images'), $fileName);

            // $url = asset('media/' . $fileName);
            $url = asset('storage/accident-images/' . $fileName);
            return response()->json(['fileName' => $fileName, 'uploaded' => 1, 'url' => $url]);
        }
    }

    private function processImage($content)
    {
        $dom = new DOMDocument();
        $dom->loadHTML($content, LIBXML_NOERROR);

        $images = $dom->getElementsByTagName('img');
        $figure = $dom->getElementsByTagName('figure');
        foreach ($images as $image) {
            $image->setAttribute('style', 'width: 100%; margin: 0 auto;');
        }

        foreach ($figure as $fig) {
            $fig->setAttribute('style', 'text-align: center;');
        }

        return $dom->saveHTML();
    }
}
