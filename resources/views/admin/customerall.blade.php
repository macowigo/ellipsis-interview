<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="description" content="">
    <title>ElipsisInterview-Users</title>
    <link rel="shortcut icon" href="{{ asset('images/logo.png')}}">
    <link href="{{ asset('css/smartstore.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('datatable/style.css')}}" rel="stylesheet">  

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
        <div class="container page" style="display: none;">
    <div class="row">
        <div class="col s12">
          <div class="card material-table">
            <div class="card-content" >
            <h6 class="maroon-text centered-text" ><i class="material-icons">group</i> Users: {{$allusercount}}</h6>
            <x-auth-session-status class="red-text centered-text" :status="session('status')" />
            @if ($message = Session::get('succes'))
              <h6 class="blue-text centered-text">{{ $message }}</h6>    
             @endif
              @if ($message=Session::get('failed'))
              <h6 class="red-text centered-text">{{ $message }}</h6>  
              @endif
              @if ($allcustomer->isempty())
              <span class="materialize-red-text">Sorry currently there is no any user</span>
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
            <th>FirstName</th>
            <th>LastName</th>
            <th>Phone</th>
            <th>Email</th>
            </tr>
            </thead>
            @foreach ($allcustomer as $customer)
            <tr>
              <td>{{$customer->last_name}}</td>
                <td>{{$customer->first_name}} </td>
                <td>{{ $customer->contact}}</td>
                <td>{{ $customer->email}}</td>
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
    <script src="{{asset('datatable/buttonhtml5.js')}}"></script>
    <script src="{{asset('datatable/buttonprint.js')}}"></script>
    <script src="{{asset('datatable/datatablebuttons.js')}}"></script>


</body>
</html>