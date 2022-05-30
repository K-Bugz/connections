import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Jobcard from '../components/jobcard/Jobcard';
import { useQuery } from '@apollo/client';
import { QUERY_ALLJOBS } from '../utils/queries';
import Map from '../components/googlemaps/Map'
import '../pages/pages.styles/Jobs.css'

export default function Jobs() {
    const { loading, data } = useQuery(QUERY_ALLJOBS);
    const [jobsToPost, setJobsToPost] = useState([]);

    useEffect(() => {
        getJobsToPost(data);
    }, [data])

    const getJobsToPost = async (data) => {
        try {
            if (!loading) {
                const { jobPosts } = data;
                const slicedPost = jobPosts.slice(0, 11);
                setJobsToPost(slicedPost);
            }
        } catch (err) { console.log(err) };
    };

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <h1 class="flex justify-center " id="job-nav">Job Listings</h1>
            {loading ? (
                <h3>loading...</h3>
            ) : (
                <div className='container' >
                    {jobsToPost && jobsToPost.map(job => {
                        return <Jobcard job={job} key={job._id} ></Jobcard>
                    })};
                </div>
            )}
            <div className="flex justify-center">
            <Map></Map>
            </div>
        </React.Fragment>
    )
}