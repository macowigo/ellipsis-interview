<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ChangePasswordController;
use App\Http\Controllers\Auth\Redirect;
use App\Http\Controllers\Auth\VerifyToken;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\Shared\SharedControllers;
use Illuminate\Support\Facades\Route;
Route::get('/',[GuestController::class,'home']);
Route::get('/login',[GuestController::class,'loginview'])->name('loginview');
Route::post('/login',[AuthenticatedSessionController::class,'store'])->name('login');
Route::get('/register',[GuestController::class,'registerview'])->name('register');
Route::post('/registration',[GuestController::class,'registeruser'])->name('registration');
Route::get('/forgotpassword',[GuestController::class,'forgotpasswordview'])->name('forgotpass');
Route::post('/forgotpassword',[GuestController::class,'checkifexit'])->name('passrecover');


Route::middleware('auth')->group( function ()
{
    Route::get('/redirect',[Redirect::class,'redirectuser'])->name('redirect');
    Route::get('/verifytoken',[VerifyToken::class,'verifytokenview'])->name('verifytoken');
    Route::post('/verifytoken/{email}',[VerifyToken::class,'verifytoken'])->name('tokenverification');
    Route::post('/resendtoken/{email}',[VerifyToken::class,'resendtoken'])->name('resendtoken');
    Route::get('/verify',[VerifyToken::class,'verifyforgotpassview'])->name('verifyrecoveryview');
    Route::post('/verify/{email}',[VerifyToken::class,'verifyforgotpass'])->name('verifyrecovery');
    Route::get('/changepassword',[VerifyToken::class,'changepassrecoveryview'])->name('changepassrecoveryview');
    Route::post('/changepassword',[VerifyToken::class,'changepassword'])->name('changepassrecovery');
    Route::any('auth/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    Route::get('today/myactivities', [SharedControllers::class, 'todaymyactivities'])->name('todaymyactivities');
    Route::get('auth/changepassword', [ChangePasswordController::class, 'changepassview'])->name('changepass');
    Route::post('auth/changepassword', [ChangePasswordController::class, 'changepassword'])->name('changepassword');
    
});



Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
require __DIR__.'/users.php';
