<template>
  <div>
    <h3>Please Login with your google account to continue</h3>
    <button @click="login">signin with google</button>
  </div>
</template>

<script>
import firebase from "firebase/app"
require("firebase/auth")

export default {
  methods: {
    login() {
      // providerに接続
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(result => {
        // This gives you a Google Access Token.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // Vue router: Topに戻る
        this.$router.push("/")
      });
    }
  }
}
</script>