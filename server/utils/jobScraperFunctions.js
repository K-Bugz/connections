const careerBuilderScraper = require('./careerBuilderScraper');
const indeedScraper = require('./indeedScraper');
const linkedinScraper = require('./linkedinScraper');
const { Jobpost } = require('../models');;
const fs = require('fs');

async function scrapeSites(nameOfCity) {
    try {
        const careerbuilderJobs = await careerBuilderScraper(nameOfCity);
        const indeedJobs = await indeedScraper(nameOfCity);
        const linkedinJobs = await linkedinScraper(nameOfCity);

        const scrapedJobs = careerbuilderJobs.concat(indeedJobs).concat(linkedinJobs);
        const numberOfJobs = scrapedJobs.length;
        console.log(numberOfJobs + " jobs found!");

        return scrapedJobs;
    } catch (err) {
        console.log(err);
    }

}

async function addJobsToDB(scrapedJobsArr) {
    const savedJobs = await Jobpost.find();
    const savedLinks = savedJobs.map((job) => {
        const { link } = job;
        return link;
    });
    const jobsToSave = []
    scrapedJobsArr.forEach(job => {
        if (!savedLinks.includes(job.link)) {
            jobsToSave.push(job);
        }
    });

    await Jobpost.insertMany(jobsToSave);

    console.log(jobsToSave.length + " new jobs added!");
}

async function removeUnsavedJobs() {
    await Jobpost.deleteMany({ isSaved: false });
    console.log('Unsaved jobs removed from DB');
}

module.exports = { scrapeSites, addJobsToDB, removeUnsavedJobs };