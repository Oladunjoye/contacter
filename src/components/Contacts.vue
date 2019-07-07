<template>
    <div>
		<header >
			 <nav class= "contact-nav">
                <div >
                    {{appUser.appname}}
                    </div>
             <div class="profile">

                  Welcome {{appUser.username}}
                  <img src="@/assets/img/boy.svg" />
             </div>
             
             </nav> 
		</header>
          <div class="container-fluid">
        <div class="table-wrapper">
            <div class="">
                <div class="row " id ="table-top">
                    <div class="col-md-8  manage-top">
						<h2 class ="manage">Manage <span class="">Contacts</span></h2>
					</div>
					<div class="col-md-4 ">
                        <AddContactModal v-on:add-contact="addContact"/>
					</div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
						<th>
                            <i class="fas fa-star main-star"></i>
							
						</th>
                        <th>Full Name</th>
                        <th>Email</th>
						<th>Phone</th>
                        <th>Note</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-bind:key= "contact.id" v-for ="contact in contacts">
                    <tr>
						<td>
							
                         <i @click = "togglePriority(contact)" class="fas fa-star star-icon" v-bind:class="{active: contact.priority}"></i>
						</td>
                        <td>{{contact.fullname}}</td>
                        <td>{{contact.email}}</td>
                         <td>{{contact.number}}</td>
						<td>{{contact.note}}</td>
                       
                        <td>
							<i class="fas fa-pen edit-icon" @click="editModal(contact)" data-toggle="tooltip" title="Edit contact"></i>
							<i class="fas fa-trash del-icon" @click="deleteContact(contact)" data-toggle="tooltip" title="Delete contact!"></i>


                        </td>
                    </tr>
                    
					
                 					
					
                </tbody>
            </table>
            
			<EditContactModal v-on:escape= "selectedContact = null" v-if="selectedContact" v-bind:contactItem="selectedContact" />
          
			<SettingsModal v-on:add-user="setUser"/>
			<div class="clearfix">
                <div class="hint-text">You have {{contacts.length}} contacts</div>
                <ul class="pagination">
                    <li class="page-item disabled"><a href="#">Previous</a></li>
                    <li class="page-item active"><a href="#" class="page-link">1</a></li>
                    <li class="page-item disabled"><a href="#" class="page-link">2</a></li>
                    <li class="page-item disabled"><a href="#" class="page-link">3</a></li>
                    <li class="page-item disabled"><a href="#" class="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>
	
    </div>
</template>

<script>
import AddContactModal from "./AddContactModal";
import EditContactModal from "./EditContactModal" 
import SettingsModal from "./SettingsModal"

export default {
    name: 'contacts',
    components: {
        AddContactModal,
		EditContactModal,
		SettingsModal
    },
    
    data(){
    return{
    contacts: [
      {
        id: 1,
        fullname: 'John Snow',
        email: 'johnsnow@freefolk.com',
        number: '08159614339',
        note: 'The leader of the free folk',
        priority: false,
        
      },
       {
        id: 2,
        fullname: 'Cersei Lannister',
        email: 'cersei@queen.com',
        number: '08033082332',
        note: 'Queen of the andals',
        priority: false
      },
       {
        id: 3,
        fullname: 'Bran Stark',
        email: 'bran@broken.com',
        number: '09801816717',
        note: 'The 3 eyed raven and new king',
        priority: true
      }
	],
	appUser : {appname: "Contacter", username:'Anonymous'},
	selectedContact : null
  }
  },

  methods: {
      deleteContact(contact){
		  const index = this.contacts.indexOf(contact)
		  this.contacts.splice(index, 1)
		  this.$toastr('error', 'Contact deleted', 'Delete')
      },

      addContact(newContact){
		  this.contacts = [...this.contacts, newContact]
		  this.$swal('New Contact added', newContact.fullname, 'success');
         
      },
	  
	  editModal(contact){
		   this.selectedContact = contact
	  },
	  togglePriority(contact){
		  this.contacts.map(basecontact => {
			  if(basecontact.id ===  contact.id){
				  contact.priority = !contact.priority
			  }
		  })
		 if(contact.priority) {
			 this.$toastr('info', 'Priority set', 'Priority')
		 }
		 
	  },
	  setUser(appConfig){
		  this.appUser = appConfig
	  }
     
  }
}
</script>

