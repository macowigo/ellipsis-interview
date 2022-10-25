<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    public function addbookview()
    {
        return view('admin.bookadd');
    }

    public function booksview()
    {
        $books['books']=Book::all();
        return view('admin.books',$books);
    }

    public function addbook(Request $request){
        $request->validate([
            'book'=>'required',
        ]);
            $allowed = array("pdf" => "image/pdf", "docx" => "image/docx", "doc" => "image/doc");
            $filename = $_FILES["book"]["name"];
            $filetype = $_FILES["book"]["type"];
            $filesize = $_FILES["book"]["size"];
            $filenameonly = preg_replace('/\\.[^.\\s]{3,4}$/', '', $filename); 
            $maxsize = 1024 * 1024*3;
            $ext = strtolower( pathinfo($filename, PATHINFO_EXTENSION));
            $rename_file=random_int(10000000, 999999999).'.'.$ext;
            $path='../public/uploads/'.$rename_file;
            if(!array_key_exists($ext, $allowed)){
                return redirect()->back()->with('failed','Please select a valid book format(PDF,DOC,DOCX)');
            }
            elseif($filesize > $maxsize){
                return redirect()->back()->with('failed','File size is larger than the allowed limit(3MB)');
            }
            else{
                $chekbooktitle=Book::WHERE('booktitle',$filenameonly)->first();
                if($chekbooktitle){
                    return redirect()->back()->with('failed','Sorry Book already exist in Library');
                }
                else{
                    move_uploaded_file($_FILES["book"]["tmp_name"],$path);
                    $addbook=Book::insert([
                        'bookid'=>random_int(1000,9999999),
                        'booktitle'=>$filenameonly,
                        'path'=>$path,
                    ]);
                    if($addbook){
                        return redirect()->back()->with('succes','Your book uploaded successfully');
                    }
                    else{
                        return redirect()->back()->with('failed','There was a problem uploading book. Please try again');
                    }
                }
                     
        }
    }
    #update book
    public function editbookview($id)
    {
        $getbook=Book::WHERE('bookid',$id)->first();
        return view('admin.bookedit')->with(['tittle'=>$getbook->booktitle,'id'=>$id]);
    }
    public function updatebook(Request $request, $id)
    {
        $request->validate(['booktitle'=>'required']);
        #title only
        if($request->book==''){
            $updatebook=Book::WHERE('bookid',$id)->update(['booktitle'=>$request->booktitle]);
            if($updatebook){
                return redirect()->route('adminbookview')->with('succes','Your book updated successfully');
            }
            else{
                return redirect()->back()->with('failed','There was a problem updating book. Please try again');    
            }
        }
        #title and apload
        else
        {
            $getpath=Book::WHERE('bookid',$id)->first();
            $allowed = array("pdf" => "image/pdf", "docx" => "image/docx", "doc" => "image/doc");
            $filename = $_FILES["book"]["name"];
            $filetype = $_FILES["book"]["type"];
            $filesize = $_FILES["book"]["size"];
            $maxsize = 1024 * 1024*3;
            $ext = strtolower( pathinfo($filename, PATHINFO_EXTENSION));
            $rename_file=random_int(10000000, 999999999).'.'.$ext;
            $path='../public/uploads/'.$rename_file;
            if(!array_key_exists($ext, $allowed)){
                return redirect()->back()->with('failed','Please select a valid book format(PDF,DOC,DOCX)');
            }
            elseif($filesize > $maxsize){
                return redirect()->back()->with('failed','File size is larger than the allowed limit(3MB)');
            }
            else{
                unlink($getpath->path);
                move_uploaded_file($_FILES["book"]["tmp_name"],$path);
                $updatebook=Book::WHERE('bookid',$id)->update([
                    'booktitle'=>$request->booktitle,
                    'path'=>$path
                ]);
                    if($updatebook){
                        return redirect()->route('adminbookview')->with('succes','Your book updated successfully');
                    }
                    else{
                        return redirect()->back()->with('failed','There was a problem updating book. Please try again'); 
                    } 
            }
                  
        }
    }
    public function deletebook($id)
    {
        $getpath=Book::WHERE('bookid',$id)->first();
        $deletebook=Book::WHERE('bookid',$id)->delete();
        if($deletebook){
            unlink($getpath->path);
            return redirect()->back()->with('succes','Your book deleted successfully');
        }
        else{
            return redirect()->back()->with('failed','There was a problem deleting book.Please try again'); 
        }
    }
}
