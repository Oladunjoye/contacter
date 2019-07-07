<template>
  <mdb-container  >
    <mdb-modal :show="contact" @close="justClose()">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Edit Contact </mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-2 grey-text">
        <form > 
            <div class="grey-text">
            <mdb-input  v-model="contactItem.fullname" icon="user" type="text"/>
            <mdb-input   v-model="contactItem.email" name= "email" icon="envelope" type="email"/>         
            <mdb-input   v-model="contactItem.number" icon="envelope" name="number" type="number"/>
            <mdb-input  icon="envelope"  v-model="contactItem.note" name ="note" type="textarea" />
        
            </div>
            <div class="text-center">
            <mdb-btn @click= "editContactAction()" type ="button" color="primary">Submit</mdb-btn>
            </div>
        </form>
       

      </mdb-modal-body>
      
    </mdb-modal>
  </mdb-container>
</template>
<script>
import uuid from "uuid";
  import { mdbContainer, mdbTextarea, mdbIcon, mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbInput, mdbModalFooter } from 'mdbvue';
  export default {
    name: 'EditContactModal',
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
    props: {
        contactItem: Object,
        modalState:Boolean
    },
    mounted(){
        this.contact =  !!this.contactItem

    },
    updated(){
        console.log(this.contactItem)
        // this.editContact =  Object.assign({}, contact)
    },
    data() {
      return {

        contact: false,
        
        
      }
    },
   
      methods: {
		editContactAction(contact){
            this.editContact =   Object.assign({}, contact)
            this.$emit('escape', 'closed')

            },
        
        justClose(){
            this.$emit('escape', 'closed')
            // this.contactItem = null
        }
		
            
		
		
	}

    }
  
</script>