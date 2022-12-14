<?php

use App\Http\Controllers\API\Authentication;
use App\Http\Controllers\API\Books;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login',[Authentication::class,'login']);
Route::post('logout',[Authentication::class,'logout']);
Route::get('booklikes',[Books::class,'bookwithlikes']);
Route::get('booklist',[Books::class,'booklist']);
