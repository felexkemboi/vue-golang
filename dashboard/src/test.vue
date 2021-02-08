<template>
  <mdb-card sm="4">
    <mdb-card-body>
        <p class="h4 text-center py-8 mb-5">Sign up</p>
        <div class="grey-text">
          <mdb-input     label="Your name"          v-model="user.username"    icon="user"                 group type="text"     validate error="wrong"  success="right"                          />
          <mdb-input     label="Your Income"        v-model="user.income"      icon="dollar-sign"          group type="number"   validate error="wrong"  success="right"                         />
          <mdb-input     label=""                                              icon="image"                group type="file"     validate error="wrong"  success="right"                       />
          <mdb-textarea  label="Your Bio"           v-model="user.bio"         icon="pencil"               group type="textarea" validate error="wrong"  success="right"    size="sm" :rows="2" />
          <!-- <mdb-file-input @getValue="getFileInputValue" circle btnColor="mdb-color" btn-title="ADD PHOTO" rounded img="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" /> -->
          <mdb-file-input @getValue="getFileInputValue"  sm btnColor="primary" />

        </div>
                  <mdb-file-input @getValue="getFileInputValue" sm rounded gradient="purple" />

        <div class="text-center py-4 mt-3">
          <mdb-btn color="cyan" type="submit" @click="submit">Register</mdb-btn>
        </div>

    </mdb-card-body>
  </mdb-card>
</template>

<script>
  import { mdbInput, mdbBtn, mdbCard, mdbCardBody,mdbTextarea,mdbFileInput } from 'mdbvue';

  export default {
    name: 'Register',
    components: {
      mdbInput,
      mdbBtn,
      mdbCard,
      mdbCardBody,
      mdbTextarea,

      mdbFileInput

    },
    data(){
      return {
        user : {
          username:"",
          income:"",
          bio:"",
          filePath :""
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
      },
      getFileInputValue (val) {
        this.user.filePath = val
        console.log(val);
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
