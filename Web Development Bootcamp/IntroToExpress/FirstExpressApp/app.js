var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("HI!!");
     
});
app.get("/bye",function(req,res){
   res.send("Bye!!") 
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started!!");
});