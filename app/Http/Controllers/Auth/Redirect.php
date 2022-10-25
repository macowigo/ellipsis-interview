<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Redirect extends Controller
{
    public  static function redirectuser()
    {
        if(Auth::User()->role=="admin"){
            return redirect()->route('admindashboard');
        }
        elseif(Auth::User()->role=="user"){
            return redirect()->route('userdashboard');
        }

        else{
            return redirect('auth/logout');
        }

    }
}
