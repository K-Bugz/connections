// const faker = require('faker');
const userSeeds = require('./userSeed.json');
// const thoughtSeeds = require('./thoughtSeed.json');
const db = require('../config/connection');
const { User } = require('../models');
// const faker = require('faker');

db.dropDatabase()
db.once('open', async () => {
    try {
        await User.deleteMany({});
        await User.create(userSeeds);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});