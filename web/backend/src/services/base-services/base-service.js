class BaseService {
    constructor(model) {
        this.BaseModel = model
    }

    async list(where) {
        return await this.BaseModel?.findAll(where || {}) ?? null
    }

    async create(data) {
        return await this.BaseModel?.build(data, data.fields).save()
    }

    async update(id, data) {
        return await this.BaseModel.update(data, {where: {id: id}})
    }

    async delete(id) {
        return await this.BaseModel.destroy({where: {id: id}})
    }
}

module.exports = BaseService
