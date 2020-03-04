const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const uri = process.env.MONGODB_URI || 'mongodb://localhost/proyecto-node-mauricio2-dev';
const ip = process.env.IP || 'localhost';
const port = process.env.PORT || 3000;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.error('An error occured', error));
db.once('open', () => console.log('Connected to the database'));

app.use(express.json());
app.use(morgan('dev'));

setImmediate(() => {
  app.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d/', ip, port);
  });
});
