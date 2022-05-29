import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Jobcard from '../components/jobcard/Jobcard';
import Map from '../components/googlemaps/Map';
import { useQuery } from '@apollo/client';
import { QUERY_ALLJOBS } from '../utils/queries';

export default function Jobs() {
    const { loading, data } = useQuery(QUERY_ALLJOBS);
    const [jobsToPost, setJobsToPost] = useState([]);

    useEffect(() => {
        getJobsToPost(data);
    }, [data])

    const getJobsToPost = async (data) => {
        try {
            if (!loading){
                const { jobPosts } = data;
                const slicedPost = jobPosts.slice(0, 11);
                setJobsToPost(slicedPost);
            }
        } catch (err) { console.log(err) };
    };

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className='container rounded-2xl my-4  flex flex-col mx-auto w-full items-center justify-between'>
                <div className='px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md flex justify-between items-center'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900 dark:text-white'>
                        Recommended for you
                    </h3>
                    <div className='w-3/6'>
                        <p className='text-gray-500 text-sm'>
                            Get
                            <span className='text-blue-400 font-bold'>
                                &nbsp;Connected&nbsp;
                            </span>
                            To Your Dream Job
                        </p>
                    </div>
                    <div className='w-1/6 text-right'>
                    </div>
                </div>
               
            </div>
            {loading ? (
                <h3>loading...</h3>
            ) : (
                    <div className='container' >
                        {jobsToPost && jobsToPost.map(job => {
                        return <Jobcard job={job} key={job._id} ></Jobcard>
                        })};
                    </div>
            )}

        </React.Fragment>
    )
}