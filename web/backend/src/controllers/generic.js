const HttpStatus = require('http-status')
const {City} = require("../models/city");
const {JobCategory} = require("../models/job-category");

class Generic {
    async city(req, res) {
        const city = await City.findAll({where: {countryId: 1}})
        res.status(HttpStatus.OK).send(city)
    }

    async category(req, res) {
        const category = await JobCategory.findAll()
        res.status(HttpStatus.OK).send(category)
    }
}

module.exports = new Generic()
