const express = require("express");
const db = require("./config/db");
const Post = require("./models/Post");
const { title } = require("process");
const app = express();
const port = process.env.PORT || 3000;

// to parse tha data we must have this middileware
app.use(express.json());


db()
  .then(() => console.log("successfully connected to db"))
  .catch((err) => {
    console.log("error");
  });

// to check Health of the api
app.get("/api/", (req, res) => {
  // res.send('api is working')
  res.status(200).json({ message: "api is working" });
});


// fetch all the posts by using :moongoose knowledge to get products: you have kiran;
app.get("/api/posts", (req, res) => {
  Post.find({})
    .then((data) => {
      // here we dont want to eturn the data insted we want as response so go by next line to know how
      console.log(data);
      res.status(200).json({ data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
});


// get a specfic post
app.get("/api/posts/:id", (req, res) => {
  let postid = req.params.id;
  Post.find({_id: postid }).then((data) => {
      // here we dont want to eturn the data insted we want as response so go by next line to know how
    //   console.log(data);
      res.status(200).json({ data });
    }).catch((err) => {
    //   console.log(err);
      res.status(500).json({ message: err });
    });
});


// create a new post
app.post("/api/posts/", (req, res) => {
  let newPost = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  // above we gave req.title because req is user who  will we enter name naa
  // down line will create a new record
  newPost.save().then((data) => {
      res.status(200).json({ mesage: "post created successfully", data: data });
    }).catch((err) => {
      res.status(500).json({ message: err });
    });
});

// updating a specific post
app.put("/api/posts/:id", (req, res) => {

    let postid=req.params.id;

    let newInfo={
        title:req.body.title,
        description:req.body.description 
    }

    Post.findByIdAndUpdate(postid, newInfo).then((data)=>{
        res.status(200).json({ mesage: "post update successfully"});
    }).catch((err)=>{
        res.status(500).json({ message: err });
    })
});



app.delete("/api/posts/:id", (req, res) => {
    let postid=req.params.id;
    Post.findByIdAndDelete(postid).then(()=>{
        res.status(200).json({ mesage: "post deleted successfully"});
    }).catch((err)=>{
        res.status(500).json({ message: err });
    })
});



app.listen(port, (err) => {
  if (!err) {
    console.log(`server is running up  at ${port}`);
  }
});
