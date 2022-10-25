<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Shared\SharedControllers;
use App\Models\Pass_recovery;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Hash;

class VerifyToken extends Controller
{
    public function verifytokenview(){
        return view('verifytoken');
    }

    public function verifytoken(Request $request,$email)
    {
        $request->validate([
          'token'=>'required'
        ]);
        $checktoken = Pass_recovery::WHERE([
            ['token', $request->token],
            ['email',$email],
            ['status','ACTIVATION']
            ])->first();
        if($checktoken){
             #sms
        $names=Auth::user()->first_name.' '.Auth::user()->last_name;
        $contact = substr_replace(Auth::user()->contact, '255', 0, 1);
        $sms="Habari $names" . "\n" . "Umefanikiwa kutengeneza akaunti yako ya SMARTSTORE" . "\n" .
       "Umepewa siku 7 bure kujaribu mfumo. Mawasiliano zaidi: 0757164278 au 0658123265";

       #email
       $dynamic_subject = "SmartStore Usajili";
       $to_send = "Habari $names" . "\n" . "Hongera umefanikiwa kutengeneza akaunti yako ya smartstore" . "\n" .
        "Umepewa siku saba free za kujaribu mfumo wetu,Baada ya hapo utatakiwa kulipia huduma" . "\n" .
        "Kwa mawasiliano simu: 0757164278 au 0658123265";

        #logs
        $logid = random_int(100, 999999999);
        $log_type='ACCOUNT';
        $log_comment='activate account';
        $userid=Auth::user()->id;

        Pass_recovery::WHERE('email',$email)->update(['status'=>'ACTIVATED']);
        User::WHERE('email',$email)->update(['status'=>'New']);
        SharedControllers::sendsms($sms,$contact);
        SharedControllers::sendmail($email,$dynamic_subject,$to_send);
        SharedControllers::savelogs($logid,$userid,$log_type,$log_comment);
        return redirect()->back()->with('succes','Your Token verified');
        }
        else{
            return redirect()->back()->with('failed','Sorry Token You entered is not correct');
        }
        
    }

    public function resendtoken($email){
          #token
          $tokenid = random_int(10000, 999999999);
          $code = random_int(10000, 99999);
          $status = "ACTIVATION";
          #logs
          $logid = random_int(100, 999999999);
          $log_type='ACCOUNT';
          $log_comment='Request New Activation Code';
          #sms
          $sms="New Activation code ni: $code";
          $contact = substr_replace(Auth::user()->contact, '255', 0, 1);
          #email
          $to_send = "New Activation code is $code";
          $dynamic_subject = "Account Activation Code";
        SharedControllers::savetoken($tokenid,$email,$code,$status);
        SharedControllers::sendsms($sms,$contact);
        SharedControllers::sendmail($email,$dynamic_subject,$to_send);
        SharedControllers::savelogs($logid,Auth::user()->id,$log_type,$log_comment);
        return redirect()->back()->with('succes','Activation code sent via your email and Phone Contact');
        
    }

    public function verifyforgotpassview(){
        return view('verifyforgot');
    }

    public function changepassrecoveryview(){
        return view('changepassword');
    }
    public function verifyforgotpass(Request $request,$email)
    {
        $request->validate([
          'token'=>'required'
        ]);
        $checktoken = Pass_recovery::WHERE([
            ['token', $request->token],
            ['email',$email],
            ['status','ACTIVATION']
            ])->first();
        if($checktoken){
        #logs
        $logid = random_int(100, 999999999);
        $log_type='ACCOUNT';
        $log_comment='Verify recovery code';
        $userid=Auth::user()->id;

        Pass_recovery::WHERE('email',$email)->update(['status'=>'ACTIVATED']);
        SharedControllers::savelogs($logid,$userid,$log_type,$log_comment);
        return redirect()->route('changepassrecoveryview')->with('succes','Your Token verified');
        }
        else{
            return redirect()->back()->with('failed','Sorry Recovery code You entered is not correct');
        } 
    }

    public function changepassword(Request $request)
    {
        $request->validate([
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        $upadatepassword=User::WHERE('id',Auth::user()->id)
         ->update(['password'=>Hash::make($request->password)]);
            if($upadatepassword){
                #logs
                $logid = random_int(100, 999999999);
                $log_type='ACCOUNT';
                $log_comment = "Changing Password(Password recovery)";
               SharedControllers::savelogs($logid,Auth::user()->id,$log_type,$log_comment);
                return redirect()->route('redirect')->with('success','Your Password Successfully Changed');
            }
            else{
                return redirect()->back()->with('failed','Sorry Your Password Changes Failed');
            }
    }
}
