"use strict";

const Sequelize = require("sequelize");
const { sequelize } = require("../config/database");
const CustomError = require('../scripts/error/CustomError');
const { PASSWORD_ERROR } = require("../scripts/error/errorMessages");
const { passwordHash } = require('../scripts/utils/helper');


const Worker = sequelize.define("Workers", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "worker"
  },
  emailVerified: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  rememberToken: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  resetPasswordToken: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isBlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  birthDay: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  gender: {
    type: Sequelize.ENUM("male", "female"),
    allowNull: false,
  },
  height: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  weight: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  nationality: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  workPermitType: {
    type: Sequelize.ENUM("studens", "sgk", "foreign"),
    allowNull: true,
  },
  sgkNo: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
},
{
  hooks: {
    beforeCreate: async (worker) => {
      if (worker.password.length < 6) {
        throw new CustomError(PASSWORD_ERROR)
      }
      if (worker.password) worker.password = passwordHash(worker.password)
    }
  }
});

module.exports = {
  Worker
};
