const HttpStatus = require('http-status')
const Service = require('../services/workers/worker')
const userService = new Service()
const {passwordHash} = require('../scripts/utils/helper')

class Worker {
    async index(req, res) {
        const user = await userService.list()
        res.status(HttpStatus.OK).send(user)
    }

    async create(req, res) {
        req.body.password = passwordHash(req.body.password)
        const user = await userService.create(req.body)
        res.status(HttpStatus.OK).send(user)
    }

    async update(req, res) {
        const user = await userService.update(req.params.id, req.body)
        res.status(HttpStatus.OK).send(user)
    }

    async delete(req, res) {
        const user = await userService.delete(req.params.id)
        res.status(HttpStatus.OK).send("Başarılı bir şekilde silindi.")
    }
}

module.exports = new Worker()
