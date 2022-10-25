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
          <nav class="navbar nav-extended no-padding">
            <div class="nav-wrapper"></div>
          </nav>
    </header> 
<main>
    <div class="container-login">
        <div class="row">
            <div class="col s12 ">
                <div class="card card-login">
                    <div class="card-content">
                    <span class="card-title">Enter Recovery Code</span>
                    <x-auth-session-status class="red-text centered-text" :status="session('status')" />
                    <x-auth-validation-errors class="red-text centered-text" :errors="$errors" />
                    @if ($message = Session::get('succes'))
                     <h6 class="blue-text centered-text">{{ $message }}</h6>    
                     @endif
                     @if ($message=Session::get('failed'))
                     <h6 class="red-text centered-text">{{ $message }}</h6>  
                     @endif
                    <form method="post" enctype="multipart/form-data">
                        @csrf
                            <div class="step-content">
                                <div class="row">
                                    <div class="input-field col s12" >
                                    <i class="material-icons prefix">vpn_key</i>
                                    <input id="token" name="token" type="text" class="validate" >
                                        <label for="token">Your Token</label>
                                      <span class="helper-text" data-error="Please enter token received" data-success="Good"></span>
                                    </div>
                                </div>
                                   <button class="btn right maroon" type="submit" formaction="{{route('verifyrecovery',Auth::user()->email)}}">Verify</button>
                                   <button class="btn left maroon" type="submit" formaction="{{route('resendtoken',Auth::user()->email)}}">RESEND</button>
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
<!-- External libraries -->
<script type="text/javascript" src="{{asset('js/Chart.js')}}"></script>
<script type="text/javascript" src="{{asset('js/Chart.Financial.js')}}"></script>

<script type="text/javascript" src="{{asset('js/fullcalendar.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/datatables.min.js')}}"></script>
<script src="{{asset('js/masonry.pkgd.min.js')}}"></script>

<!-- Initialization script -->
<script src="{{asset('js/admin-materialize.min.js')}}"></script>
<script src="{{asset('js/materialize.js')}}"></script>
   

</body>

</html>