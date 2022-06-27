'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('JobApplications', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            jobId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Job",
                    key: "id",
                },
            },
            workerId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Worker",
                    key: "id",
                },
            },
            hireId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Hire",
                    key: "id",
                },
            },
            status: {
                type: Sequelize.ENUM('pending', 'accepted', 'rejected'),
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
        await queryInterface.dropTable('JobApplications');
    }
};
