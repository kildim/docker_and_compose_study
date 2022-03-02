const express = require('express');
const {port, db, authApiUrl, apiUrl} = require('./configuration/index')
const mongoose = require('mongoose');
const axios = require('axios');
const {response} = require('express');
const app = express();

const postSchema = new mongoose.Schema({
  name: String
});
const Post = mongoose.model('Post', postSchema);

const logPosts = async () => {
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
      console.log('POSTS: ', posts)

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
app.get('api/testapi', (req, res) => {
  axios.get(apiUrl + '/testapi').then(response => {
    res.json({
      responseData: response.data.testapi,
    })
  })
})
app.get('/testwithcurrentuser', (req, res) => {
  axios.get(authApiUrl + '/currentuser').then(response => {
    res.json({
      currentUser: response.data,
    })
  })
});

mongoose.connect(db).then(startServer).catch((e) => console.log(e))
