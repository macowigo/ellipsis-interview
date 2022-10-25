
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="description" content="">
    <title>EllipsissIntreview-EditBook</title>
    <link rel="shortcut icon" href="{{ asset('images/logo.png')}}">
    <link href="{{ asset('css/smartstore.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body class="has-fixed-sidenav">
    <header>
       @include('admin.nav')
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
        <div class="container-register page" style="display: none;">
    <div class="row">
        <div class="col s12">
          <div class="card card-login">
            <div class="card-content" >
            <h6 class="maroon-text centered-text" ><i class="material-icons">bookmark_add</i> Add Book</h6>
            <x-auth-session-status class="red-text centered-text" :status="session('status')" />
            <x-auth-validation-errors class="red-text centered-text" :errors="$errors" />
            @if ($message = Session::get('succes'))
              <h6 class="blue-text centered-text">{{ $message }}</h6>    
             @endif
              @if ($message=Session::get('failed'))
              <h6 class="red-text centered-text">{{ $message }}</h6>  
              @endif
               <form method="POST" enctype="multipart/form-data" action="{{route('updatebook',$id)}}">
                @csrf
               <div class="input-field col s12">
                <i class="material-icons prefix">library_books</i>
                    <input id="booktitle" name="booktitle" type="text"
                    value="{{$tittle}}" class="validate" minlength="3" required>
                    <label for="booktitle">Book Title</label>
                    <span class="helper-text" data-error="Please enter valid first name" data-success="good"></span>
                </div>
                <div class="col s12 file-field input-field">
                    <div class="btn blue">
                        <span>Select Book</span>
                        <i class="material-icons">library_books</i>
                        <input type="file"  name="book" id="fileSelect" class="validate">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" >
                    </div>
                 </div> 
                <div  class="col s12" >
                <button class="btn right hoverable maroon" type="submit">UPDATE</button>
                </div>
               </form>
            </div>
          </div>
         
        </div> 
    </div> 
</div>         
</main>
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
</body>
</html>