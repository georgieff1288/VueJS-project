import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import { firestorePlugin } from 'vuefire'
import Vuelidate from 'vuelidate'
import moment from 'moment'
import VueChatScroll from 'vue-chat-scroll'

Vue.config.productionTip = false



Vue.use(VueRouter);
Vue.use(Vuelidate)
Vue.use(firestorePlugin)
Vue.use(moment);
Vue.use(VueChatScroll);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
