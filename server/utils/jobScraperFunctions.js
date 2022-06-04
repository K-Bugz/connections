const careerBuilderScraper = require('./careerBuilderScraper');
const indeedScraper = require('./indeedScraper');
const linkedinScraper = require('./linkedinScraper');
const { Jobpost, User } = require('../models');;

async function scrapeSites(nameOfCity) {
    try {
        const careerbuilderJobs = await careerBuilderScraper(nameOfCity);
        const indeedJobs = await indeedScraper(nameOfCity);
        const linkedinJobs = await linkedinScraper(nameOfCity);

        const scrapedJobs = careerbuilderJobs.concat(indeedJobs).concat(linkedinJobs);
        shuffleArray(scrapedJobs);
        const numberOfJobs = scrapedJobs.length;
        console.log(numberOfJobs + " jobs found!");

        return scrapedJobs
    } catch (err) {
        console.log(err);
    }
};

async function addJobsToDB(scrapedJobsArr) {
    try {
        const savedJobs = await Jobpost.find();
        if (savedJobs.length > 0) {
            const savedLinks = savedJobs.map((job) => {
                const { link } = job;
                return link;
            });
            const jobsToSave = []
            scrapedJobsArr.forEach(job => {
                if (!savedLinks.includes(job.link)) {
                    jobsToSave.push(job);
                }
            })
            await Jobpost.insertMany(jobsToSave);
            console.log(jobsToSave.length + " new jobs added!");
            return;
        };
        await Jobpost.insertMany(scrapedJobsArr);
        console.log(scrapedJobsArr.length + " new jobs added!")
    } catch (err) {
        console.log(err);
    }
};

async function removeUnsavedJobs() {
    const jobs = await Jobpost.find({});
    if (jobs.length > 300) {
        await Jobpost.deleteMany({ isSaved: false });
        console.log('Unsaved jobs removed from DB');
    }
};

async function loginScrape() {
    const austinJobs = await scrapeSites('Austin');
    await addJobsToDB(austinJobs);
    console.log('Add Austin area jobs to DB');
};

async function refreshDBJobs() {
    await removeUnsavedJobs();
    await loginScrape("Austin");
    console.log('Jobs in DB refreshed!')
};

// async function removeUnusedIsSaved () {
//     const usersWithSavedJobs = await User.find({savedJobs: {$type: 'array', $ne: []} })
//     let userSavedJobs = [];
//     usersWithSavedJobs.forEach((user) => {
//         userSavedJobs = userSavedJobs.concat(user.savedJobs);
//     })
//     const isSavedJobs = await Jobpost.find({ isSaved: true });
//     let jobsToDelete = [];
//     console.log(isSavedJobs);
//     isSavedJobs.forEach(job => {
//        if(!userSavedJobs.includes(job._id)) {
//         jobsToDelete.push(job);
//        }
//     })
//     console.log(jobsToDelete);

// }

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

module.exports = { scrapeSites, addJobsToDB, removeUnsavedJobs, loginScrape, refreshDBJobs };