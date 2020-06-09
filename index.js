require('dotenv').config();
const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

const port = 3333
var mongoose = require('mongoose');
const uri  =process.env.MONGOOSE_URL;
mongoose.connect(uri, {useNewUrlParser: true});




var diaDiem = require('./routers/diaDiem.router')
app.use('/api/diadiem', diaDiem)




app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`))