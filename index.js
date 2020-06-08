require('dotenv').config();
const express = require('express')
const app = express()
const port = 3333

// const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
const uri  =process.env.MONGOOSE_URL;
mongoose.connect(uri, {useNewUrlParser: true});




var diaDiem = require('./routers/diaDiem.router')
app.use('/diadiem', diaDiem)




app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`))