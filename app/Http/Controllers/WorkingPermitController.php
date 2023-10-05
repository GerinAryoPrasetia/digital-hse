<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkingPermitController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Modul/WorkingPermits/Index');
    }
}
