<template>
  <div class="container my-5 py-5">


  <!--Section: Block Content-->
  <section>

    <div class="card" style="background-color: #181C30;">
      <div class="card-body">

        <canvas id="lineChart" class="mb-4" height="100"></canvas>

        <!--Grid row-->
        <div class="row text-center text-white">

          <!--Grid column-->
          <div class="col-md-4 mb-4 mb-md-0">

            <p class="text-success mb-1"><i class="fas fa-caret-up mr-2"></i>17%</p>
            <p class="font-weight-bold mb-1">$35 210</p>
            <p class="text-uppercase mb-md-0">Sales</p>

          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-4 mb-4 mb-md-0">

            <p class="text-danger mb-1"><i class="fas fa-caret-down mr-2"></i>17%</p>
            <p class="font-weight-bold mb-1">4 578</p>
            <p class="text-uppercase mb-md-0">Subscriptions</p>

          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-4 mb-0">

            <p class="text-grey mb-1"><i class="fas fa-caret-left mr-2"></i>0%</p>
            <p class="font-weight-bold mb-1">678 934</p>
            <p class="text-uppercase mb-0">Traffic</p>

          </div>
          <!--Grid column-->

        </div>
        <!--Grid row-->

      </div>
    </div>


  </section>
  <!--Section: Block Content-->


</div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
 
  }
}
</script>
