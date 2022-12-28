const express = require("express")

const app = express()

app.use('/',express.static(__dirname + '/web')) 

require('./routes/web')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000');
});