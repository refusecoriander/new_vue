module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')

    app.use('/web/api', router)
}