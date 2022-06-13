let BaseModel = null

class BaseService {
    constructor(model) {
        BaseModel = model
    }

    list(where) {
        return BaseModel?.find(where || {}) ?? null
    }

    create(data) {
        return new BaseModel(data).save()
    }

    update(id, data) {
        return BaseModel.find(id).update(data)
    }

    delete(id) {
        return BaseModel.find(id).delete()
    }
}
