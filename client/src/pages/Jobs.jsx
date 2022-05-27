import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Jobcard from '../components/jobcard/Jobcard';
import Map from '../components/googlemaps/Map';

export default function Jobs () {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Jobcard></Jobcard>
            <Map></Map>
        </React.Fragment>
    )
}