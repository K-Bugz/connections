import React from 'react';
import { QUERY_USER } from '../../utils/queries';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

const defaultImageDataURI =
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='000000' fill-opacity='0.25' viewBox='0 0 24 24'%3E %3Cpath d='M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z' /%3E %3C/svg%3E"
 
const addDefaultImg = (e) => {
    // prevent infinite callbacks if 404 image fails
    e.target.onError = null
    e.target.src = defaultImageDataURI
  }

export default function ProfileChatCard() {
    
        const [profileState, setProfileState] = useState({});
        const { loading, data } = useQuery(QUERY_USER);
    
        useEffect(() => {
            addUserData(data);// eslint-disable-next-line
        }, [data]);
    
        const addUserData = async (data) => {
            try {
                if (!loading) {
                    const { user } = data;
                    setProfileState(user);
                }
            } catch (err) {
                console.log(err);
            }
        }

    return (
        <React.Fragment>
      <div className='container rounded-2xl flex flex-col mx-auto w-full items-center justify-between'>
                <div className='px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md flex justify-between items-center'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900 dark:text-white'>
                        Connections
                    </h3>
                </div>
                <ul className='flex flex-col'>
                    <li className='px-2 py-2 sm:px-6 w-full border dark:bg-gray-800 bg-blue-200 shadow mb-2 rounded-md flex justify-between items-center'>
                        <div className='transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:text-blue-400 rounded-md flex flex-1 items-center p-4'>
                            <div className='flex flex-col w-10 h-10 justify-center items-center mr-2'>
                              
                                <img className='h-50 w-50 bg-white p-2 rounded-full' 
                        src={profileState.profilePic || defaultImageDataURI}
                        alt={profileState.firstName}
                        height="128px"
                        width="128px"
                        onError={(e) => addDefaultImg(e)}
                         />
                            </div>
                            <div className='flex-1 pl- md:mr-16'>
                                <div className='font-medium dark:text-white'>
                                {profileState.firstName + ' ' + profileState.lastName}
                                </div>
                                <div className='text-gray-600 dark:text-gray-200 text-sm'>
                                    {profileState.title}
                                </div>
                            </div>
                            <a href='/Messages' className='w-24 text-right flex justify-end'>
                                <svg width='12' fill='currentColor' height='12' className='hover:text-blue-400 dark:hover:text-blue-400 dark:text-blue-400 text-gray-500' viewBox='0 0 1792 1792'
                                >
                                    <path d='M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z'>
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul>
                {/* <ul className='flex flex-col'>
                    <li className='px-2 py-2 sm:px-6 w-full border dark:bg-gray-800 bg-blue-200 shadow mb-2 rounded-md flex justify-between items-center'>
                        <div className='transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:text-blue-400 rounded-md flex flex-1 items-center p-4'>
                            <div className='flex flex-col w-10 h-10 justify-center items-center mr-2'>
                                <a href='link' className='block relative'>
                                    <img alt='Avatar' src={user.imageUrl} className='h-8 w-8 rounded-full ' />
                                    <span className='absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-green-500 rounded-full'>
                                    </span>
                                </a>
                            </div>
                            <div className='flex-1 pl- md:mr-16'>
                                <div className='font-medium dark:text-white'>
                                    {user.name}
                                </div>
                                <div className='text-gray-600 dark:text-gray-200 text-sm'>
                                     Title
                                </div>
                            </div>
                            <a href='/Messages' className='w-24 text-right flex justify-end'>
                                <svg width='12' fill='currentColor' height='12' className='hover:text-blue-400 dark:hover:text-blue-400 dark:text-blue-400 text-gray-500' viewBox='0 0 1792 1792'
                                >
                                    <path d='M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z'>
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul className='flex flex-col'>
                    <li className='px-2 py-2 sm:px-6 w-full border dark:bg-gray-800 bg-blue-200 shadow mb-2 rounded-md flex justify-between items-center'>
                        <div className='transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:text-blue-400 rounded-md flex flex-1 items-center p-4'>
                            <div className='flex flex-col w-10 h-10 justify-center items-center mr-2'>
                                <a href='link' className='block relative'>
                                    <img alt='Avatar' src={user.imageUrl} className='h-8 w-8 rounded-full ' />
                                    <span className='absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-green-500 rounded-full'>
                                    </span>
                                </a>
                            </div>
                            <div className='flex-1 pl- md:mr-16'>
                                <div className='font-medium dark:text-white'>
                                    {user.name}
                                </div>
                                <div className='text-gray-600 dark:text-gray-200 text-sm'>
                                     Title
                                </div>
                            </div>
                            <a href='/Messages' className='w-24 text-right flex justify-end'>
                                <svg width='12' fill='currentColor' height='12' className='hover:text-blue-400 dark:hover:text-blue-400 dark:text-blue-400 text-gray-500' viewBox='0 0 1792 1792'
                                >
                                    <path d='M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z'>
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul> */}
            </div>
        </React.Fragment>
    )
}