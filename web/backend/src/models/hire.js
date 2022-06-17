'use strict';

const Sequelize = require('sequelize');
const {sequelize} = require('../config/database');
const {passwordHash} = require('../scripts/utils/helper')

const Hire = sequelize.define('Hire', {
        companyName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        taxNumber: {
            type: Sequelize.NUMERIC,
            allowNull: false
        },
        taxOffice: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        emailVerified: {
            type: Sequelize.DATE,
            allowNull: true
        },
        rememberToken: {
            type: Sequelize.STRING,
            allowNull: true
        },
        resetPasswordToken: {
            type: Sequelize.STRING,
            allowNull: true
        },
    }, {
        hooks: {
            beforeCreate: async (hire) => {
                if(hire.password) hire.password = passwordHash(hire.password)
            }
        }
    }
);

Hire.removeAttribute('id')

module.exports = {
    Hire
};
