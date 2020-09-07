import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')