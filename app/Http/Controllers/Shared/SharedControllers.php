<?php

namespace App\Http\Controllers\Shared;

use App\Http\Controllers\Controller;
use App\Models\User_log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SharedControllers extends Controller
{
    public static function savetoken($tokenid,$email,$code,$status){
        DB::table('pass_recoveries')->insert([
            'token_id'=>$tokenid,
            'email'=>$email,
            'token'=>$code,
            'status'=>$status,
        ]);
    }
    public static function sendmail($email,$dynamic_subject,$to_send){
        // ini_set('display_errors', 1);
        // error_reporting(E_ALL);
        // $from = "smartstore@macowigotech.com";
        // $to = $email;
        // $subject = $dynamic_subject;
        // $message = $to_send;
        // $headers = "From:" . $from;
        // mail($to, $subject, $message, $headers);
    }
    
    public static function sendsms($sms,$contact)
    {
    //     $api_key = 'ddcd9770ca114dea';
    //     $secret_key = 'ODgzZjI4NmVjYTdjYjE0ZTA2ZWYwNGJlYjlkNmE1ZDBiNDI4YTk3MTcwN2I1YmFhNWYxOGE0MGZlNDIzZWZhNw==>';
    //     $postData = array(
    //         'source_addr' => 'MACOWIGO',
    //         'encoding' => 0,
    //         'schedule_time' => '',
    //         'message' => $sms,
    //         'recipients' => [array('recipient_id' => '1', 'dest_addr' => $contact)],
    //     );
    //     $Url = 'https://apisms.beem.africa/v1/send';
    //     $ch = curl_init($Url);
    //     error_reporting(E_ALL);
    //     ini_set('display_errors', 1);
    //     curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    //     curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    //     curl_setopt_array($ch, array(
    //         CURLOPT_POST => true,
    //         CURLOPT_RETURNTRANSFER => true,
    //         CURLOPT_HTTPHEADER => array(
    //             'Authorization:Basic ' . base64_encode("$api_key:$secret_key"),
    //             'Content-Type: application/json',
    //         ),
    //         CURLOPT_POSTFIELDS => json_encode($postData),
    //     ));

    //     $response = curl_exec($ch);

    //     if ($response === false) {
    //         echo $response;

    //         die(curl_error($ch));
    //     }
    //     var_dump($response);
     }
}
