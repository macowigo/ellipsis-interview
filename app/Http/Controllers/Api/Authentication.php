<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class Authentication extends Controller
{
    public function login(Request $request){
        if($request->email=='' || $request->password==''){
            $response = ['authentication' => false, 'message' =>'password and email value are empty'];
        }
        else{
            $user = User::WHERE('email', $request->email)->first();
            if ($user){
            if(Hash::check($request->password, $user->password))
            {
                 $token = $user->createToken("MyToken")->plainTextToken;
                 $response = ['authentication' => true, 'token' => $token, 'user' => $user, 'message' => 'login successful'];
            }
            else{
                $response = ['authentication' => false, 'message' =>'incorrect password'];
            } 
        }
        else{
            $response = ['authentication' => false, 'message' => 'incorrect email'];
        }
        }
            return $response;
        
    }
    public function logout(Request $request){
        if($request->id==''){
            $response = ['logout' => false, 'message' => 'user id is empty'];
        }
        else{
            $delete=DB::table('personal_access_tokens')->WHERE('tokenable_id',$request->id)->delete();
            if($delete){
                $response = ['logout' => true, 'message' => 'successful'];
            }
            else{
                $response = ['logout' => false, 'message' => 'couldnt reach server'];
            }
        }
      
 return $response;
    }
}
