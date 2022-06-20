const config = require('./config/config')
const express = require('express')
const routes = require('./routes')
const helmet = require('helmet')
const app = express()


app.use(express.json())
app.use(helmet())

app.listen(process.env.APP_PORT, () => {
    console.log("Sunucu ayağa kalktı...")
    app.use('/api', routes)
})
