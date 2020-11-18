// create blog post

const express = require("express");
const router = express.Router();

// Require firebase
const firebase = require("firebase");
// Initialize firestore db
const db = firebase.firestore();
// Reference db collection
const blogPosts = db.collection("blogPost");

const form = `
<form action="/create/submit">
    <input type="text" name="title" placeholder="Tile of Post" />
    <input type="text" name="content" placeholder="Content of Post" />
    <input type="text" name="author" placeholder="Author" />
    <button type="submit">Submit Post</button>
</form>`;

// Default route serves form
router.get("/", (req, res) => res.send(form));

//Route for submitting form
router.get("/submit", (req, res) => {
  const queryParams = req.query;

  //custom ID
  const idFromTitle = queryParams.title.replace(/\s+/g, "-").toLowerCase();

  blogPosts
    // create new posts or update
    .doc(idFromTitle)
    .set(queryParams)
    .then(function (doc) {
      res.send("Successful Submission");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});

module.exports = router;
