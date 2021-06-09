// Goal: Provide a function to create a new comment in Firebase

// allows us to use firebase
let firebase = require(`./firebase`)

// /.netlify/functions/create_comment?postId=xxxxxxxxx&userName=Brian&body=Tacos!
exports.handler = async function(event) {

  // get the three querystring parameters and store in memory

  // establish a connection to firebase in memory
  let db = firebase.firestore()

  // create a new post, wait for it to return

  return {
    statusCode: 200
  }
}

