<template>
   <div class="row">
          <div class="col-lg-4 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>{{countOrder}}</h3>

                <p>Orders</p>
              </div>
              <div class="icon">
                <i class="fa fa-bag"></i>
              </div>
              <router-link to="/orders" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>{{countProduct}}</h3>
                <p>Product</p>
              </div>
              <div class="icon">
                <i class="fa fa-stats-bars"></i>
              </div>
              <router-link to="/product" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>{{countUser}}</h3>

                <p>User Registrations</p>
              </div>
              <div class="icon">
                <i class="fa fa-person-add"></i>
              </div>
              <router-link to="/users" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
            </div>
          </div>
          <!-- ./col -->
        </div>
</template>

<script>
export default {
  props:["countProduct","countOrder","countUser",],
 
}
</script>

<style>
.small-box {
    border-radius: 0.25rem;
    box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
    display: block;
    margin-bottom: 20px;
    position: relative;
}
.bg-info, .bg-info>a {
    color: #fff!important;
}
.small-box>.inner {
    padding: 10px;
}
.small-box .icon {
    color: rgba(0,0,0,.15);
    z-index: 0;
}
.small-box>.small-box-footer {
    background-color: rgba(0,0,0,.1);
    color: rgba(255,255,255,.8);
    display: block;
    padding: 3px 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    z-index: 10;
}
.bg-success {
    background-color: #28a745!important;
}
</style>