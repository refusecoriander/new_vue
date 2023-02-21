const express = require("express")

const app = express()

app.set('secret','i2u234y12oi3u478')

app.use(require('cors')())
app.use(express.json())
app.use('/',express.static(__dirname + '/web'))
app.use('/uploads',express.static(__dirname + '/uploads')) 

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000');
});