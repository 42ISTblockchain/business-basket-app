'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('../config/database');

const WorkerDocument = sequelize.define('WorkerDocument', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	path: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	workerId: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: "Workers",
			key: "id",
		},
	},
	deletedAt: {
		allowNull: true,
		type: Sequelize.DATE,
	}
});

module.exports = {
	WorkerDocument
};
