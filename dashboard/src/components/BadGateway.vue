<template>
  <section id="bad-gateway">
    <div class="full">
      <mdb-row class="bad-gateway-row">
        <mdb-col md="8">
          <h2 class="h2-responsive mt-3 mb-2">The  URL is not Ready.</h2>
          <p>Work in Progress</p>
          <p><router-link to="/dashboard">Go Back</router-link></p>
        </mdb-col>
        <mdb-col md="4">
          <img alt="Error 404" class="img-fluid" src="https://mdbootstrap.com/img/Others/grafika404-bf.png"/>
        </mdb-col>
      </mdb-row>
    </div>
  </section>
</template>

<script>
import { mdbRow,mdbCol } from 'mdbvue'

export default {
  name: 'BadGateway',
  components: {
    mdbRow,
    mdbCol
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full {
  height: 70vh;
}
.bad-gateway-row {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 55%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
