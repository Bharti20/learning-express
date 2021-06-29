const express = require('express')
const app = express()

app.get('/:name/:id',(req, res) => {
    var parameters = req.params //dynamic routes
    console.log(parameters.name)
    res.send(parameters)

});
app.listen(6000, () =>{
    console.log('surver  running-----')
})