const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// firebase default config
const firebaseConfig = {
  apiKey: "AIzaSyD8Upgkxg0VcRHxRYZWBi-2OyhMegkYe1w",
  authDomain: "exercise-four-fall2020-jc.firebaseapp.com",
  databaseURL: "https://exercise-four-fall2020-jc.firebaseio.com",
  projectId: "exercise-four-fall2020-jc",
  storageBucket: "exercise-four-fall2020-jc.appspot.com",
  messagingSenderId: "307143691408",
  appId: "1:307143691408:web:46203ee069d4c2edfadc15",
};

// Firebase
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogPost.js");

app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () => console.log(`Running app at localhost:${port}`));
