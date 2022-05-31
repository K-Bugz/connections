import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Jobcard from '../components/jobcard/Jobcard';
import { useQuery } from '@apollo/client';
import { QUERY_ALLJOBS } from '../utils/queries';
import Map from '../components/googlemaps/Map'
import '../pages/pages.styles/Jobs.css'

export default function Jobs() {
    const [jobsToPost, setJobsToPost] = useState([]);
    const [jobPages, setJobPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [numOfPages, setNumOfPages] = useState(0);
    const { loading, data } = useQuery(QUERY_ALLJOBS);

    useEffect(() => { getNumOfPages(data); }, [data])
    useEffect(() => { createPages(); }, [numOfPages])
    // useEffect(() => { setPage(); }, [jobPages])
    useEffect(() => { setPage(); }, [currentPage, jobPages])

    const getNumOfPages = async (data) => {
        if (!loading) {
            const { jobPosts } = data;
            let numOfPages = Math.ceil(jobPosts.length / 15)
            setNumOfPages(numOfPages);
        }
    };

    const createPages = () => {
        if (!loading) {
            const { jobPosts } = data;
            let copyOfJobpost = [...jobPosts];
            let pages = [];
            for (let i = 0; i < numOfPages; i++) {
                const newPage = copyOfJobpost.splice(0, 15)
                pages.push(newPage);
            }
            setJobPages(pages);
        }
    }

    const setPage = () => {
        if (!loading) {
            setJobsToPost(jobPages[currentPage]);
        }
    }

    const nextPage = () => {
        if (currentPage < numOfPages -1 ) {
            setCurrentPage(currentPage + 1);
        }
    }

    const previousPage = () => {
        if (currentPage >= 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="flex justify-center" id="job-nav">
            <h1>Job Posts</h1>
            </div>
            {!jobsToPost ? (
                <h3>loading...</h3>
            ) : (
                <div className='container' >
                    <button onClick={previousPage}>Previous Page</button>
                    <p>Page {currentPage + 1} out of {numOfPages}</p>
                    <button onClick={nextPage}>Next Page</button>
                    {jobsToPost && jobsToPost.map(job => {
                        return <Jobcard job={job} key={job._id} ></Jobcard>
                    })}
                    <button onClick={previousPage}>Previous Page</button>
                    <p>Page {currentPage + 1} out of {numOfPages}</p>
                    <button onClick={nextPage}>Next Page</button>
                </div>
            )}
            <div className="flex justify-center">
                <Map></Map>
            </div>
        </React.Fragment>
    )
}