"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cities", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
      },
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
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cities");
  },
};
