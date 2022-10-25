<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Shared\SharedControllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function adduserview(){
        return view('admin.adduser');
    }
    public function adduser(Request $request){
        $request->validate([
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'contact' => ['required','max:10','unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        ]);
        #user
        $userid = random_int(100000, 99999999);
        $password='Ellipsis@'.random_int(100,999);
        $names=$request->firstname.' '.$request->lastname;
        #sms
        $sms="Hello $names" . "\n" .
        "Your account has cteated succesfully" . "\n" .
        "Username/Email is: $request->email"."\n"."Password is: $password";
        $contact = substr_replace($request->contact, '255', 0, 1);
        #email
        $email=$request->email;
        $to_send = "Hello $names" . "\n" .
        "Your account has cteated succesfully" . "\n" .
        "Username/Email is: $request->email"."\n"."Password is: $password"."\n".
        "Please click the link below to login https://ellipsisinterview.macowigotech.com/login"."\n".
        "For further clarifications: 0757164278 au 0658123265";
        $dynamic_subject = "EllipsisInterview Account";
        $user=User::insert([
        'id'=>$userid,
        'first_name'=>$request->firstname,
        'last_name'=>$request->lastname,
        'contact'=>$request->contact,
        'email'=>$request->email,
        'password'=>Hash::make($password) ,
        'role'=>'user',
        'status'=>'Active',
        ]);
        if($user){
            SharedControllers::sendsms($sms,$contact);
            SharedControllers::sendmail($email,$dynamic_subject,$to_send);
          return redirect()->route('customersall')->with('succes','Succefully user added');
        }
        else{
            return redirect()->back()->with('failed','Sorry Registration failed please Register again');
        }
    }
    public function allcustomers()
    {
        $allcustomers['allcustomer']=User::WHERE('role','!=','admin')->get();
        return view('admin.customerall',$allcustomers);
    }
    public function manageusers()
    {
        $allcustomers['allcustomer']=User::WHERE('role','!=','admin')->get();
        return view('admin.customersmanage',$allcustomers);
    }
    public function getusertoedit($id)
    {
        $user['user']=User::WHERE('id',$id)->get();
        return view('admin.edituser',$user);
    }
    public function update( Request $request,$id ){
        $request->validate([
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'contact' => ['required','max:10'],
            'email' => ['required', 'string', 'email', 'max:255'],
        ]);
        $updatenewuser=User::WHERE('id',$id)->update([
            'first_name'=>$request->firstname,
            'last_name'=>$request->lastname,
            'contact'=>$request->contact ,
            'email'=>$request->email,
        ]);
        if($updatenewuser){
            return redirect()->route('manageusers')->with('succes','Succefully user updated');
        }
        else{
            return redirect()->back()->with('failed','Sorry user upadate failed please try again');
        }
    }
    public function deleteuser($id){
        $getuser=User::WHERE('id',$id)->select('email','contact','first_name','last_name')->first();
        $email=$getuser->email;  
        $names=$getuser->first_name.' '.$getuser->last_name;
        $deleteuser=User::WHERE('id',$id)->delete();
        if($deleteuser){
        #email
        $sms= "Hello $names" ."\n"."Sorry your EllipsisInterview acount has deleted" ."\n".
        "For further clarifications: 0757164278 au 0658123265";
        $dynamic_subject="Ellipsis Account Deleteion";
        SharedControllers::sendmail($email,$dynamic_subject,$sms);
        return redirect()->route('manageusers')->with('succes','Succefully user deleted');
        }
        else{
            return redirect()->back()->with('failed','Sorry user password reset failed please try again');
        }
    }
 
}
