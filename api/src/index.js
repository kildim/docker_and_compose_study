const express = require('express');
const {port, db} = require('./configuration/index')
const mongoose = require('mongoose');

const app = express();

const postSchema = new mongoose.Schema({
  name: String
});
const Post = mongoose.model('Post', postSchema);

const logPosts = async ()=> {
  const posts = await Post.find();
  return posts;
}

const startServer = () => {
  app.listen(port, async () => {
    console.log('Started API service');
    console.log(`Our DB: ${db}`)

    const silence = new Post({name: 'Silence'});
    try {
      const newSilence = await silence.save();
      console.log('NEW SILENCE: ', newSilence)
      const posts = await Post.find();
      console.log('POSTS: ',posts)

    } catch (error) {
      console.log(error)
    }


  })
}

console.log('PORT:', port)
console.log('DB URL:', db)

app.get('/test', (req, res) => {
  res.send('Our api server is working correctly!')
});

mongoose.connect(db).then(startServer).catch((e) => console.log(e))
