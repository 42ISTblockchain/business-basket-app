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
    },
    deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
    }
}, {
    defaultScope: {
        attributes: {exclude: ['password', 'updatedAt', 'deletedAt']}
    },
});

module.exports = JobCategory
