require('./config/config')
const express = require('express')
const routes = require('./routes')
const helmet = require('helmet')
const app = express()
const cors = require('cors')
const errorHandler = require("./middleware/errorHandler")

app.use(cors({
	origin: process.env.APP_URL
}))
app.use(helmet())
app.use(express.json())
app.use('/api', routes)
app.use(errorHandler)


app.listen(process.env.APP_PORT, () => {
    console.log("Sunucu ayağa kalktı...")
})
