//Here is an example of a dynamic route −
// var express = require('express');
// var app = express();

// app.get('/:id', function(req, res){
//    res.send('The id you specified is ' + req.params.id);
// });
// app.listen(3000);


var express = require('express');
var app = express();

app.get('/about', function(req, res){
   var queryParams = req.query
   res.send(queryParams);
});
app.listen(3000, () => {
   console.log('server running-------')
});




