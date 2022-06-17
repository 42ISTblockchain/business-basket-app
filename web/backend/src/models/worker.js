'use strict';

const Sequelize = require('sequelize');
const {sequelize} = require('../config/database');

const Worker = sequelize.define('Workers', {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
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
        gender: {
            type: Sequelize.ENUM("male", "female"),
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
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isBlocked: {
            type: Sequelize.BOOLEAN,
            default: false,
            allowNull: true
        },

    }, {
        classMethods: {
            associate: function (models) {
                Worker.hasMany(models.Post, {foreignKey: 'userId'});
            }
        }
    }
);

module.exports = {
    Worker
};
