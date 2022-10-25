<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="description" content="">
    <title>SmartShop-ChangePassword</title>
    <link rel="shortcut icon" href="{{ asset('images/logo.png')}}">
    <link href="{{ asset('css/smartstore.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{asset('datatable/style.css')}}"/>  

</head>

<body>
    <header>
        <nav class="navbar nav-extended no-padding">
          <div class="nav-wrapper"></div>
        </nav>
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
        <div class="container-login page" style="display: none;">
    <div class="row">
        <div class="col s12">
          <div class="card material-table">
            <div class="card-content" >
            <h6 class="maroon-text centered-text" ><i class="material-icons">change_circle</i> Change Password</h6>
            <x-auth-session-status class="red-text centered-text" :status="session('status')" />
            <x-auth-validation-errors class="red-text centered-text" :errors="$errors" />
            @if(session('status'))
            <div class="red-text centered-text">{{ session('status') }}</div>
             @endif
            @if ($message = Session::get('failed'))
              <h6 class="blue-text centered-text">{{ $message }}</h6>    
             @endif
              <form method="POST" action="{{route('changepassrecovery')}}">
                @csrf
                <div class=" row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">lock_reset</i>
                        <input id="password" name="password" type="password" class="validate" minlength="8" required>
                        <label for="password">New Password</label>
                        <span toggle="#password" class="field-icon toggle-password">
                            <span class="material-icons">visibility</span></span>
                        <span class="helper-text" data-error="please enter valid new password" data-success="right"></span>
                    </div>
                    <div class="input-field col s12">
                        <i class="material-icons prefix">lock_reset</i>
                        <input id="password_confirmation" name="password_confirmation" type="password" class="validate" minlength="8" required>
                        <label for="password_confirmation">Confirm Password</label>
                        <span toggle="#password_confirmation" class="field-icon toggle-password">
                            <span class="material-icons">visibility</span></span>
                        <span class="helper-text" data-error="please confirm new password" data-success="right"></span>
                    </div>
                    <input class="btn right maroon" type="submit" value="CHANGE">
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