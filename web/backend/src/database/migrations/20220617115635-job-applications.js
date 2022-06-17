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
                allowNull: false
            },
            workerId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            status: {
                type: Sequelize.BOOLEAN,
            }
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
