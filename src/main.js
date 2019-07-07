import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
// import VAnimateCss from 'v-animate-css';
// import 'vue2-animate/dist/vue2-animate.min.css'
import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// If you would like custom styling of the toastr the css file can be replaced


Vue.use(VueToastr)
// Vue.use(VAnimateCss);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
