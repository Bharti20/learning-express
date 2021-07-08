const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Welcome to my page')
    console.log('welcome to my page')
})

app.get('/about', (req,res) => {
    req.send('About the orgnaization')
    console.log('About the orgnaization')
})

app.listen(2000,)

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(400).send(err.stack)
  })