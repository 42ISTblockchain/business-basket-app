'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('../config/database');

const WorkerExperience = sequelize.define('WorkerExperience', {
	companyName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
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
      description: {
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
      },
});

module.exports = WorkerExperience
