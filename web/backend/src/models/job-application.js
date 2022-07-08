'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('../config/database');

const JobApplication = sequelize.define('JobApplication', {
	jobId: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	workerId: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	hireId: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	status: {
		type: Sequelize.BOOLEAN,
	},
	deletedAt: {
		allowNull: true,
		type: Sequelize.DATE,
	}
}, {
	timestamps: true,
	paranoid: true
});

JobApplication.associate = function (models) {
	JobApplication.hasOne(models.Hire, {as: 'hire', foreignKey: "id", sourceKey: 'hireId'});
	JobApplication.hasOne(models.Job, {as: 'jobs', foreignKey: "id", sourceKey: "jobId"});
	JobApplication.hasOne(models.Worker, {as: 'worker', foreignKey: "id", sourceKey: 'workerId'})
};


module.exports = JobApplication
