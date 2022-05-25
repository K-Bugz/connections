const axios = require('axios');
const cheerio = require('cheerio');

async function indeedScraper(nameOfCity) {
    let url = `https://www.indeed.com/jobs?q=fullstack+developer&${nameOfCity}`;

    try {
        // Fetch HTML of the page we want to scrape
        const { data } = await axios.get(url);
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);
        // Get all child li of the div with the class of ".jobs-search__results-list"
        const listItems = $(".jobsearch-ResultsList li");
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
            };// get title element by class. replace() with RegEx is to get rid of extra white space/
            let title = $(el).find('.jobTitle').text().replace(/\s\s+/g, '');
            // get the href attribute of the 'a' element in each li
            // const link = $(el).find('.base-card__full-link').attr('href');
            const link = 'https://www.indeed.com' + $(el).find('.jcs-JobTitle').attr('href');
            const company = $(el).find('.companyName').text().replace(/\s\s+/g, '');
            const location = $(el).find('.companyLocation').text().replace(/\s\s+/g, '');
            const timePosted = $(el).find('.date').text().replace(/\s\s+/g, '').replace(/Posted/g, 'Posted ').replace(/EmployerActive/g, 'Employer Active');
            // save scraped data to post object
            post.title = title;
            post.link = link;
            post.company = company;
            post.location = location;
            post.timePosted = timePosted;
            // add post object to the array
            if (post.title) {
                jobposts.push(post);
            }
        });

        if (jobposts) { console.log('Sucessfully scraped website!'); }

        return jobposts;

    } catch (err) {
        console.error(err);
    }
}

module.exports = indeedScraper;