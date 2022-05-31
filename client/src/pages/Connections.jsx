import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ProfileCard from '../components/profile/ProfileCard';
import Footer from '../components/footer/Footer'

export default function Connections() {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className='container rounded-2xl flex flex-col my-4 mx-auto items-center justify-between'>
                <div className='px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md flex justify-between items-center'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900 dark:text-white'>
                        Open To Work
                    </h3>
                    <div className='w-3/6'>
                        <p className='text-gray-500 text-sm'>
                            Get
                            <span className='text-blue-400 font-bold'>
                                &nbsp;Connected&nbsp;
                            </span>
                            To Amazing Developers
                        </p>
                    </div>
                    <div className='w-1/6 text-right'>
                    </div>
                </div>
            </div>
            <div className='container rounded-2xl flex flex-row mx-auto w-full items-center m-8'>
                <ProfileCard></ProfileCard>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}