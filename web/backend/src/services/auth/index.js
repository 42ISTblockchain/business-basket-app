class AuthService {
  constructor(model) {
    this.BaseModel = model
  }

  async login(loginData) {
    return this.BaseModel?.findOne({
      attributes: { exclude: ["password"] },
      raw: true,
      where: loginData,
    })
  }

  async register(registerData) {
    return this.BaseModel?.build(registerData, registerData.fields).save()
  }

  // TODO: Implement user forgot password
  async forgotPassword(userData) {}

  // TODO: Implement user reset password
  async resetPassword(userData) {

    return this.BaseModel?.update(
      { password: userData.password },
      { where: { id: userData.id } }
    );
  }
}

module.exports = AuthService;
