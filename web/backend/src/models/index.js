'use strict';

const Worker = require('./worker');
const Hire = require('./hire');
const Job = require('./job');
const JobApplication = require('./job-application');
const JobCategory = require('./job-category');
const HireComment = require('./hire-comment');
const City = require('./city');
const Country = require('./country');
const WorkerDocument = require('./worker-document');
const WorkerExperience = require('./worker-experience');
const WorkerLanguage = require('./worker-language');
const WorkerComment = require('./worker-comment');
const Language = require('./language');

const db = {
    Worker,
    Hire,
    Job,
    JobApplication,
    JobCategory,
    HireComment,
	City,
	Country,
	WorkerDocument,
	WorkerExperience,
	WorkerLanguage,
	Language,
    WorkerComment
};


Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;
