<template>
 
<div class="">
<div class="data" style="height: 100vh;">
     
<div class="container ">
    <div class="row">
      <div class="col-lg-4 col-md-12 py-5 my-5">
        <div class="card mt-3">

          <div class="">
            <i class="far fa-money-bill-alt fa-lg primary-color z-depth-2 p-4 ml-3 mt-n3 rounded text-black"></i>
            <div class="float-right text-right p-3">
              <p class="text-uppercase text-muted mb-1"><small>sales</small></p>
              <h4 class="font-weight-bold mb-0">23 000$</h4>
            </div>
          </div>

          <div class="card-body pt-0">
            <div class="progress md-progress">
              <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <p class="card-text">Better than last week (75%)</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 my-5 py-5">
        <div class="card mt-3">
          <div class="">
            <i class="fas fa-chart-line fa-lg teal z-depth-2 p-4 ml-3 mt-n3 rounded text-black"></i>
            <div class="float-right text-right p-3">
              <p class="text-uppercase text-muted mb-1"><small>subscriptions</small></p>
              <h4 class="font-weight-bold mb-0">3534</h4>
            </div>
          </div>
          <div class="card-body pt-0">
            <div class="progress md-progress">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 46%" aria-valuenow="46" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <p class="card-text">Worse than last week (46%)</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 my-5 py-5">
        <div class="card mt-3">
          <div class="">
            <i class="fas fa-chart-pie fa-lg purple z-depth-2 p-4 ml-3 mt-n3 rounded text-black"></i>
            <div class="float-right text-right p-3">
              <p class="text-uppercase text-muted mb-1"><small>traffic</small></p>
              <h4 class="font-weight-bold mb-0">656 234</h4>
            </div>
          </div>
          <div class="card-body pt-0">
            <div class="progress md-progress">
              <div class="progress-bar bg-success" role="progressbar" style="width: 31%" aria-valuenow="31" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <p class="card-text">Better than last week (31%)</p>
          </div>
        </div>
      </div>    
    </div>


    <!-- Client Behaviour -->
 <section>
      <div class=" client-card card">
        <div class="card-body mr-md-1">
          <div class="row mb-3">
            <div class="col-md-8 mb-4">
              <canvas id="barChart" height="100"></canvas>
            </div>
            <div class="col-md-4 mb-1 mb-md-0">
              <h5 class="text-center font-weight-bold mb-4">E-commerce data</h5>
              <div class="d-flex justify-content-between">
                <small class="text-muted">Add products to cart</small>
                <small><span><strong>160</strong></span>/<span></span>200</small>
              </div>
              <div class="progress md-progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: 55%" aria-valuenow="55"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="d-flex justify-content-between">
                <small class="text-muted">Complete Purchase</small>
                <small><span><strong>310</strong></span>/<span></span>400</small>
              </div>
              <div class="progress md-progress">
                <div class="progress-bar bg-info" role="progressbar" style="width: 80%" aria-valuenow="80"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="d-flex justify-content-between">
                <small class="text-muted">Visit Premium Page</small>
                <small><span><strong>480</strong></span>/<span></span>800</small>
              </div>
              <div class="progress md-progress">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 45%" aria-valuenow="45"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="d-flex justify-content-between">
                <small class="text-muted">Send Inquiries</small>
                <small><span><strong>250</strong></span>/<span></span>500</small>
              </div>
              <div class="progress md-progress">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4 mb-4 mb-md-0">
              <p class="text-success mb-1"><i class="fas fa-caret-up mr-2"></i>17%</p>
              <p class="font-weight-bold mb-1">$35 210</p>
              <p class="text-uppercase mb-md-0">Sales</p>
            </div>
            <div class="col-md-4 mb-4 mb-md-0">
              <p class="text-danger mb-1"><i class="fas fa-caret-down mr-2"></i>17%</p>
              <p class="font-weight-bold mb-1">4 578</p>
              <p class="text-uppercase mb-md-0">Subscriptions</p>
            </div>
            <div class="col-md-4 mb-0">
              <p class="text-dark mb-1"><i class="fas fa-caret-left mr-2"></i>0%</p>
              <p class="font-weight-bold mb-1">678 934</p>
              <p class="text-uppercase mb-0">Traffic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>

