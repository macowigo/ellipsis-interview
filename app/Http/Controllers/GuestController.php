<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Shared\SharedControllers;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rules;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class GuestController extends Controller
{
    public function home()
    {
        return view('login');
    }
    public function loginview()
    {
        return view('login');
    }
    public function registerview(){
        return view('register');
    }

    public function forgotpasswordview(){
        return view('forgotpassword');
    }

    public function registeruser(Request $request){
        $request->validate([
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'contact' => ['required','max:10','unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        $email=$request->email;
        $to_send = "Hello $request->firstname $request->lastname" . "\n" .
        "Your have created account successfully" . "\n" .
        "Please click the link below to login https://ellipsisinterview.macowigotech.com/login"."\n".
        "For further clarifications: 0757164278 au 0658123265";
        $dynamic_subject = "EllipsisInterview AccountRegistration";
        $user=User::create([
        'id'=>random_int(100000, 99999999),
        'first_name'=>$request->firstname,
        'last_name'=>$request->lastname,
        'contact'=>$request->contact,
        'email'=>$request->email,
        'password'=>Hash::make($request->password) ,
        'role'=>'user',
        'status'=>'Active'
        ]);
        if($user){
            SharedControllers::sendmail($email,$dynamic_subject,$to_send);
            event(new Registered($user));
            Auth::login($user);
          return redirect()->route('redirect')->with('succes','Succefully Registered Please continue with your activities');
        }
        else{
            return redirect()->back()->with('failed','Sorry Registration failed please Register again');
        }
    }
    public function checkifexit(Request $request)
    {
       $request->validate([
          'email'=>'required'
        ]);
        $checkuser=User::WHERE('email',$request->email)->first();
        if($checkuser){
        Auth::login($checkuser);
        #token
        $tokenid = random_int(10000, 999999999);
        $code = random_int(10000, 99999);
        $status = "ACTIVATION";
        #SMS
        $sms="Password recovery code is $code";
        $dynamic_subject="Smartstore Passwordrecovery";
        SharedControllers::savetoken($tokenid,$request->email,$code,$status);
        SharedControllers::sendsms($sms,substr_replace(Auth::user()->contact, '255', 0, 1));
        SharedControllers::sendmail($request->email,$dynamic_subject,$sms);
        return redirect()->route('verifyrecoveryview')->with('succes','Please enter recovery code sent via sms or email to recover your account');
        }
        else{
            return redirect()->back()->with('failed','Sorry we dont recognize this email: '.$request->email.',Please enter correct email');
        }
    }
}
