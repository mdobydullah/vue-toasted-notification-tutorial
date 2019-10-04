import Vue from 'vue'
import App from './App.vue'

// boostrap
import 'bootstrap/dist/css/bootstrap.css'

// axios
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

// vue toasted
import Toasted from 'vue-toasted'
Vue.use(Toasted, {
  duration: 9000,
  position: 'top-right',
  action : {
    text : 'Okay',
    onClick : (e, toastObject) => {
        toastObject.goAway(0);
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')