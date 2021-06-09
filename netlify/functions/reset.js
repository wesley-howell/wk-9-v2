// Goal: Adds data to a Firestore database with posts – deletes existing!

// allows us to use firebase
let firebase = require(`./firebase`)

// /.netlify/functions/create_posts
exports.handler = async function(event) {
  let db = firebase.firestore()
  
  // query for all existing posts, wait for the response, store in memory
  let postsQuery = await db.collection('posts').get()

  // get the docs from the query
  let posts = postsQuery.docs

  // loop through all the docs
  for (let i=0; i < posts.length; i++) {
    // delete the doc
    db.collection('posts').doc(posts[i].id).delete()
  }

  // query for all existing comments, wait for the response, store in memory
  let commentsQuery = await db.collection('comments').get()

  // get the docs from the query
  let comments = commentsQuery.docs

  // loop through all the docs
  for (let i=0; i < comments.length; i++) {
    // delete the doc
    db.collection('comments').doc(comments[i].id).delete()
  }

  // Create new posts
  let post1 = await db.collection('posts').add({ 
    userName: `Anonymous User`, 
    imageUrl: `https://images.unsplash.com/photo-1560215987-307b2039a677?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3N8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`, 
    numberOfLikes: 0, 
    created: firebase.firestore.FieldValue.serverTimestamp() 
  })
  let post2 = await db.collection('posts').add({ 
    userName: `Anonymous User`, 
    imageUrl: `https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFjb3N8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`, 
    numberOfLikes: 0, 
    created: firebase.firestore.FieldValue.serverTimestamp() 
  })
  let post3 = await db.collection('posts').add({ 
    userName: `Anonymous User`, 
    imageUrl: `https://images.unsplash.com/photo-1508154048109-de555266b70a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`, 
    numberOfLikes: 0, 
    created: firebase.firestore.FieldValue.serverTimestamp() })

  // Create new comments
  let comment1 = await db.collection('comments').add({ userName: `Anonymous User`, postId: post1.id, body: `#tacotuesday`, created: firebase.firestore.FieldValue.serverTimestamp() })
  let comment2 = await db.collection('comments').add({ userName: `Anonymous User`, postId: post1.id, body: `This looks yummy!`, created: firebase.firestore.FieldValue.serverTimestamp() })
  let comment3 = await db.collection('comments').add({ userName: `Anonymous User`, postId: post2.id, body: `Tacos al pastor`, created: firebase.firestore.FieldValue.serverTimestamp() })
  let comment4 = await db.collection('comments').add({ userName: `Anonymous User`, postId: post3.id, body: `Tacos, obviously 🙄`, created: firebase.firestore.FieldValue.serverTimestamp() })

  return {
    statusCode: 200,
    body: `Posts and comments created!`
  }
}

