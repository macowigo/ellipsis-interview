<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\LikeComent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BooksController extends Controller
{
    public function dashboard()
    {
        return view('users.dashboard');
    }
  
    public function booksview()
    {
        $books['books']=Book::all();
        return view('users.books',$books);
    }

    #like
    public function likedbook()
    {
        $likedbooks['liked']=LikeComent::WHERE([['userid',Auth::user()->id],['type','like']])
        ->join('books', 'books.bookid', '=', 'like_coments.bookid')->get();
        return view('users.booksliked',$likedbooks);
    }
    public function likebook($id)
    {
        $checlike=LikeComent::WHERE([['bookid',$id],['userid',Auth::user()->id],['type','like']])->first();
        if($checlike){
            return redirect()->back()->with('failed','Sorry Book selected already liked.Please select another book'); 
        }
        else{
            $likebook=LikeComent::insert([
                'id'=>random_int(100000000,999999999),
                'bookid'=>$id,
                'userid'=>Auth::user()->id,
                'type'=>'like'
           ]);
           $likebook=Book::WHERE('bookid',$id)->increment('likes');
           if($likebook){
               return redirect()->back()->with('succes','Your book liked successfully');
           }
           else{
               return redirect()->back()->with('failed','There was a problem like book.Please try again'); 
           }
        }
       
    }
    #comment
    public function commentview($id)
    {
        return view('users.bookcomment')->with('id',$id);
    }
    public function commentbook( Request $request,$id)
    {
        $request->validate(['comment'=>'required|max:255']);
        $commentbook=LikeComent::insert([
             'id'=>random_int(100000000,999999999),
             'bookid'=>$id,
             'userid'=>Auth::user()->id,
             'comments'=>$request->comment,
             'type'=>'comment'
        ]);
        if($commentbook){
            return redirect()->route('userbookview')->with('succes','You commented successfully');
        }
        else{
            return redirect()->back()->with('failed','There was a problem in commenting.Please try again'); 
        }
    }

    #mark book
    public function markedbook()
    {
        $markedbooks['marked']=LikeComent::WHERE([['userid',Auth::user()->id],['type','bookmark']])
        ->join('books', 'books.bookid', '=', 'like_coments.bookid')->get();
        return view('users.booksmarked',$markedbooks);
    }
    public function bookmark($id)
    {
        $checkmark=LikeComent::WHERE([['bookid',$id],['userid',Auth::user()->id],['type','bookmark']])->first();
        if($checkmark){
            return redirect()->back()->with('failed','Sorry Book selected already marked.Please select another book'); 
        }
        else{
            $bookmarkbook=LikeComent::insert([
                'id'=>random_int(100000000,999999999),
                'bookid'=>$id,
                'userid'=>Auth::user()->id,
                'type'=>'bookmark'
           ]);
           if($bookmarkbook){
               return redirect()->back()->with('succes','Book marked successfully');
           }
           else{
               return redirect()->back()->with('failed','There was a problem in marking book.Please try again'); 
           }
        }
    }
    #unmark book
    public function unbookmark($id)
    {
           $unbookmarkbook=LikeComent::WHERE([['bookid',$id],
           ['userid',Auth::user()->id],['type','bookmark']])->delete();
           if($unbookmarkbook){
               return redirect()->back()->with('succes','Book Unmarked successfully');
           }
           else{
               return redirect()->back()->with('failed','There was a problem in marking book.Please try again'); 
           }
        } 
}
