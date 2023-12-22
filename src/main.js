import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//globally stringLimit(0 to 120 text) create
Vue.filter('stringLimit', val=>{
  if(!val || typeof(val) != 'string')
   return ''
  //else no need declare
  val = val.slice(0,120)
  return val+'...'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
