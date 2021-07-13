const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.get('/profile/:name/', (req, res) => {
    res.render('profile', {name: req.params.name})
    console.log(req.params)
})

app.listen(4500, ()=>{
    console.log('running--')
})