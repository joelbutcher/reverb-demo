<?php

use App\Models\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('applications', function () {
        return Inertia::render('applications', [
            'applications' => Application::all(),
        ]);
    })->name('applications');


    Route::get('applications/{application}/quotes', function (Application $application) {
        return Inertia::render('quotes', [
            'application' => $application,
            'quotes' => $application->quotes,
        ]);
    })->name('applications.quotes');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/socialstream.php';
