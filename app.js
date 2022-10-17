
require("dotenv/config");
const { config } = require('dotenv');
const cors = require("cors");
const express = require('express');
const bodyParser=require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(5000);


const middleware = function(req,res,next){
    console.log("Yeni bir istek geldi.");
    next();
};




app.post('/hello',middleware, function(req,res){
    console.log("Post iseği için istek gönderildi");
    res.json("Merhaba, POST isteği attınız");
});

app.use(middleware);

app.get('/hello', function (req,res){
    res.json("Merhaba, GET isteği attınız");
});

app.put('/hello',function (req,res){
    res.json("Merhaba, PUT isteği attınız");
});

app.delete('/hello',function(req,res){
    res.json("Merhaba, DELETE isteği attınız");
});






