<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Shared\SharedControllers;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    public function store(LoginRequest $request)
    {
        $request->authenticate();
        $request->session()->regenerate();
        #email
        $dynamic_subject="SmartStore Login ".date('Y M d H:i:s');
        $to_send="Habari"."\n"."Umeingia kwenye akaunti yako ya SmartStore"."\n".
        "Muda: ".date('d M Y H:i:s')."\n"."Kama siyo wewe uliyeingia kwenye mfumo tafadhali toa taarifa."."\n".
        "Kwa mawasiliano simu: 0757164278 au 0658123265 Email: support@macowigotech.com";
        SharedControllers::sendmail(Auth::user()->email,$dynamic_subject,$to_send);
        return redirect()->intended(RouteServiceProvider::HOME);
    }

    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login')->with('success','You are Successfully Logged Out');
    }
}
