'use strict';

const Sequelize = require('sequelize');
const {sequelize} = require('../config/database');

const Comment = sequelize.define('Comment', {
        from: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        to: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        content: {
            type: Sequelize.STRING(500),
        },
        stars: {
            type: Sequelize.INTEGER,
        },
        jobId: {
            type: Sequelize.INTEGER,
        },
        deletedAt: {
            allowNull: true,
            type: Sequelize.DATE,
        },
    }
);

module.exports = {
    Comment
};
