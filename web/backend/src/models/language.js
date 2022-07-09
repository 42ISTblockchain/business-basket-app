'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('../config/database');

const Language = sequelize.define('Language', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	createdAt: {
		allowNull: false,
		type: Sequelize.DATE,
	},
	updatedAt: {
		allowNull: false,
		type: Sequelize.DATE,
	},
	deletedAt: {
		allowNull: true,
		type: Sequelize.DATE,
	},
}, {
	defaultScope: {
		attributes: {exclude: ['password', 'updatedAt','deletedAt']}
	},
});

module.exports = Language

