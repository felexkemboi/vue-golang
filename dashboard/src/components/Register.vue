<template>
  <mdb-card sm="4">
    <mdb-card-body>
        <p class="h4 text-center py-8 mb-5">Sign up</p>
        <div class="grey-text">
          <mdb-input     label="Your name"          v-model="user.username"                  group type="text"     validate error="wrong"  success="right"                          />
          <mdb-input     label="Your Income"        v-model="user.income"                    group type="number"   validate error="wrong"  success="right"                         />
          <mdb-textarea  label="Your Bio"           v-model="user.bio"                       group type="textarea" validate error="wrong"  success="right"    size="sm" :rows="2" /> <!--icon="pencil"-->
          <p>Add Profile Picture</p>
          <input type="file" @change="getFileInputValue">
        </div>
        <div class="text-center py-4 mt-3">
          <mdb-btn color="cyan" type="submit" @click="submit">Register</mdb-btn>
        </div>
        <div v-if="show">
          <mdb-alert color="success">
            {{ user }}
          </mdb-alert>
        </div>
    </mdb-card-body>

  </mdb-card>
</template>

<script>
  import { mdbInput, mdbBtn, mdbCard, mdbCardBody,mdbTextarea, mdbAlert } from 'mdbvue';

  export default {
    name: 'Register',
    components: {mdbInput,mdbBtn,mdbCard,mdbCardBody,mdbTextarea, mdbAlert},
    data(){
      return {
        user : {
          username:"",
          income:"",
          bio:"",
          filePath :"",
          selectedFile : null,
        },
        show:false
      }
    },
    methods:{
      async submit(){
        console.log(this.user.username)
        console.log(this.user.income)
        console.log(this.user.bio)
        console.log(this.user.filePath)
        this.show = true
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(5000);
        //setTimeout(function(){ this.show = false; }, 10000);
        this.user.username = ''
        this.user.income = ''
        this.user.bio = ''
        this.$router.push('/dashboard')
      },
      getFileInputValue (event) {
        this.user.selectedFile = event.target.files[0];
        console.log(event);
      }
    }
}
</script>

<style scoped>
.card.card-cascade .view.gradient-card-header {
  padding: 1rem 1rem;
  text-align: center;
}
.card.card-cascade h3,
.card.card-cascade h4 {
  margin-bottom: 0;
}
</style>
