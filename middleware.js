const express = require('express')
const app = express()

app.use(loggerMiddleware)

app.get('/',(req, res) => {
    console.log('home page')
    res.send('Home page')
});

app.get('/users', authorizedUserAccess, (req, res)=> {
    console.log(req.query.admin)
    res.send('user page')
});

function loggerMiddleware(req, res, next) {
    console.log(req.originalUrl)
    next()
};

function authorizedUserAccess(req, res, next) {
    console.log('AtherizedUserAccess Middleware')
    if(req.query.admin=='true') {
        next()
    }else{
        res.send('Error, you must be an admin')
    }
   
};


app.listen(4000, () => {
    console.log('server started---------')
});
