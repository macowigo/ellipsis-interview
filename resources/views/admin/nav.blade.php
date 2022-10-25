<div class="navbar-fixed">
    <nav class="navbar">
        <div class="nav-wrapper">
            <a class="brand-logo white-text text-darken-4">{{Auth::user()->email}}</a>
            <ul id="nav-mobile" class="right">
                <li>
                    <a href="#!" data-target="chat-dropdown" class="dropdown-trigger waves-effect">
                        <img class="user-image" src="{{asset('uploads/user.png')}}" alt="">
                    </a>
                </li>
            </ul><a href="#!" data-target="sidenav-left" class="sidenav-trigger left"><i class="material-icons white-text">menu</i></a>
        </div>
    </nav>
</div>
<ul id="sidenav-left" class="sidenav sidenav-fixed">
    <li>
        <img src="{{asset('images/logo.png')}}" class="logo-container ">
    </li>
    <li class="no-padding">
        <ul class="collapsible collapsible-accordion">
            <li><a href="{{route('admindashboard')}}" class="waves-effect ">Dasboard<i class="material-icons">web</i></a></li>
            <li class="bold waves-effect"><a class="collapsible-header">Users Management<i class="material-icons">group</i></a>
                <div class="collapsible-body">
                    <ul>
                        <li><a href="{{route('addcustomerview')}}" class="waves-effect">Add user<i class="material-icons">person_add</i></a></li>
                        <li><a href="{{route('customersall')}}" class="waves-effect">view user<i class="material-icons">visibility</i></a></li>
                        <li><a href="{{route('manageusers')}}" class="waves-effect">manage users<i class="material-icons">construction</i></a></li>
                    </ul>
                </div>
            </li>
            <li class="bold waves-effect"><a class="collapsible-header">Books Management<i class="material-icons">library_books</i></a>
                <div class="collapsible-body">
                    <ul>
                        <li><a href="{{route('adminbookadd')}}" class="waves-effect">Add book<i class="material-icons">bookmark_add</i></a></li>
                        <li><a href="{{route('adminbookview')}}" class="waves-effect">manage books<i class="material-icons">construction</i></a></li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="{{ route('changepass')}}" class="waves-effect">ChangePassword<i class="material-icons">lock</i></a>
            </li>

            <li>
                <a href="{{ route('logout')}}" class="waves-effect red-text">logout<i class="material-icons red-text">logout</i></a>
            </li>

        </ul>
    </li>
</ul>
<div id="chat-dropdown" class="dropdown-content dropdown-tabbed">
    <div class="col s12">
        <ul class="collection flush">
            <li>
                <a href="{{ route('changepass')}}" class="waves-effect blue-text">Change Password
                    <i class="material-icons blue-text">lock</i>
                </a>
            </li>
            <li>
                <a href="{{ route('logout')}}" class="waves-effect red-text">logout
                    <i class="material-icons red-text">logout</i>
                </a>
            </li>
        </ul>
    </div>
</div>