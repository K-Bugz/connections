import React from 'react';

export default function Navbar() {
    return (
        <React.Fragment>
            <div className=' bg-white-200 dark:bg-white flex flex-wrap items-center justify-center '>
                <div className='container bg-white shadow-lg transform duration-200 easy-in-out'>
                    <div className=' h-32 overflow-hidden' >
                        <img className='w-full' src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80' alt='' />
                    </div>
                    <div className='flex justify-center px-8 '>
                        <img className='h-50 w-50 bg-white p-2 rounded-full' src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80' alt='' />

                    </div>
                    <div className=' '>
                        <div className='text-center px-5'>
                            <h2 className='text-gray-800 text-3xl font-bold'>Martin Short</h2>
                            <p className='text-gray-400 mt-2'>Junior Developer</p>
    {/* This has a character limit of 250 */}
                            <p className='mt-2 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sdffdsdfdfsdf  dfd</p>
                        </div>
                        <hr className='mt-6' />
                        <div className='flex  bg-gray-50 '>
                            <div className='border'></div>
                            <div className='text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer'>
                                <p> <span className='font-semibold'>Website</span></p>
                            </div>
                            <div className='text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer'>
                                <p> <span className='font-semibold'>Email</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}