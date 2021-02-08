<template>
  <mdb-card sm="4">
    <mdb-card-body>
        <p class="h4 text-center py-8 mb-5">Sign up</p>
        <div class="grey-text">
          <mdb-input     label="Your name"          v-model="user.username"                  group type="text"     validate error="wrong"  success="right"                          /> <!--icon="user"-->
          <mdb-input     label="Your Income"        v-model="user.income"                    group type="number"   validate error="wrong"  success="right"                         /> <!--icon="dollar-sign"-->
          <mdb-textarea  label="Your Bio"           v-model="user.bio"                       group type="textarea" validate error="wrong"  success="right"    size="sm" :rows="2" /> <!--icon="pencil"-->
          <p>Add Profile Picture</p>
          <input type="file" @change="getFileInputValue">
        </div>
        <div class="text-center py-4 mt-3">
          <mdb-btn color="cyan" type="submit" @click="submit">Register</mdb-btn>
        </div>

    </mdb-card-body>
  </mdb-card>
</template>

<script>
  import { mdbInput, mdbBtn, mdbCard, mdbCardBody,mdbTextarea } from 'mdbvue'; //,mdbFileInput
  // import mdbFileUpload from 'mdb-file-upload';


  export default {
    name: 'Register',
    components: {
      mdbInput,
      mdbBtn,
      mdbCard,
      mdbCardBody,
      mdbTextarea

    },
    data(){
      return {
        user : {
          username:"",
          income:"",
          bio:"",
          filePath :"",
          selectedFile : null
        }
      }
    },
    methods:{
      submit(){
        console.log(this.user.username)
        console.log(this.user.income)
        console.log(this.user.bio)
        console.log(this.user.filePath)
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
