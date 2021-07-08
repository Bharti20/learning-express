const express = require('express') 
const app = express()
var router = express.Router()

router.get('/user', function(req, res, next){
    console.log('I am router level middleware')
    res.send('testing middleware')
    next()
},function(req, res, next) {
    console.log('I am also router level middleware')
    next()

});
app.get('/user', function(req,res) {
    res.send('hi')
});

app.listen(7000, () =>{
    console.log('server running-----')
});