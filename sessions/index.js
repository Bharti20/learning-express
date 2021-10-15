 var express = require('express')
var cookieParser = require("cookie-parser")
var session = require('express-session')

var app = express();

app.use(cookieParser());
app.use(session({secret:"3Z@mb8LY*RGd[Znh"}));

app.get('/', (req,res) => {
   if(req.session.a){
      res.session.a++;
      res.send("You visited this page " + req.session.a + " times");
   } else {
      req.session.a = 1;
      res.send("Welcome to this page for the first time ")
   };
});
app.listen(9000, () =>{
   console.log('Server running---')
})
