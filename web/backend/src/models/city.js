'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('../config/database');

const City = sequelize.define('City', {
	name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      countryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Countries",
          key: "id",
        },
      },
});

module.exports = {
	City
};
