<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="description" content="">
    <title>SmartStore</title>
    <link rel="shortcut icon" href="{{ asset('images/logo.png')}}">
  <link href="{{ asset('css/smartstore.css') }}" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
    <header>
        @include('nav')
    </header> 

  <main>

    <div class="preloader-wrapper big active loader" id="loading">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-red">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-yellow">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-green">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div class="container-login page" style="display: none;">
      <div class="row">
        <div class=" col s12 ">
          <div class="card card-login">
            <div class="card-content">
              <span class="materialize-red-text"></span>
              <span class="card-title">Password Recovery</span>
              <x-auth-session-status class="red-text centered-text" :status="session('status')" />
              <x-auth-validation-errors class="red-text centered-text" :errors="$errors" />
            @if(session('status'))
            <div class="red-text centered-text">{{ session('status') }}</div>
             @endif
            @if ($message = Session::get('success'))
              <h6 class="blue-text centered-text">{{ $message }}</h6>    
             @endif
              @if ($message=Session::get('failed'))
              <h6 class="red-text centered-text">{{ $message }}</h6>  
              @endif
              <form method="post" enctype="multipart/form-data" action="{{route('passrecover')}}">
                @csrf
                <div class="input-field">
                  <i class="material-icons prefix">email</i>
                  <input id="email" name="email" type="email" class="validate" required>
                  <label for="email">Your Email</label>
                  <span class="helper-text" data-error="Please enter Valid email Address" data-success="right"></span>
                </div>
                <a class="left"href="{{route('register')}}">Dont Have Account? Register</a>
                <a class="right" href="{{route('loginview')}}">Know Password? Login</a>

                <br><br>
                <div>
                  <input class="btn right hover maroon" type="submit"  value="Next">

                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

    </div>

  </main>

  <!-- Scripts -->
  <script src="{{asset('js/jquery.min.js')}}"></script>
  <script src="{{asset('js/moment.min.js')}}"></script>
  <!-- External libraries -->
  <script type="text/javascript" src="{{asset('js/Chart.js')}}"></script>
  <script type="text/javascript" src="{{asset('js/Chart.Financial.js')}}"></script>
  
  <script type="text/javascript" src="{{asset('js/fullcalendar.min.js')}}"></script>
  <script type="text/javascript" src="{{asset('js/datatables.min.js')}}"></script>
  <script src="{{asset('js/masonry.pkgd.min.js')}}"></script>
  
  <!-- Initialization script -->
  <script src="{{asset('js/admin-materialize.min.js')}}"></script>
  <script src="{{asset('js/materialize.js')}}"></script>
  <script src="{{asset('js/preloader.js')}}"></script>
</body>

</html>