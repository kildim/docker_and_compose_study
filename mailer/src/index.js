const express = require('express');
const {port} = require('./configuration/index')
const app = express();

const startServer = () => {
  app.listen(port, async () => {
    console.log('Started MAILER service');
  })
}

app.get('/test', (req, res) => {
  console.log('TEST');
  res.send('Our mailer server is working correctly!')
});

startServer();
