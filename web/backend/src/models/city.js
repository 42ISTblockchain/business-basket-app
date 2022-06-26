'use strict';

const Sequelize = require('sequelize');
const {sequelize} = require('../config/database');

const City = sequelize.define('City', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    countryCode: {
        type: Sequelize.STRING(3),
        allowNull: false,
    },
});

module.exports = {
    City
};
