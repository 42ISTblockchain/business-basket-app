'use strict';

const Sequelize = require('sequelize');
const {sequelize} = require('../config/database');

const Job = sequelize.define('Job', {
        description: {
            type: Sequelize.STRING(500),
            allowNull: true
        },
        gender: {
            type: Sequelize.ENUM("male", "female", "both"),
            allowNull: false
        },
        startDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        endDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        hireId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Hires',
                key: 'id',
            },
            allowNull: false
        },
        jobCategoryId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }
);



module.exports = {
    Job
};
