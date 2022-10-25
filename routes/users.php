<?php
use App\Http\Controllers\Users\BooksController;
use Illuminate\Support\Facades\Route;
Route::middleware('auth','role:user')->group(function () {
    Route::get('users/dashboard',[BooksController::class,'dashboard'])->name('userdashboard');  
    #books
    Route::get('user/books',[BooksController::class,'booksview'])->name('userbookview');
    Route::post('user/{id}/like',[BooksController::class,'likebook'])->name('likebook');
    Route::get('{book}/comment',[BooksController::class,'commentview'])->name('commentview');
    Route::post('{id}/comment',[BooksController::class,'commentbook'])->name('commentbook');
    Route::post('{id}/bookmark',[BooksController::class,'bookmark'])->name('bookmark');
    Route::post('{id}/unbookmark',[BooksController::class,'unbookmark'])->name('unbookmark');
    Route::get('books/liked',[BooksController::class,'likedbook'])->name('userlikedbook');
    Route::get('books/marked',[BooksController::class,'markedbook'])->name('usermarkedbook');
});
