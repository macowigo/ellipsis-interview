
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="description" content="">
    <title>ElipsisIntreview-AdminDashboard</title>
    <link rel="shortcut icon" href="{{ asset('images/logo.png')}}">
    <link href="{{ asset('css/smartstore.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{asset('datatable/style.css')}}"/>  
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script> 
    
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
    <div class="masonry row">
        <div class="col s12">

         <h4 class="maroon-text" >Dashboard</h4>
         @if ($message = Session::get('success'))
              <h6 class="blue-text centered-text">{{ $message }}</h6>    
             @endif
         <a href="{{route('adminbookview')}}">
         <div class="col s12 m12 l6">
         <div class="card">
                <div class="card-stacked">
                    <div class=" card-metrics-static">
                        <div class="card-content">
                        <span><i class="material-icons">library_books</i> Books:</span> 
                        <span >{{ number_format($bookscount)}}</span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         </a>
         <a href="{{route('customersall')}}">
         <div class="col s12 m12 l6">
         <div class="card">
                <div class="card-stacked">
                    <div class=" card-metrics-static">
                        <div class="card-content">
                        <i class="material-icons">group</i>
                         <span> Users: </span>
                         <span>{{number_format($allusercount)}}</span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         </a>

        <div class="col s12">
            <div class="card">
                <div class="card-stacked">
                    <div class=" card-metrics-static">
                        <div class="card-content">
                            <div class="card-metric-title  centered-text maroon-text">Percentage of System Users</div>
                            <script>

                              var systemuser=<?php echo $users;?>;
                              console.log(systemuser);
                                google.charts.load('current', { 'packages': ['corechart'] });
                                google.charts.setOnLoadCallback(drawStockChart);
                        function drawStockChart() {
                            var stock = google.visualization.arrayToDataTable(systemuser);
                            var options = {
                                is3D:true,  
                                pieHole: 0.4,
                                colors:['#40A8DD','#B22222','#4CAF50']
                            };
                            var stockchart = new google.visualization.PieChart(document.getElementById('piechart'));
                            stockchart.draw(stock, options);
                        }
                        </script>
                      <div id="piechart" ></div> 
                              
                        </div>
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
    <!-- Initialization script -->
</body>
</html>