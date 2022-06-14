const Joi = require('joi')

const createValidation = Joi.object({
    firstName: Joi.string().required().min(2),
    lastName: Joi.string().required().min(2),
    email: Joi.string().email()
})

module.exports = {
    createValidation
}
