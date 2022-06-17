class AuthBaseService {
    constructor(model) {
       this.BaseModel = model
    }

    async login(loginData) {
        return this.BaseModel?.findOne({where: loginData})
    }

    async register(registerData) {
        return this.BaseModel?.build(registerData, { attributes: registerData.fields }).save()
    }

    // TODO: Implement user forgot password
    async forgotPassword(userData) {

    }

    // TODO: Implement user reset password
    async resetPassword(userData) {
        return this.BaseModel?.update({password: userData.password}, {where: {id: userData.id}})
    }
}

module.exports = AuthBaseService
