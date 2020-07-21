<template>
  <div id="app">
    <main class="">
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <a class="navbar-brand" href="#"><strong>DigiTech</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="/register">Register</a>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link" href="/profile">Our Services</a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="/data">Our Clients</a>
                </li> -->

                 <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
           My Profile
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
             <router-link to="/login">
             <a class="dropdown-item">My account</a></router-link>

             <router-link to="/register">
             <a class="dropdown-item">Register</a></router-link>

             <router-link to="/logout">
             <a class="dropdown-item">Log out</a></router-link>
            
            
            
            <!-- <a class="dropdown-item" href="/data">Our Clients</a> -->
          </div>
        </li>
            </ul>
        </div>
    </nav>
    </main>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  components:{

  },
  data(){
    return{}
  }
}
</script>