'use strict';

const Sequelize = require('sequelize');
const {sequelize} = require('../config/database');

const JobCategory = sequelize.define('JobCategory', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.BOOLEAN,
            default: true,
        }
    }
);

module.exports = {
    JobCategory
};
