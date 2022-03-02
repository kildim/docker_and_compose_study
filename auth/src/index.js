const express = require('express');
const {port, db} = require('./configuration/index')
const mongoose = require('mongoose');

const app = express();

const startServer = () => {
  app.listen(port, async () => {
    console.log('Started AUTH service');
    console.log(`Our DB: ${db}`)
  })
}

app.get('/test', (req, res) => {
  res.send('Our AUTH server is working correctly')
});

app.get('/api/currentUser', (req, res) => {
  res.json({
    id:'1234',
    email: 'foo@gmail.com',
  })
})

mongoose.connect(db).then(startServer).catch((e) => console.log(e))
