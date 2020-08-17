const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req , res){
  res.sendFile(__dirname +"/index.html");
});

app.post("/",function(req , res){

   res.sendFile(__dirname +"/success.html");
});

app.listen(process.env.PORT || 3000 , function(){
  console.log("Starting port 3000");
});
