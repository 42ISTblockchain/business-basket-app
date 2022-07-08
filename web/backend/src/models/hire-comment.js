'use strict';

const Sequelize = require('sequelize');
const {sequelize} = require('../config/database');

const HireComment = sequelize.define('HireComment', {
	workerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Workers",
          key: "id",
        },
      },
      hireId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Hires",
          key: "id",
        },
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stars: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      jobId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Jobs",
          key: "id",
        },
      },
	  deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    }
);

module.exports = HireComment
