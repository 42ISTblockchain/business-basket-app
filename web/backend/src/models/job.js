"use strict";

const Sequelize = require("sequelize");
const {sequelize} = require("../config/database");
const JobApplication = require("./job-application");

const Job = sequelize.define("Job", {
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
        defaultValue: true,
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
}, {
    timestamps: true,
    paranoid: true,
    hooks: {
        afterDestroy: async function (job) {
            sequelize.models.JobApplication.destroy({where: {jobId: job.id}})
        },
    }
});

Job.associate = function (models) {
    Job.hasOne(models.JobCategory, {as: 'category', foreignKey: "id", sourceKey: 'jobCategoryId'});
    Job.hasOne(models.City, {as: 'city', foreignKey: "id", sourceKey: 'cityId'});
    Job.hasOne(models.Hire, {as: 'hire', foreignKey: "id", sourceKey: 'hireId'});
    Job.hasMany(models.JobApplication, {as: 'job_applications', foreignKey: "jobId", hooks: true});
};

module.exports = Job
