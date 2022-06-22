'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('../config/database');

const Country = sequelize.define('Country', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = {
	Country
};
