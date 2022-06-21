"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("WorkerLanguages", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
      },
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("WorkerLanguages");
  },
};
