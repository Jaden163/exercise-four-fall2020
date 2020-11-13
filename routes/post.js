// Show single blog post

const express = require("express");
const router = express.Router();

// Require firebase
const firebase = require("firebase");
// Initialize firestore db
const db = firebase.firestore();
// Reference db collection
const blogPosts = db.collection("blogPost");

router.get("/"),
  (req, res) => {
    return res.send("No id provided");
  };

router.get("/:id", (req, res) => {
  const queryId = req.params.id;
  blogPosts
    .doc(queryId)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        return res.send(doc.data());
      } else {
        return res.send("No such document exists");
      }
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
