<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Termwind\Components\Raw;

class DashboardController extends Controller
{
    public function dashboardview(){
        $systemusers=User::select(DB::raw('role'),
        DB::raw('COUNT(role) as customers'))->groupBy('role')->get();
        $users[] = ['Role','Percentage'];
        foreach ($systemusers as $key => $value) {
        $users[++$key] = [$value->role,$value->customers];
        }
        return view('admin.dashboard')->with('users',json_encode($users));
    }
}
