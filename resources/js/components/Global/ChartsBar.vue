<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar me-1"></i>
          Order Count
        </div>
        <div class="card-body">
          <canvas
            ref="myBarChartOrder"
            width="100%"
            height="50"
          ></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated at {{ new Date().toLocaleString() }}
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar me-1"></i>
          Order Price
        </div>
        <div class="card-body">
          <canvas
            ref="myPieChartOrder"
            width="100%"
            height="50"
          ></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated at {{ new Date().toLocaleString() }}
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar me-1"></i>
          Type User
        </div>
        <div class="card-body">
          <canvas
            ref="myPieChartUser"
            width="100%"
            height="50"
          ></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated at {{ new Date().toLocaleString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["orders", "users"],
  methods: {
    paidBarUser: async function () {
      // Set new default font family and font color to mimic Bootstrap's default styling
      Chart.defaults.global.defaultFontFamily =
        '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
      Chart.defaults.global.defaultFontColor = "#292b2c";

      // Pie Chart Example
      let ctx = this.$refs["myPieChartUser"];
      await this.$store.dispatch("CountUser").then((res) => {
        let myPieChart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Costumer", "Admin"],
            datasets: [
              {
                data: [res[0].Count, res[1].Count],
                backgroundColor: ["#007bff", "#dc3545"],
              },
            ],
          },
        });
      });
    },
    
    barChartOrder: async function () {
      // Set new default font family and font color to mimic Bootstrap's default styling
      Chart.defaults.global.defaultFontFamily =
        '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
      Chart.defaults.global.defaultFontColor = "#292b2c";
      //new
      // Bar Chart Example
      let ctx = this.$refs["myBarChartOrder"];
      await this.$store.dispatch("CountOrder").then((res) => {
      let myLineChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [res[0].State,res[1].State,res[2].State],
          datasets: [
            {
              label: "Orders mony",
              backgroundColor: "rgba(2,117,216,1)",
              borderColor: "rgba(2,117,216,1)",
              data: [res[0].Count, res[1].Count, res[2].Count],
            },
          ],
        },
        options: {
          scales: {
            xAxes: [{
                time: { unit: "month" },
                gridLines: { display: false },
                ticks: { maxTicksLimit: 6 },},
            ],
            yAxes: [
              {
                ticks: { min: 0,  },
                gridLines: { display: true },
              },
            ],
          },
          legend: { display: false },
        },
      });
       let ctx2 = this.$refs["myPieChartOrder"];
       let myPieChart = new Chart(ctx2, {
          type: "pie",
          data: {
            labels: [res[0].State,res[1].State,res[2].State],
            datasets: [
              {
                data: [res[0].price, res[1].price, res[2].price],
                backgroundColor: ["#007bff", "#dc3545"],
              },
            ],
          },
        });
        
      });
     
    },
  },
  mounted() {
    this.barChartOrder();
    this.paidBarUser();
  },
};
</script>

<style>
</style>