<?php

namespace App\Providers;

use App\Models\Book;
use App\Models\LikeComent;
use App\Models\Payment;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AdminProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer('admin.*', function ($admin) {
            $allusers=User::WHERE('role','!=','admin')->count();
            $allbooks=Book::count();
            $admin->with('allusercount', $allusers);
            $admin->with('bookscount', $allbooks);
           
        });
        View::composer('users.*', function ($users) {
            $allbooks=Book::count();
            $likedbook=LikeComent::WHERE([['userid',Auth::user()->id],['type','like']])->count();
            $markedbook=LikeComent::WHERE([['userid',Auth::user()->id],['type','bookmark']])->count();
            $users->with('bookscount', $allbooks);
            $users->with('likescount', $likedbook);
            $users->with('markedcount', $markedbook);
           
        });
    }
}
