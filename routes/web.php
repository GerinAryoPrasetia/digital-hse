<?php

use App\Http\Controllers\Apar\AparController;
use App\Http\Controllers\Incident\IncidentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WorkingPermit\WorkingPermitController as WorkingPermitWorkingPermitController;
use App\Http\Controllers\WorkingPermitController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Modul/Modul');
})->middleware(['auth', 'verified'])->name('modul');

Route::get('/coming-soon', function () {
    return Inertia::render('ComingSoon');
})->middleware(['auth', 'verified'])->name('coming-soon');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/modul/working-permits', [WorkingPermitWorkingPermitController::class, 'index'])->name('working-permits.index');
    Route::get('/modul/working-permits/create', [WorkingPermitWorkingPermitController::class, 'create'])->name('working-permits.create');
    Route::post('/modul/working-permits', [WorkingPermitWorkingPermitController::class, 'store'])->name('working-permits.store');
    Route::get('/modul/working-permits/{id}', [WorkingPermitWorkingPermitController::class, 'show'])->name('working-permits.show');
    Route::get('/working-permits/my-works', [WorkingPermitWorkingPermitController::class, 'listWorks'])->name('listWorks');
    Route::get('/working-permits/my-approval', [WorkingPermitWorkingPermitController::class, 'listApprovals'])->name('listApprovals');
    Route::post('/working-permits/{id}/approve', [WorkingPermitWorkingPermitController::class, 'approvePermit'])->name('working-permits.approve');
    Route::post('/working-permits/{id}/reject', [WorkingPermitWorkingPermitController::class, 'reject'])->name('working-permits.reject');

    //apar
    Route::get('/modul/apar', [App\Http\Controllers\Apar\AparController::class, 'index'])->name('apar.index');
    Route::get('/modul/create', [App\Http\Controllers\Apar\AparController::class, 'create'])->name('apar.create');
    Route::post('/modul/apar', [App\Http\Controllers\Apar\AparController::class, 'store'])->name('apar.store');
    Route::get('/modul/apar/{id}', [AparController::class, 'show'])->name('apar.show');
    Route::post('/apar/verify', [AparController::class, 'verified'])->name('apar.verify');
    Route::get('/list-apars', [AparController::class, 'listApar'])->name('listApar');
    Route::get('/list-apars/verify', [AparController::class, 'listAparPic'])->name('listVerifyApar');

    //incidents
    Route::get('modul/incident', [IncidentController::class, 'index'])->name('incident.index');
    Route::get('modul/incident/create', [IncidentController::class, 'create'])->name('incident.create');
});

require __DIR__ . '/auth.php';