<!-- Customer Churn -->
<section class=" customer-churn py-4">
    
    <h3 class="font-weight-bold text-center dark-grey-text pb-2">
        Customer Churn</h3>
    <hr class="w-header my-4">
    <p class="lead text-center text-muted pt-2 mb-3">Please upload CSV or contact your Admin to intergrate your database for better and faster visualization
        
    </p>
    <div class="text-center text-muted mb-5">
        <input type="file" name="form" id="form">
        <a class="primary-color"></a>
    </div>
    

    <div class="row white-text">
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="sales card classic-admin-card primary-color">
          <div class="card-body py-3">
            <i class="far fa-money-bill-alt"></i>
            <p class="small">SALES</p>
            <h4>2000$</h4>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar grey darken-3" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="card-body pt-2 pb-3">
            <p class="small mb-0">Better than last week (25%)</p>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 mb-4">
        <div class="subscription card classic-admin-card warning-color">
          <div class="card-body py-3">
            <i class="fas fa-chart-line"></i>
            <p class="small">SUBSCRIPTIONS</p>
            <h4>200</h4>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar bg grey darken-3" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="card-body pt-2 pb-3">
            <p class="small mb-0">Worse than last week (25%)</p>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 mb-4">
        <div class="traffic card classic-admin-card light-blue lighten-1">
          <div class="card-body py-3">
            <i class="fas fa-chart-pie"></i>
            <p class="small">TRAFFIC</p>
            <h4>20000</h4>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar grey darken-3" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="card-body pt-2 pb-3">
            <p class="small mb-0">Better than last week (75%)</p>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 mb-4">
        <div class="organic card classic-admin-card red accent-2">
          <div class="card-body py-3">
            <i class="fas fa-chart-bar"></i>
            <p class="small">ORGANIC TRAFFIC</p>
            <h4>2000</h4>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar grey darken-3" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="card-body pt-2 pb-3">
            <p class="small mb-0">Better than last week (25%)</p>
          </div>
        </div>
      </div>
    </div>
  </section>


   <section>

    <div class="card" style="background-color: #181C30;">
      <div class="card-body">
            <div class="text-center text-muted mb-5">
                <a class="primary-color">AWS</a>
                     
            </div>
                <div class="row">

        <!--Grid column-->
        <div class="col-md-6 mb-4">

          <h5 class="text-center font-weight-bold mb-4">Today</h5>

          <div class="d-flex justify-content-between">
            <small class="text-muted">Add products to cart</small>
            <small><span><strong>160</strong></span>/<span></span>200</small>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <div class="d-flex justify-content-between">
            <small class="text-muted">Complete Purchase</small>
            <small><span><strong>310</strong></span>/<span></span>400</small>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>

          <div class="d-flex justify-content-between">
            <small class="text-muted">Visit Premium Page</small>
            <small><span><strong>480</strong></span>/<span></span>800</small>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <div class="d-flex justify-content-between">
            <small class="text-muted">Send Inquiries</small>
            <small><span><strong>250</strong></span>/<span></span>500</small>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-6 mb-4">

          <h5 class="text-center text-white font-weight-bold mb-4">Yesterday</h5>

          <div class="d-flex justify-content-between">
            <small class="text-muted">Add products to cart</small>
            <small><span><strong>160</strong></span>/<span></span>200</small>
          </div>

          <div class="progress md-progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 55%" aria-valuenow="55"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <div class="d-flex justify-content-between">
            <small class="text-muted">Complete Purchase</small>
            <small><span><strong>310</strong></span>/<span></span>400</small>
          </div>

          <div class="progress md-progress">
            <div class="progress-bar bg-info" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>

          <div class="d-flex justify-content-between">
            <small class="text-muted">Visit Premium Page</small>
            <small><span><strong>480</strong></span>/<span></span>800</small>
          </div>

          <div class="progress md-progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 45%" aria-valuenow="45"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <div class="d-flex justify-content-between">
            <small class="text-muted">Send Inquiries</small>
            <small><span><strong>250</strong></span>/<span></span>500</small>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>

        <canvas id="lineChart" class="mb-4" height="100"></canvas>
        <div class="row text-center text-white">
          <div class="col-md-4 mb-4 mb-md-0">
            <p class="text-success mb-1"><i class="fas fa-caret-up mr-2"></i>17%</p>
            <p class="font-weight-bold mb-1">$35 210</p>
            <p class="text-uppercase mb-md-0">Males</p>
          </div>

          <div class="col-md-4 mb-4 mb-md-0">
            <p class="text-danger mb-1"><i class="fas fa-caret-down mr-2"></i>17%</p>
            <p class="font-weight-bold mb-1">4 578</p>
            <p class="text-uppercase mb-md-0">Females</p>
          </div>

          <div class="col-md-4 mb-0">
            <p class="text-grey mb-1"><i class="fas fa-caret-left mr-2"></i>0%</p>
            <p class="font-weight-bold mb-1">678 934</p>
            <p class="text-uppercase mb-0">Credit Card Owners</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
</template>
<script>
export default {
    name: 'Profile',
    props:{
        
        
    }, data() {
        return {
            male: 8137,
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],




        }
    },
    mounted() {
        
    this.ctxB = document.getElementById("barChart").getContext('2d');
    this.myBarChart =  {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    };
    },
    methods: {
        
    },
}
</script>