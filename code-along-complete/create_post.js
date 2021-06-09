// Goal: Provide a function to create a new post in Firebase

// allows us to use firebase
let firebase = require(`./firebase`)

// /.netlify/functions/create_post?userName=Brian&imageUrl=https://images.unsplash.com/...
exports.handler = async function(event) {

  // get the two querystring parameters and store in memory
  let userName = event.queryStringParameters.userName
  let imageUrl = event.queryStringParameters.imageUrl

  // establish a connection to firebase in memory
  let db = firebase.firestore()

  // create a new post, wait for it to return
  await db.collection('posts').add({
    userName: userName,
    imageUrl: imageUrl,
    created: firebase.firestore.FieldValue.serverTimestamp()
  })

  return {
    statusCode: 200
  }
}