<style scoped>
  body {
        color: #566787;
		background: #f5f5f5;
		font-size: 13px;
		font-family: 'Lato', sans-serif;
	}
	.table-wrapper {
        background: #fff;
        padding: 20px 25px;
        margin: 30px 0;
		border-radius: 3px;
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }
	.table-title {        
		padding-bottom: 15px;
		background: #435d7d;
		color: #fff;
		padding: 16px 30px;
		margin: -20px -25px 10px;
		border-radius: 3px 3px 0 0;
    }
    .table-title h2 {
		margin: 5px 0 0;
		font-size: 24px;
	}
	.table-title .btn-group {
		float: right;
	}
	.table-title .btn {
		color: #fff;
		float: right;
		font-size: 13px;
		border: none;
		min-width: 50px;
		border-radius: 2px;
		border: none;
		outline: none !important;
		margin-left: 10px;
	}
	.table-title .btn i {
		float: left;
		font-size: 21px;
		margin-right: 5px;
	}
	.table-title .btn span {
		float: left;
		margin-top: 2px;
	}
    table.table tr th, table.table tr td {
        border-color: #e9e9e9;
		padding: 12px 15px;
		vertical-align: middle;
    }
	table.table tr th:first-child {
		width: 60px;
	}
	table.table tr th:last-child {
		width: 100px;
	}
    table.table-striped tbody tr:nth-of-type(odd) {
    	background-color: #fcfcfc;
	}
	table.table-striped.table-hover tbody tr:hover {
		background: #f5f5f5;
	}
    table.table th i {
        font-size: 13px;
        margin: 0 5px;
        cursor: pointer;
    }	
    table.table td:last-child i {
		opacity: 0.9;
		font-size: 18px;
        margin: 0 5px;
    }
	table.table td a {
		font-weight: bold;
		color: #566787;
		display: inline-block;
		text-decoration: none;
		outline: none !important;
	}
	table.table td a:hover {
		color: #2196F3;
	}
	table.table td a.edit {
        color: #FFC107;
    }
    table.table td a.delete {
        color: #F44336;
    }
    table.table td i {
        font-size: 19px;
    }
	table.table .avatar {
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 10px;
	}
    .pagination {
        float: right;
        margin: 0 0 5px;
    }
    .pagination li a {
        border: none;
        font-size: 13px;
        min-width: 30px;
        min-height: 30px;
        color: #999;
        margin: 0 2px;
        line-height: 30px;
        border-radius: 2px !important;
        text-align: center;
        padding: 0 6px;
    }
    .pagination li a:hover {
        color: #666;
    }	
    .pagination li.active a, .pagination li.active a.page-link {
        background: #03A9F4;
    }
    .pagination li.active a:hover {        
        background: #0397d6;
    }
	.pagination li.disabled i {
        color: #ccc;
    }
    .pagination li i {
        font-size: 16px;
        padding-top: 6px
    }
    .hint-text {
        float: left;
        margin-top: 10px;
        font-size: 13px;
    }    
	

	.edit-icon{
		 color:  #0397d6;
	}
	.del-icon{
		color: red;
	}
	.main-star{
		font-size: 18px !important;
	}
	.star-icon{
		color: #ccc;
		outline: #ccc;
	}
	.active{
		color: gold !important;
	}
    .contact-nav{
        display:flex;
        justify-content: space-between;
        padding: 10px 40px;
    }

    .contact-nav div{
        color: white;
    }
    .profile{
        display: flex;

    }
    .profile img{
        height: 30px;
        margin-left: 20px;
    }
     .add-button{
        left:70px;
    }

    @media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; margin-bottom: 10px;}
	
	td { 
		/* Behave  like a "row" */
		/* border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%;  */
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
        display: none;
		top: 6px;
		left: 6px;
		width: 55%; 
		padding-right: 30px; 
		white-space: nowrap;
	}
	
	/*
	Label the data
	*/
	td:nth-of-type(1):before { content: "S/N"; }
    td:nth-of-type(1):before { content: "Full Name"; }
	td:nth-of-type(2):before { content: "email"; }
	td:nth-of-type(3):before { content: "Phone number"; }
	td:nth-of-type(4):before { content: " Actions"; }
	
}

@media (max-width: 420px){
    #table-top{
        display: flex!important;
        /* flex-direction: column !important; */
        /* flex-wrap: wrap; */
        /* justify-content: center; */
        /* align-items: center !important; */
        /* align-content: center; */
        margin-bottom: 10px;
        padding-bottom: 0 auto auto  10px;
        left: 60%;
        padding-left:55px;

    }

    #table-top .manage-top{
        padding-left:20px;
    }
    
    .add-button{
        font-size: 10px;
    }
.manage{
    font-size: 18px;
}
}
</style>
