import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import { store } from './store/form'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')