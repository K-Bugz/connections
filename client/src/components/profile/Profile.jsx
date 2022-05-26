import React from 'react';
import Navbar from '../../components/navbar/Navbar';

export default function Profile() {
    return (
        <React.Fragment>
        <Navbar></Navbar>
        <div className='bg-gray-100'>
            <div className='min-h-full flex justify-center px-4'>
                <div className='max-w-2xl mt-6 w-full space-y-6'>
                    <div className='md:grid md:grid-cols-3 md:gap-6'>
                        <div className='md:col-span-1'>
                            <div className='px-4 sm:px-0'>
                                <h3 className='text-lg font-medium leading-6 text-gray-900'>Profile</h3>
                                <p className='mt-1 text-sm text-gray-600'>
                                    Find potential connections by showcasing your talents.
                                </p>
                            </div>
                        </div>
                        <div className='mt-5 md:mt-0 md:col-span-2'>
                            <form action='#' method='POST'>
                                <div className='sm:rounded-md sm:overflow-hidden'>
                                    <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                                        <div className='grid grid-cols-3 gap-6'>
                                            <div className='col-span-3 sm:col-span-2'>
                                                <label className='block text-sm font-medium text-gray-700'>First Name</label>
                                                <div className='mt-1 flex rounded-md shadow-sm'>
                                                    <span className='inline-flex items-center px-1 rounded-md border border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                                                        <input
                                                            type='text'
                                                            firstName='First Name'
                                                            id='Username'
                                                            className=''
                                                            placeholder='Ada'
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-3 gap-6'>
                                            <div className='col-span-3 sm:col-span-2'>
                                                <label className='block text-sm font-medium text-gray-700'>Last Name</label>
                                                <div className='mt-1 flex rounded-md shadow-sm'>
                                                    <span className='inline-flex items-center px-1 rounded-md border border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                                                        <input
                                                            type='text'
                                                            firstName='Last Name'
                                                            id='Username'
                                                            className=''
                                                            placeholder='Lovelace'
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-3 gap-6'>
                                            <div className='col-span-3 sm:col-span-2'>
                                                <label className='block text-sm font-medium text-gray-700'>Title</label>
                                                <div className='mt-1 flex rounded-md shadow-sm'>
                                                    <span className='inline-flex items-center px-1 rounded-md border border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                                                        <input
                                                            type='text'
                                                            name='company-website'
                                                            id='company-website'
                                                            className=''
                                                            placeholder='Developer'
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-3 gap-6'>
                                            <div className='col-span-3 sm:col-span-2'>
                                                <label htmlFor='company-website' className='block text-sm font-medium text-gray-700'>
                                                    Website
                                                </label>
                                                <div className='mt-1 flex rounded-md shadow-sm'>
                                                    <span className='inline-flex items-center px-1 rounded-md border border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                                                        http://
                                                        <input
                                                            type='text'
                                                            name='company-website'
                                                            id='company-website'
                                                            className=''
                                                            placeholder='www.yoursite.com'
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>About</label>
                                            <div className='mt-1'>
                                                <textarea
                                                    id='about'
                                                    name='about'
                                                    rows={3}
                                                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                                                    placeholder=' '
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <p className='mt-2 text-sm text-gray-500'>
                                                Tell us about yourself.
                                            </p>
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Photo</label>
                                            <div className='mt-1 flex items-center'>
                                                <span className='inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100'>
                                                    <svg className='h-full w-full text-gray-300' fill='currentColor' viewBox='0 0 24 24'>
                                                        <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                                                    </svg>
                                                </span>
                                                <label
                                                    htmlFor='file-upload'
                                                    className='m-4 relative cursor-pointer bg-white rounded-md font-medium text-blue-400 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                                                >
                                                    <span>Upload image</span>
                                                    <input id='file-upload' name='file-upload' type='file' className='sr-only' />
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Cover photo</label>
                                            <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                                                <div className='space-y-1 text-center'>
                                                    <svg
                                                        className='mx-auto h-12 w-12 text-gray-400'
                                                        stroke='currentColor'
                                                        fill='none'
                                                        viewBox='0 0 48 48'
                                                        aria-hidden='true'
                                                    >
                                                        <path
                                                            d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                                                            strokeWidth={2}
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                    </svg>
                                                    <div className='flex text-sm text-gray-600'>
                                                        <label
                                                            htmlFor='file-upload'
                                                            className='relative cursor-pointer bg-white rounded-md font-medium text-blue-400 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                                                        >
                                                            <span>Upload a file</span>
                                                            <input id='file-upload' name='file-upload' type='file' className='sr-only' />
                                                        </label>
                                                        <p className='pl-1'>or drag and drop</p>
                                                    </div>
                                                    <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-4 py-3 text-right sm:px-6'>
                                        <button
                                            type='submit'
                                            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}