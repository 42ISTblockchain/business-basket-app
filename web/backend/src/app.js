const express = require('express')
const {UserRoutes} = require('./routes')
const config = require('./config')
const app = express()

config()

app.use(express.json())

app.listen(process.env.APP_PORT, () => {
    console.log("Sunucu ayağa kalktı...")
    app.use('/', UserRoutes)
})
