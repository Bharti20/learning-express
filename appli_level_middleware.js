const express = require('express')
const app = express()

app.use(function(req, res, next) {
    console.log(`Rechived request at ${Date.now()}`)
    next()
});

app.get('/', (req, res) =>{
    console.log('Home page')
    res.send('Home page')
    console.log('first middleware')
});

app.get('/', (req,res) => {
    console.log('user page')
    res.send('User page')
});

app.listen(8000, () =>{
    console.log('server running----')
})