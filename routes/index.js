// Show all blog posts

const express = require("express");

// Require firebase
const firebase = require("firebase");
// Initialize firestore db
const db = firebase.firestore();
// Reference db collection
const blogPosts = db.collection("blogPost");

const router = express.Router();

router.get("/", (req, res) => {
  const blogPostsArray = [];

  blogPosts
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        blogPostsArray.push(doc.data());
      });
      return res.send(blogPostsArray);
    })
    .catch(function (e) {
      console.warn("error", e);
      return res.send(error);
    });
});

module.exports = router;
