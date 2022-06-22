"use strict";

const Sequelize = require("sequelize");
const { sequelize } = require("../config/database");

const Job = sequelize.define("Job", {
	description: {
		type: Sequelize.STRING(500),
		allowNull: true,
	},
	gender: {
		type: Sequelize.ENUM("male", "female", "both"),
		allowNull: false,
	},
	startDate: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	endDate: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	price: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},
	tip: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false,
	},
	workerCount: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	hireId: {
		type: Sequelize.INTEGER,
		references: {
			model: "Hires",
			key: "id",
		},
		allowNull: false,
	},
	cityId: {
		type: Sequelize.INTEGER,
		references: {
			model: "Cities",
			key: "id",
		},
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	jobCategoryId: {
		type: Sequelize.INTEGER,
		references: {
			model: "JobCategories",
			key: "id",
		},
	},
	deletedAt: {
		allowNull: true,
		type: Sequelize.DATE,
	},
});

module.exports = {
	Job,
};
