const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const connectDB = require('./db');

require('dotenv').config();

const app = express();
connectDB();

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

module.exports = app;
