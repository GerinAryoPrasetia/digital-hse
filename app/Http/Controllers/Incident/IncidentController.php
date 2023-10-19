<?php

namespace App\Http\Controllers\Incident;

use App\Http\Controllers\Controller;
use DOMDocument;
use Illuminate\Http\Request;
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
