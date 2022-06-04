import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ProfileCard from '../components/profile/ProfileCard';
import Footer from '../components/footer/Footer'
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { OTHER_USERS } from '../utils/mutations';
import '../pages/pages.styles/Profile.css'

export default function Connections() {
    const { loading, data } = useQuery(OTHER_USERS);
    const [users, setUsers] = useState([]);

    const getOtherUsers = (data) => {
        if (!loading) {
            const { users } = data;
            setUsers(users);
        }
    }

    useEffect(() => { getOtherUsers(data) }, [data]);
    return (
        <React.Fragment>
            <Navbar></Navbar>
            
            {/* <div className='container rounded-2xl flex flex-col my-4 mx-auto items-center justify-between flex-wrap'>
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
                {users && users.map(user => {
                    return <ProfileCard userInfo={user} key={user._id}></ProfileCard>
                })}
            </div> */}
            <div className=" bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden">
        <div className=" flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <div className=" overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className=" ">
                {/* header */}
            <div id="header" className='px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md flex justify-between items-center'>
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
              <div id='container' className=" flex flex-col  bg-white px-4 py-6 w-full">
              {users && users.map(user => {
                    return <ProfileCard userInfo={user} key={user._id}></ProfileCard>
                })}
                <div className="h-full overflow-hidden py-4">
                    
                  <div className="h-full overflow-y-auto">

            
            <div className='container rounded-2xl flex flex-row mx-auto w-full items-center m-8'>
                
            </div>
                      {/* component */}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </React.Fragment>
    )
}