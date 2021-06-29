const express = require('express')
const app = express()

function loggerMiddleware(req, res, next) {
    console.log(`Rechived request at ${Date.now()}`)
    next()
};

app.get('/', (req, res) =>{
    console.log('Home page')
    res.send('Home page')
    console.log('first middleware')
});

app.get('/user', (req,res, next) => {
    console.log('user page')
    res.send('User page')
    console.log('firs middleware')
    next()
});

// function loggerMiddleware(req, res, next) {
//     console.log(`Rechived request at ${Date.now()}`)
//     next()
// };

app.listen(8000, () =>{
    console.log('server running----')
})