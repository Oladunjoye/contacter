<template>
  <div id="app">
   
      <header  v-if="home">
            <nav>
                <ul>
                <li >
                  <a href ="#" @click= "home= true">Home</a></li>
                <li >
                  <a href="#" @click= "home= false">Contacts</a>
                  </li>
               <button type ="button" class="signup">Sign up</button>

                </ul>
            </nav>
           
            </header>
      
      <transition name="component-fade" mode="out-in">
    <Welcome v-on:switch = "home = false" v-if="home"/>
    </transition>
     <Contacts v-if="!home"/>
  </div>
</template>

<script>
import Contacts from './components/Contacts.vue'
import Welcome from './components/Welcome.vue'

import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';


export default {
  name: 'app',
  components: {
   Contacts,
   Welcome,
   mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbContainer,
      mdbDropdown,
      mdbDropdownToggle,
      mdbDropdownMenu,
      mdbDropdownItem

  },
  data(){
    return{
      home: true,
      appUser: {}
    }
  }
  
}
</script>

<style >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* overflow: hidden !important; */
}

body{
font-family: 'Lato', sans-serif;
line-height: 1.4;
height: 100%!important;


}
header {
  height: 8vh;
  margin-bottom: 5px;
  background-color:#4285f4; 
}
nav{
  height: 100%;
  
}
nav ul{
  height: 100%;
}

nav ul li a{
  color: white;
}
nav ul  button{
  color: #4285f4;
  padding: 5px 20px;
  background-color: white;
  border-radius :20px ;
  border: none;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .7s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
