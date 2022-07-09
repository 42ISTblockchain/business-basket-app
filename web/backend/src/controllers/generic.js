const HttpStatus = require('http-status')
const {City} = require("../models");
const {JobCategory} = require("../models");

class Generic {
    async city(req, res) {
        const city = await City.findAll({where: {countryCode: 'TRY'}})
        res.status(HttpStatus.OK).send(city)
    }

    async category(req, res) {
        const category = await JobCategory.findAll()
        res.status(HttpStatus.OK).send(category)
    }
}

module.exports = new Generic()
