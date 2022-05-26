import React from 'react';

export default function Navbar() {
    return (
        <React.Fragment>
            <div class=' bg-white-200 dark:bg-white flex flex-wrap items-center justify-center '>
                <div class='container bg-white shadow-lg transform duration-200 easy-in-out'>
                    <div class=' h-32 overflow-hidden' >
                        <img class='w-full' src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80' alt='' />
                    </div>
                    <div class='flex justify-center px-5  mt-10'>
                        <img class='h-100 w-100bg-white p-2 rounded-full   ' src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80' alt='' />

                    </div>
                    <div class=' '>
                        <div class='text-center px-14'>
                            <h2 class='text-gray-800 text-3xl font-bold'>Martin Short</h2>
                            <p class='text-gray-400 mt-2'>Junior Developer</p>
    {/* This has a word limit currently */}
                            <p class='mt-2 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                        </div>
                        <hr class='mt-6' />
                        <div class='flex  bg-gray-50 '>
                            <div class='border'></div>
                            <div class='text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer'>
                                <p> <span class='font-semibold'>Website</span></p>
                            </div>
                            <div class='text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer'>
                                <p> <span class='font-semibold'>Chat</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}