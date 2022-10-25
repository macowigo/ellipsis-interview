<?php

use App\Http\Controllers\Admin\BooksController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UsersController;
use Illuminate\Support\Facades\Route;
Route::middleware('auth','role:admin')->group(function () {
    Route::get('admin/dashboard',[DashboardController::class,'dashboardview'])->name('admindashboard');
    #users
    Route::get('admin/adduser',[UsersController::class,'adduserview'])->name('addcustomerview');
    Route::post('admin/adduser',[UsersController::class,'adduser'])->name('addcustomer');
    Route::post('delete/{id}',[UsersController::class,'deleteuser'])->name('deleteuser');
    Route::get('{id}/edit',[UsersController::class,'getusertoedit'])->name('edituserview');
    Route::post('{id}/updateuser',[UsersController::class,'update'])->name('updateuser');
    Route::get('users',[UsersController::class,'allcustomers'])->name('customersall');
    Route::get('manage/users',[UsersController::class,'manageusers'])->name('manageusers');
    #books
    Route::get('admin/addbook',[BooksController::class,'addbookview'])->name('adminbookadd');
    Route::post('admin/addbook',[BooksController::class,'addbook'])->name('adminaddbook');
    Route::get('admin/books',[BooksController::class,'booksview'])->name('adminbookview');
    Route::get('{id}/editbook',[BooksController::class,'editbookview'])->name('editbookview');
    Route::post('{id}/update',[BooksController::class,'updatebook'])->name('updatebook');
    Route::post('{id}/delete',[BooksController::class,'deletebook'])->name('deletebook');
    Route::get('{path}')->name('viewbook');  
});
