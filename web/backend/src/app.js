require('./config/config')
const express = require('express')
const APIRoutes = require('./routes')
const helmet = require('helmet')
const errorHandler = require("./middleware/error/errorHandler")
const app = express()
const cors = require('cors')

app.use(cors({
	origin: process.env.APP_URL
}))

app.use(helmet())
app.use(express.json())
app.use('/api', APIRoutes)
app.use(errorHandler)


app.listen(process.env.APP_PORT, () => {
    console.log("Sunucu ayağa kalktı...")
})
