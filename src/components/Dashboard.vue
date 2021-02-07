<template>
  <section id="dashboard">
    <section class="mt-lg-5">
      <mdb-row>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="crop-alt" class="primary-color"/>
              <div class="data">
                <p>SALES</p>
                <h4><strong>200</strong></h4>
              </div>
            </div>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="copy" class="warning-color"/>
              <div class="data">
                <p>SUBSCRIPTIONS</p>
                <h4><strong>200</strong></h4>
              </div>
            </div>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
    <section>
      <mdb-row class="mt-5">
          <mdb-col md="6" class="mb-4">
              <mdb-card>
                  <mdb-card-body>
                      <div style="display: block">
                        <mdb-bar-chart :data="barChartData" :options="barChartOptions" :height="500"/>
                      </div>
                  </mdb-card-body>
              </mdb-card>
          </mdb-col>
          <mdb-col md="6" class="mb-4">
              <mdb-card>
                  <mdb-card-body>
                      <div style="display: block">
                        <mdb-line-chart  :data="lineChartData"  :options="lineChartOptions" :height="500"></mdb-line-chart> <!-- :width="600"-->
                      </div>
                  </mdb-card-body>
              </mdb-card>
          </mdb-col>
      </mdb-row>
    </section>
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbCardBody,mdbIcon,mdbBarChart,mdbLineChart} from 'mdbvue'
import store from "@/store";
export default {
  name: 'Dashboard',
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbIcon,
    mdbBarChart,
    mdbLineChart
  },
  data () {
    return {
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 1,
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },

      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }]
        }
      },
    }
  },
  computed:{
    lineDataFromState(){
      return store.state.lineData
    },
    barDataFromState(){
      return store.state.barData
    },
    barChartData(){
      let barChartDatum =  {
      labels: ['28th Jan', '28th Feb', '28th Mar', '28th Apr', '28th May', '28th Jun', '28th Jul'],
      datasets: [
        {
          label: 'New Users in the last 7 days',
          data:  this.barDataFromState,
          backgroundColor: '#00C851',
          borderWidth: 1
        }
      ]
    }
    return barChartDatum
    },
    lineChartData(){
      let lineChartDatum =  {
      labels: ['28th Jan', '28th Feb', '28th Mar', '28th Apr', '28th May', '28th Jun', '28th Jul'],
      datasets: [
        {
          label: 'New Users in the last 7 days',
          backgroundColor: '#ff4444',
          data:  this.lineDataFromState,
        }
      ]
    }
    return lineChartDatum
    }
  },
  watch:{
    barDataFromState(newval){
      return newval
    },
    lineDataFromState(newval){
      return newval
    }
  }
}
</script>

<style scoped>
.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
</style>
