import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// firebaseをimport
import firebase from "firebase/app"

// firestoreを読み込む
require("firebase/firestore")

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCOCp382XYEduod9WHPdPzo2oOUh6HaH2k",
  authDomain: "yt-firebase-vue-chat.firebaseapp.com",
  databaseURL: "https://yt-firebase-vue-chat.firebaseio.com",
  projectId: "yt-firebase-vue-chat",
  storageBucket: "",
  messagingSenderId: "939687508146",
  appId: "1:939687508146:web:64f95695b9475d37"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 変数にfirestoreを格納
const db = firebase.firestore()

window.db = db;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
