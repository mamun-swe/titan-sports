import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueSimpleAlert from "vue-simple-alert";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import axios from 'axios'
import moment from 'moment'


Vue.prototype.$axios = axios
Vue.prototype.$admin_api = "https://esports-api.herokuapp.com/api/admin/"
Vue.prototype.$user_api = "https://esports-api.herokuapp.com/api/user/"
Vue.use(VueSimpleAlert, { reverseButtons: true });
Vue.component('date-picker', DatePicker)
Vue.config.productionTip = false
Vue.filter("year", function (value) {
  if (value) {
    return moment(String(value)).format("MMM Do YY")
  }
});



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
