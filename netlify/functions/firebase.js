const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBc63N7CVW6dxHsNFfgt8NNo0b59WYNVrs",
  authDomain: "kiei451w7class.firebaseapp.com",
  projectId: "kiei451w7class",
  storageBucket: "kiei451w7class.appspot.com",
  messagingSenderId: "1092826794203",
  appId: "1:1092826794203:web:6fc355408b6569560ba4fe"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase