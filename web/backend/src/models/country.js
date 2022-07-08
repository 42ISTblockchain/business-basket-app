"use strict";

const Sequelize = require("sequelize");
const { sequelize } = require("../config/database");

const Country = sequelize.define("Country", {
  code: {
    type: Sequelize.STRING(3),
    allowNull: false,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Country
