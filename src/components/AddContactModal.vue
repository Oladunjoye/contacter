<template>
  <mdb-container class="add-btn-container">
    <mdb-btn color="success" @click.native="contact = true" data-toggle="tooltip" title="New contact!">Add contact   <mdb-icon icon="plus" class="ml-1 add-button"/></mdb-btn>
    <mdb-modal :show="contact" @close="contact = false">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">New Contact </mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <form > 
            <div class="grey-text">
            <mdb-input placeholder =" Enter fullname"  v-model="fullname" icon="user" type="text"/>
            <mdb-input placeholder =" Enter email"  v-model="email" name= "email" icon="envelope" type="email"/>         
            <mdb-input  placeholder =" Enter phone number" v-model="number" icon="phone" name="number" type="number"/>
            <mdb-input  placeholder =" Note" icon="pen"  v-model="note" name ="note" type="textarea" />
        
            </div>
            <div class="text-center">
            <mdb-btn @click= "addContact()" type ="button" color="primary">Submit</mdb-btn>
            </div>
        </form>
       

      </mdb-modal-body>
      
    </mdb-modal>
  </mdb-container>
</template>
<script>
import uuid from "uuid/v4";
  import { mdbContainer, mdbTextarea, mdbIcon, mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbInput, mdbModalFooter } from 'mdbvue';
  export default {
    name: 'AddContactModal',
    components: {
      mdbContainer,
      mdbBtn,
      mdbModal,
      mdbModalHeader,
      mdbModalBody,
      mdbInput,
      mdbModalFooter,
      mdbTextarea,
      mdbIcon,
      mdbModalTitle
    },
    data() {
      return {

        contact: false,
        fullname: '',
			email: '',
			number: '',
			note: ''
      }
    },
      methods: {
		addContact(){
           
			
			const newContact ={
				id: uuid.v4(),
				fullname: this.fullname,
				email: this.email,
				number: this.number,
				note: this.note,
				priority: false

			}
			// send up to parent
            this.$emit('add-contact', newContact)
            
            this.contact = false
		
		
	}

    }
  }
</script>

<style>
.md-form{
  display: flex !important;
  /* flex-wrap: wrap; */
  justify-content: space-evenly;
   margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
}
.form-control{
  width: 80% !important;
 
}
.add-btn-container{
  text-align: end;
}
</style>
