const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require("cors")
const router = require('./src/router')

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())

dotenv.config()

//connect db

app.use(bodyParser.json())
//API service
app.use('/api', router)
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
module.exports = app;