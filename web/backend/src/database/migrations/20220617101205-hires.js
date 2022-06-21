'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('Hires', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            companyName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            taxNumber: {
                type: Sequelize.NUMERIC,
                allowNull: false
            },
            taxOffice: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phoneNumber: {
                type: Sequelize.STRING,
                allowNull: false
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false
            },
            emailVerified: {
                type: Sequelize.DATE,
                allowNull: true
            },
            rememberToken: {
                type: Sequelize.STRING,
                allowNull: true
            },
            resetPasswordToken: {
                type: Sequelize.STRING,
                allowNull: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Hires');
    }
};
