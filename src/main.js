import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
//import firebase from 'firebase/app'

Vue.config.productionTip = false

//  // Your web app's Firebase configuration
//  const firebaseConfig = {
//   apiKey: "AIzaSyD4mNIzdoCZfSsBWVfxcEyWWAcuBtUgXUQ",
//   authDomain: "vuejs-project-d4d6c.firebaseapp.com",
//   databaseURL: "https://vuejs-project-d4d6c.firebaseio.com",
//   projectId: "vuejs-project-d4d6c",
//   storageBucket: "vuejs-project-d4d6c.appspot.com",
//   messagingSenderId: "851390616616",
//   appId: "1:851390616616:web:e11a409b7db08c8b76d11d"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
