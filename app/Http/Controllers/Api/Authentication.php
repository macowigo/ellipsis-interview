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
            return $response;
        
    }
    public function logout($id){
        $delete=DB::table('personal_access_tokens')->WHERE('tokenable_id',$id)->delete();
        if($delete){
            $response = ['authentication' => true, 'message' => 'successful'];
        }
        else{
            $response = ['authentication' => false, 'message' => 'couldnt reach server'];
        }
 return $response;
    }
}
