<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class Books extends Controller
{
    public function bookwithlikes()
    {
        $getbook = Book::WHERE('likes','>',0)->select('booktitle','likes')
        ->orderBy('likes','DESC')->limit(20)->get();
       // $getbook=Book::whereRaw('likes = (select max(`likes`) from books)')->get();
        if(count($getbook)>0){
            $output=['massage'=>'books with more likes','books'=>$getbook];
           
        }
        else
        {
            $output=['massage'=>'no any book with like found'];
      
        }
       return $output;
    }
    public function booklist()
    {
        $getbook = Book::select('booktitle')->get();
        if(count($getbook)>0){
            $output=['massage'=>'list of books','books'=>$getbook];
        }
        else
        {
            $output=['massage'=>'no any book found'];
      
        }
       return $output;
    }
    
}
