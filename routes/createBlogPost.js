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
<form>
    <input type="text" name="title" placeholder="Tile of Post" />
    <input type="text" name="content" placeholder="Content of Post" />
    <input type="text" name="author" placeholder="Author" />
    <button type="submit">Submit Post</button>
</form>`;

router.get("/", (req, res) => res.send(form));

module.exports = router;
