<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="description" content="">
    <title>ElipsisInterview-Books</title>
    <link rel="shortcut icon" href="{{ asset('images/logo.png')}}">
    <link href="{{ asset('css/smartstore.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('datatable/style.css')}}" rel="stylesheet">  

</head>

<body class="has-fixed-sidenav">
    <header>
        @include('users.nav')
    </header>
<main>
<div class="preloader-wrapper big active loader" id="loading">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-red">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-yellow">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-green">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
        <div class="container page" style="display: none;">
    <div class="row">
        <div class="col s12">
          <div class="card material-table">
            <div class="card-content" >
            <h6 class="maroon-text centered-text" ><i class="material-icons">library_books</i> 
              Books: {{number_format($bookscount)}}</h6>
            <x-auth-session-status class="red-text centered-text" :status="session('status')" />
            @if ($message = Session::get('succes'))
              <h6 class="blue-text centered-text">{{ $message }}</h6>    
             @endif
              @if ($message=Session::get('failed'))
              <h6 class="red-text centered-text">{{ $message }}</h6>  
              @endif
              @if ($books->isempty())
              <span class="materialize-red-text">Sorry currently there is no any book</span>
              @else
              <div class="table-header">
                <div class="actions">
                    <a href="#search" class="search-toggle  btn-small btn-floating waves-effect maroon hoverable ">
                        <i class="material-icons">search</i></a>
                </div>
            </div>
         <table id="datatable" class="responsive-table">
            <thead>
            <tr>
            <th>Book Title</th>
            <th>View</th>
            <th>Like</th>
            <th>Mark</th>
            <th>Comment</th>
            </tr>
            </thead>
            @foreach ($books as $bookslist)
            <tr>
              <td>{{$bookslist->booktitle}}</td>
              <td>
                <a href="{{route('viewbook',$bookslist->path)}}" target="_blank" class="btn-floating maroon btn-small"
                    title="click to view"><i class="material-icons">visibility</i>
                </a>
              </td>           
                <form action="" method="POST">
                    @csrf
                     @method('POST')
                     <td>
                      <button type="submit" class="btn-floating maroon btn-small" title="click to like" 
                      formmethod="POST" formaction="{{route('likebook',$bookslist->bookid)}}">
                        <i class="material-icons">thumb_up</i>
                      </button>
                      </td>
                      <td>
                        <button type="submit" class="btn-floating maroon btn-small" title="Click to mark book"
                        formmethod="POST" formaction="{{route('bookmark',$bookslist->bookid)}}" >
                        <i class="material-icons">bookmark_add</i>
                        </button>
                      </td>
                    </form>
                    <td>
                      <a href="{{route('commentview',$bookslist->bookid)}}" class="btn-floating maroon btn-small"
                          title="click to comment"><i class="material-icons">comment</i>
                      </a>
                    </td> 
             </tr>
            @endforeach
             </table>
              @endif
         
            </div>
          </div>
         
        </div> 
    </div> 
</div>
        
</main>
    
<!-- Scripts -->
<script src="{{asset('js/jquery.min.js')}}"></script>
<script src="{{asset('js/moment.min.js')}}"></script>
<script src="{{asset('js/preloader.js')}}"></script>
<!-- External libraries -->
<script type="text/javascript" src="{{asset('js/Chart.js')}}"></script>
<script type="text/javascript" src="{{asset('js/Chart.Financial.js')}}"></script>

<script type="text/javascript" src="{{asset('js/fullcalendar.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/datatables.min.js')}}"></script>
<script src="{{asset('js/masonry.pkgd.min.js')}}"></script>

<!-- Initialization script -->
<script src="{{asset('js/admin-materialize.min.js')}}"></script>
    <script src="{{asset('js/datatables.min.js')}}" type="text/javascript"></script>  
    <script src="{{asset('js/datatable-advanced.min.js')}}" type="text/javascript"></script>
    <script src='{{asset('datatable/jquery.js')}}'></script>
    <script src='{{asset('datatable/datatable.js')}}'></script>
  
    {{-- buttons --}}
    <script src="{{asset('datatable/script.js')}}"></script>
</body>
</html>