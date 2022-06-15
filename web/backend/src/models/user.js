'use strict';

const Sequelize = require('sequelize');
const {sequelize} = require('../config/database');

const User = sequelize.define('User', {
        firstName: {
            type: Sequelize.STRING,
        },
        lastName: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        }
    }
);

module.exports = {
    User
};
