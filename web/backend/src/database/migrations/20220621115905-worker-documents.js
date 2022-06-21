"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("WorkerDocuments", { 
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
		path: {
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
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE
		},
		deletedAt: {
			allowNull: true,
			type: Sequelize.DATE,
		}
	});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("WorkerDocuments");
  },
};
