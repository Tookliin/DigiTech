<template>

  <div class="view deep-purple darken-3">
    <!-- Mask & flexbox options-->
    <div class="dashboard" style="height: 100vh;">
      <!-- Content -->
      <div class="container">
        <!--Grid row-->
        <div class="row align-items-center my-5">
          <!--Grid column-->
          <div class="col-md-6 wow fadeInLeft" data-wow-delay="0.2s">
            <h1 class="white-text mb-4">Data Solution, For Better Client Solutions</h1>
            <p class="mb-4 pb-2 white-text">Understand your client's to create better services tailored to them. we provide best analytics for 10 years, reputable and trusted by our clients.</p>
          <button type="button" class="btn btn-outline-white btn-md ml-md-0">Get started</button>
          <button type="button" class="btn btn-white btn-md">Get started</button>

          <router-link to="/register">
  <button type="button" class="btn btn-primary btn-rounded">Get started</button></router-link>
          </div>
          <!--Grid column-->
       
          <!--Grid column-->
          <div class="col-md-6 wow fadeInRight" data-wow-delay="0.2s">
            <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/cards2.png" alt="" class="img-fluid">
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Content -->
    </div>
    <!-- Mask & flexbox options-->
  </div>
  <!-- Full Page Intro -->


</template>

<script>
export default {
  name: 'Dashboard',
  props: {
 
  }
}
</script>
