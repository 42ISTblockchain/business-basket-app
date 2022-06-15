const httpStatus = require('http-status')
const Service = require('../services/user')
const userService = new Service()
const {passwordHash, generateAccessToken, generateRefreshToken} = require('../scripts/utils/helper')

class User {
    async index(req, res) {
        const user = await userService.list()
        res.status(httpStatus.OK).send(user)
    }

    async create(req, res) {
        req.body.password = passwordHash(req.body.password)
        const user = await userService.create(req.body)
        res.status(httpStatus.OK).send(user)
    }

    async update(req, res) {
        const user = await userService.update(req.params.id, req.body)
        res.status(httpStatus.OK).send(user)
    }

    async delete(req, res) {
        const user = await userService.delete(req.params.id)
        res.status(httpStatus.OK).send("Başarılı bir şekilde silindi.")
    }

    async login(req, res) {
        req.body.password = passwordHash(req.body.password)
        await userService.loginUser(req.body)
            .then((user) => {
                if (!user) return res.status(httpStatus.NOT_FOUND).send({message: "Böyle bir kullanıcı bulunamadı!"})
                console.log()
                user = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    tokens: {
                        access_token: generateAccessToken(user),
                        refresh_token: generateRefreshToken(user)
                    }
                }
                console.log(user)
                delete user.password
                res.status(httpStatus.OK).send(user)
            })
            .catch(error => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.toString()))
    }
}

module.exports = new User()
