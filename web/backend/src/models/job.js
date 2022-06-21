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
  workerCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tip: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  hireId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cityId: {
    type: Sequelize.INTEGER,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  jobCategoryId: {
    type: Sequelize.INTEGER,
  },
  jobCategoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = {
  Job,
};
