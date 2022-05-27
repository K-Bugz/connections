import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Jobcard from '../components/jobcard/Jobcard';
import Map from '../components/googlemaps/Map';
import { useQuery } from '@apollo/client';
import { QUERY_ALLJOBS } from '../utils/queries';

export default function Jobs () {
    const { loading, data } = useQuery(QUERY_ALLJOBS);

    if (loading) {
        return <h3>Loading...</h3>
    }

    const { jobPosts } = data;
    
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Jobcard jobPosts={jobPosts}></Jobcard>
            <Map></Map>
        </React.Fragment>
    )
}