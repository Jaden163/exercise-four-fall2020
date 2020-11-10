// Show single blog post

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("Show single blog post"));

module.exports = router;
