
var express = require('express');
var app = express();

app.get('/about', function(req, res){
   var queryParams = req.query
   console.log(queryParams.name)
   res.send(queryParams);
});
app.listen(3000, () => {
   console.log('server running-------')
});




