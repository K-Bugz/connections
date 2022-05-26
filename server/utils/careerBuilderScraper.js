const axios = require('axios');
const cheerio = require('cheerio');

async function CareerBuilderScraper(nameOfCity) {
    let url = `https://www.careerbuilder.com/jobs?keywords=Web+developer&location=${nameOfCity}`;

    try {
        // Fetch HTML of the page we want to scrape
        const { data } = await axios.get(url);
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);
        // Get all child li of the div with the class of ".jobs-search__results-list"
        const listItems = $("#jobs_collection li");
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
            const title = $(el).find('.data-results-title').text().replace(/\s\s+/g, '');
            const link = 'https://www.careerbuilder.com' + $(el).find('a').attr('href');
            let company;
            let location;
            let timePosted = $(el).find('.data-results-publish-time').text().replace(/\s\s+/g, '');
            if (timePosted === "Today") {
                let today = new Date;
                timePosted = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
            }
            const dataDetails = $(el).find('.data-details span');
            dataDetails.each((idx, el) => {
                if (idx === 0) {
                    company = $(el).text().replace(/\s\s+/g, '');
                    return;
                }
                if (idx === 1) {
                    location = $(el).text().replace(/\s\s+/g, '');
                    return;
                }
            })
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

module.exports = CareerBuilderScraper;