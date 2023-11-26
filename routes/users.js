// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;


const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testingDB");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String
})
module.exports = mongoose.model("user", userSchema);