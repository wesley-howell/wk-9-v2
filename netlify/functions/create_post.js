// Goal: Provide a function to create a new post in Firebase

// allows us to use firebase
let firebase = require(`./firebase`)

// /.netlify/functions/create_post?userName=Brian&imageUrl=https://images.unsplash.com/...
exports.handler = async function(event) {

  // get the two querystring parameters and store in memory

  // establish a connection to firebase in memory

  // create a new post

  return {
    statusCode: 200
  }
}

