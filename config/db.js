// always check code of thse all from documentation and there not need remember.
const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
async function db() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/blog');
  await mongoose.connect(process.env.MONGO_URI);

}

// therefore we  successfully export this db function to main: that is: index.js
module.exports=db;