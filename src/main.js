import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueSimpleAlert from "vue-simple-alert";
import DatePicker from "v-calendar/lib/components/date-picker.umd";


Vue.use(VueSimpleAlert, { reverseButtons: true });
Vue.component('date-picker', DatePicker)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
