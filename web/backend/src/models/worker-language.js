'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('../config/database');

const WorkerLanguage = sequelize.define('WorkerLanguage', {
	workerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Workers",
          key: "id",
        },
      },
      languageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Languages",
          key: "id",
        },
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
});

module.exports = WorkerLanguage
