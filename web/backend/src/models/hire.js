'use strict';

const Sequelize = require('sequelize');
const {sequelize} = require('../config/database');
const {passwordHash} = require('../scripts/utils/helper')
const phoneValidation = /\d{3}-\d{3}-\d{4}/;

const Hire = sequelize.define('Hire', {
        companyName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
			validate: {
				isEmail: true
			}
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
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
            allowNull: false,
			validate : {
				validator : function (value) {
					return 	phoneValidation.test(value)
				}
			}
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
    },
	{
        hooks: {
            beforeCreate: async (hire) => {
				if (hire.password.length <= 6 && hire.password.length >= 20) throw new Error("Password err")
                if(hire.password) hire.password = passwordHash(hire.password)
            }
        }
    }
);

Hire.removeAttribute('id')

module.exports = {
    Hire
};
