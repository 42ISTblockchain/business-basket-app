"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Jobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
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
    await queryInterface.dropTable("Jobs");
  },
};
