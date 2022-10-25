<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="description" content="">
    <title>Ellipsis-Interview</title>
    <link rel="shortcut icon" href="{{ asset('images/logo.png')}}">
  <link href="{{ asset('css/smartstore.css') }}" rel="stylesheet">
  <link href="{{ asset('css/steps.css') }}" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
    <header>
        @include('nav')
    </header> 
<main>
    <div class="container-register">
        <div class="row">
            <div class="col s12 ">
                <div class="card card-login">
                    <div class="card-content">
                    <span class="card-title">Create Account</span>
                    <x-auth-session-status class="red-text" :status="session('status')" />
                    <x-auth-validation-errors class="red-text" :errors="$errors" />
                    @if ($message = Session::get('failed'))
                     <h6 class="red-text">{{ $message }}</h6>    
                     @endif
                    <form method="post" enctype="multipart/form-data" action="{{route('registration')}}">
                        @csrf
                        <div class="row">
                            <div class="input-field col l6 m9 s12">
                            <i class="material-icons prefix">account_circle</i>
                                <input id="firstname" name="firstname" type="text" class="validate" minlength="3" required>
                                <label for="firstname">First Name</label>
                                <span class="helper-text" data-error="Please enter valid first name" data-success="good"></span>
                            </div>
                        
                            <div class="input-field col l6 m9 s12">
                            <i class="material-icons prefix">account_circle</i>
                                <input id="lastname" name="lastname" type="text" class="validate" minlength="3" required>
                                <label for="lastname">Last Name</label>
                                <span class="helper-text" data-error="Please enter valid last name" data-success="good"></span>
                                </div>
                                <div class="input-field col l6 m9 s12">
                            <i class="material-icons prefix">smartphone</i>
                                <input id="input_text" type="text" name="contact"  class="validate" pattern="[0]{1}[1-9]{1}[0-9]{8}" required>
                                <label for="input_text">Phone Contact</label>
                                <span class="helper-text" data-error="Please enter valid phone numbe(0XXXXXXXXX)" data-success="good"></span>
                            </div>
                            <div class="input-field col l6 m9 s12">
                                <i class="material-icons prefix">email</i>
                                    <input id="email" name="email" type="email" class="validate" required>
                                    <label for="email">Email</label>
                                    <span class="helper-text" data-error="Please enter valid email" data-success="good"></span>
                                </div>
                                <div class="input-field col l6 m9 s12">
                                <i class="material-icons prefix">lock</i>
                                    <input id="password" type="password" class="validate" name="password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?]).{5,}" required>
                                    <label for="password">Password</label>
                                    <span toggle="#password" class="field-icon toggle-password"><span class="material-icons">visibility</span></span>
                                    <span class="helper-text" data-error="Please password must be more than 7 Characters contains Upper
                                        case, number and special caharacter example @ # $" data-success="Good"></span>
                                </div> 
                                <div class="input-field col l6 m9 s12">
                                    <i class="material-icons prefix">lock</i>
                                        <input id="password_confirmation" type="password" class="validate" name="password_confirmation"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?]).{5,}" required>
                                        <label for="password_confirmation">Password Confirm</label>
                                        <span toggle="#password_confirmation" class="field-icon toggle-password"><span class="material-icons">visibility</span></span>
                                        <span class="helper-text" data-error="Please password must be more than 7 Characters contains Upper
                                        case, number and special caharacter example @ # $" data-success="Good"></span>
                                    </div>  
                                </div>
                                <a href="{{ route('loginview')}}">Already Have Account? Login</a>  
                                <button class="btn right maroon" type="submit" name="register">Create Account</button>
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
<script src="{{asset('js/steps.js')}}"></script>
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