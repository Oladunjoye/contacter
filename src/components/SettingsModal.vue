<template>
  <mdb-container>
    <mdb-modal :show="settings" @close="settings = false">
    <mdb-modal-header class="text-center " id ="setting-header">
      <mdb-modal-title tag="h4" bold class="w-100">Welcome</mdb-modal-title>
      <p>Set your App configuration</p>
    </mdb-modal-header>
    <mdb-modal-body class="mx-3 grey-text">
      
      <mdb-input  placeholder =" Enter your name"  v-model="username" icon="user" required validFeedback="Look's good."  class="mb-5"/>
      <mdb-input  placeholder =" Set the App name"  v-model="appname"  icon="arrows-alt" validFeedback="Look's good."  required class="mb-5"/>
    </mdb-modal-body>
    <mdb-modal-footer center>
      <mdb-btn  @click = "setAppConfig" color="btn btn-primary btn-block">Submit</mdb-btn>  <!-- @click.native="settings = false" -->
    </mdb-modal-footer>
  </mdb-modal>
  </mdb-container>
</template>

<script>
  import { mdbContainer, mdbBtn, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbInput, mdbIcon, mdbModalTitle } from 'mdbvue';
  export default {
    name: 'SettingsModal',
    components: {
      mdbContainer,
      mdbBtn,
      mdbModal,
      mdbModalHeader,
      mdbModalBody,
      mdbModalFooter,
      mdbInput,
      mdbIcon,
      mdbModalTitle
    },
    data() {
      return {
        settings: true,
         username: '',
	    appname: '',
      }
    },

     methods: {
		setAppConfig(){
           
			
			const appConfig ={
				username:this.username,
				appname: this.appname

            }

       
            
      // send up to parent
      if(appConfig.username !== "" && appConfig.appname){
        this.$emit('add-user', appConfig)
            
           
            this.settings = false
		
      }
            
		
	}

  }
  }
</script>

<style>
#setting-header{
display: flex !important;
flex-direction: column;
justify-content: center !important;
align-items: center;

}
.close{
  display: none;
}
</style>
