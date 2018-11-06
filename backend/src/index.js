const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server)

mongoose.connect(
  `mongodb://${DBUSER}:${DBPASSWORD}@ds253713.mlab.com:53713/goweek-backend-alvaro`,
  {
    useNewUrlParser: true
  }
)

app.use((req, res, next) => {
  req.io = io;

  return next();
})

app.use(cors());
app.use(express.json());
app.use(require('./router'));

server.listen(3000, () => {
  console.log(':) Server started on port 3000');
});
