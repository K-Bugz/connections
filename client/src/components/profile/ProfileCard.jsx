import React from 'react';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

const defaultImageDataURI =
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='000000' fill-opacity='0.25' viewBox='0 0 24 24'%3E %3Cpath d='M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z' /%3E %3C/svg%3E"

const defaultImageDataBGURI =
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='24 24 24 24'%3E%3Cpath d='M10 10h123v123H10z'/%3E%3C/svg%3E"


  const addDefaultImg = (e) => {
    // prevent infinite callbacks if 404 image fails
    e.target.onError = null
    e.target.src = defaultImageDataURI
  }

  const addDefaultImg2 = (e) => {
    // prevent infinite callbacks if 404 image fails
    e.target.onError = null
    e.target.src = defaultImageDataBGURI
  }


export default function Navbar() {
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
            <div className=' bg-white-200 dark:bg-white flex flex-wrap items-center justify-center m-6 '>
                <div className='container bg-white shadow-lg transform duration-200 easy-in-out'>
                    <div className='h-32 overflow-hidden' >
                        <img className='w-full' 
                        src={profileState.coverPhoto  || defaultImageDataBGURI} 
                        alt="bgpic"
                        height="600px"
                        width="600px"
                        onError={(e) => addDefaultImg2(e)}
                         />
                    </div>
                    <div className='flex justify-center px-8 '>
                        <img className='h-50 w-50 bg-white p-2 rounded-full' 
                        src={profileState.profilePic || defaultImageDataURI}
                        alt={profileState.firstName}
                        height="128px"
                        width="128px"
                        onError={(e) => addDefaultImg(e)}
                         />
                    </div>
                    <div className=' '>
                        <div className='text-center px-5'>
                            <h2 className='text-gray-800 text-3xl font-bold'>{profileState.firstName + ' ' + profileState.lastName}</h2>
                            <p className='text-gray-400 mt-2'>{profileState.title}</p>
    {/* This has a character limit of 250 */}
                            <p className='mt-2 text-gray-600'>{profileState.about}</p>
                        </div>
                        <hr className='mt-6' />
                        <div className='flex  bg-gray-50 '>
                            <div className='border'></div>
                            <div className='text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer'>
                                <a href={profileState.website} 
                                className='font-semibold' 
                                title="Website" 
                                target='_site' 
                                rel="noopener noreferrer">Website</a>
                            </div>
                            <div className='text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer'>
                                <a href={"mailto:" + profileState.email}
                                 className='font-semibold'
                                 title="Email"
                                 target='_site'
                                 rel='noopener noreferrer'>Email</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}