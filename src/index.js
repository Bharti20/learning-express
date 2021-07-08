const express = require('express')
const app = express()
const path = require('path')
const port = 3000

const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.send('Welcome To My Page..')
})

app.get('/about', (req, res) => {
    res.send('Welcome To My Page. This page is about me')
})

app.get('/contact', (req, res) => {
    res.send('Welcome To My Page. You can contact me at this number 9178456----')
})

var server = app.listen(port, function () {  
    console.log('server running----')
})

