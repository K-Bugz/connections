const axios = require('axios');
const cheerio = require('cheerio');

async function linkedInScraper(nameOfCity) {
    let url = `https://www.linkedin.com/jobs/search?keywords=Web%20Development&location=${nameOfCity}&geoId=&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0`;

    try {
        // Fetch HTML of the page we want to scrape
        const { data } = await axios.get(url);
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);
        // Get all child li of the div with the class of ".jobs-search__results-list"
        const listItems = $(".jobs-search__results-list li");
        // create array to store the job post once they are created
        const jobposts = [];
        // loop over the li elements and grab data
        listItems.each((idx, el) => {
            // new post to store the data for each el
            let post = {
                title: "",
                link: "",
                company: "",
                location: "",
                timePosted: ""
            };
            // get title element by class. replace() with RegEx is to get rid of extra white space/
            const title = $(el).find('.base-search-card__title').text().replace(/\s\s+/g, '');
            // get the href attribute of the 'a' element in each li
            const link = $(el).find('.base-card__full-link').attr('href');
            const company = $(el).find('.hidden-nested-link').text().replace(/\s\s+/g, '');
            const location = $(el).find('.job-search-card__location').text().replace(/\s\s+/g, '');
            let timePosted = $(el).find('.job-search-card__listdate--new').text().replace(/\s\s+/g, '');
            if (!timePosted) {
                timePosted = $(el).find('.job-search-card__listdate').text().replace(/\s\s+/g, '');
            }

            // save scraped data to post object
            post.title = title;
            post.link = link;
            post.company = company;
            post.location = location;
            post.timePosted = timePosted;
            // add post object to the array
            jobposts.push(post);
        });

        if (jobposts) { console.log('Sucessfully scraped website!'); }

        return jobposts;

    } catch (err) {
        console.error(err);
    }
}

module.exports = linkedInScraper;