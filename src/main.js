import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', val => { return val.toLowerCase() });

new Vue({
  el: '#app',
  render: h => h(App)
})
