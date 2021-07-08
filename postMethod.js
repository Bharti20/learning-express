
const express = require("express");
const app = express();
app.use(express.json());

// app.get('/', (req,res) =>{
//   res.send()
// })

app.post('/', (req, res) =>{
    var a={
        name:req.body.name,
        city:req.body.city
    }
    console.log(a)
    res.send(a)
})

app.put('/:id', (req,res) => {
  s=req.params.id
  var a={
    name:req.body.name,
    city:req.body.city
  }
  
  res.send(a)
})

app.listen(3000, function(){
  console.log("server is running on port 3000");
})