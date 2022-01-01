import moment from 'moment'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('formatDate', (value) => {
  if (value) return new Date(value).getDate() + ' days, ' + new Date().getHours() + ' hours'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
