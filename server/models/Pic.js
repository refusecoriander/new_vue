const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    pic: { type: String },
})

module.exports = mongoose.model('Pic', schema)