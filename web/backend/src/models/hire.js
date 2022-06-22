'use strict';

const httpStatus = require("http-status");
const Sequelize = require('sequelize');
const { sequelize } = require('../config/database');
const CustomError = require('../scripts/error/CustomError');
const { PASSWORD_ERROR } = require("../scripts/error/errorMessages");
const { passwordHash } = require('../scripts/utils/helper');

const Hire = sequelize.define('Hire', {
	companyName: {
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

},
	{
		hooks: {
			beforeCreate: async (hire) => {
				if (hire.password.length < 6) {
					throw new CustomError(PASSWORD_ERROR.name, PASSWORD_ERROR.message, httpStatus.BAD_REQUEST)
				}
				if (hire.password) hire.password = passwordHash(hire.password)
			}
		}
	}
);

Hire.associate = function (models) {
	Hire.hasMany(models.Job, { foreignKey: 'hireId' })
};

module.exports = {
	Hire
};
