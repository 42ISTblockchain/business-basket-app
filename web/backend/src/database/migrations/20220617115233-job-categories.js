'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('JobCategories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            status: {
                type: Sequelize.BOOLEAN,
                default: true,
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('JobCategories');
    }
};
