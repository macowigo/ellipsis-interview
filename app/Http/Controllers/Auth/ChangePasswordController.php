<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Shared\SharedControllers;
use App\Models\User;
use Illuminate\Validation\Rules;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ChangePasswordController extends Controller
{
   public function changepassview()
   {
      return view('shared.changepassword');
   }

    public function changepassword(Request $request)
    {
        $request->validate([
            'oldpassword'=>'required',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        if(Hash::check($request->oldpassword,Auth::user()->password)){
            $upadatepassword=User::WHERE('id',Auth::user()->id)
            ->update(['password'=>Hash::make($request->password)]);
            if($upadatepassword){
                #sms
                $name=Auth::user()->first_name.' '.Auth::user()->last_name;
                $sms="Hello $name Your Password Changed Successfully";
                #mail
                $to_send="Hello $name Your Password Changed Successfully"."\n".
                "Time: ".date('Y M d H:i:s')." If you dont recognize this action please contact us soon"."\n".
                "Email: support@macowigotech,com"."\n"."Simu: 0757164278 au 0658123265 ";
                $dynamic_subject="SmartStore Password ".date('Y M d H:i:s') ;
               SharedControllers::sendsms($sms,substr_replace(Auth::user()->contact,255,0,1));
               SharedControllers::sendmail(Auth::user()->email,$dynamic_subject,$to_send);
                return redirect()->route('changepass')->with('success','Your Password Successfully Changed Please remember your password');
            }
            else{
                return redirect()->back()->with('failed','Sorry Your Password Changes Failed');
            }
        }
        else{
            return redirect()->back()->with('failed','Sorry your Current Password is not Correct');
        }
    }
}
