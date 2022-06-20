const config = require('./config/config')
const express = require('express')
const routes = require('./routes')
const helmet = require('helmet')
const app = express()
const errorHandler = require("./middleware/errorHandler")

app.use(express.json())
app.use(helmet())
app.use('/api', routes)
app.use(errorHandler)

app.listen(process.env.APP_PORT, () => {
    console.log("Sunucu ayağa kalktı...")
})
