var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/cookie_test', function(req, res){
    res.cookie('person', 'pragati',{maxAge:10000})
    res.cookie('pass', 'newpas')
    res.cookie('state', 'maharastra')
    res.send('Cookies set')
});
app.get('/cookie_check', function(req, res){
    var dataInObj = (req.cookies)
    var dataInString = (JSON.stringify(dataInObj))
    console.log(dataInString)
    res.send(JSON.stringify(req.cookies));
    // res.send(typeof(dataInObj))
});

app.get('/cookie_clear', function(req, res){
    res.clearCookie('name')
    res.send(JSON.stringify(req.cookies));
});
app.listen(5000, ()=>{
    console.log('running--')
});
