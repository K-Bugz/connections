import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Jobcard from '../components/jobcard/Jobcard';
import Map from '../components/googlemaps/Map';
import { useQuery } from '@apollo/client';
import { QUERY_ALLJOBS } from '../utils/queries';

export default function Jobs() {
    const [jobsToPost, setJobsToPost] = useState([]);
    const { loading, data} = useQuery(QUERY_ALLJOBS);

    useEffect(() => {
        getJobsToPost(data);
    }, [loading])

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
            <h1>Job Posts</h1>
            {!jobsToPost ? (
                <h3>loading...</h3>
            ) : (
                    <div className='container'>
                        {jobsToPost && jobsToPost.map(job => {
                        return <Jobcard job={job} key={job._id} ></Jobcard>
                        })};
                    </div>
            )}
            <Map></Map>
        </React.Fragment>
    )
}