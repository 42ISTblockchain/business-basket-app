const { Sequelize } = require('sequelize');

const dialect = process.env.DB_CONNECTION
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const database = process.env.DB_DATABASE
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const db = new Sequelize(database, username, password, {
    dialect: 'postgres',
    host: host,
    port: port,
    dialectOptions: {
        encrypt: true
    }
})

module.exports = () => {
    db.authenticate().then(() => {
        console.log("Database connected...")
    }).catch(err => {
        console.log(err)
    })
}
