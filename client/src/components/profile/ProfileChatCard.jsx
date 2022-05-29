import React from 'react';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function ProfileChatCard() {
    return (
        <React.Fragment>
            <div className="container rounded-2xl flex flex-col mx-auto w-full items-center justify-between">
                <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md flex justify-between items-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        Connections
                    </h3>
                </div>
                <ul className="flex flex-col">
                    <li className="px-2 py-2 sm:px-6 w-full border dark:bg-gray-800 bg-blue-200 shadow mb-2 rounded-md flex justify-between items-center">
                        <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:text-blue-400 rounded-md flex flex-1 items-center p-4">
                            <div className="flex flex-col w-10 h-10 justify-center items-center mr-2">
                                <a href="link" className="block relative">
                                    <img alt="Avatar" src={user.imageUrl} className="h-8 w-8 rounded-full " />
                                    <span className="absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-green-500 rounded-full">
                                    </span>
                                </a>
                            </div>
                            <div className="flex-1 pl- md:mr-16">
                                <div className="font-medium dark:text-white">
                                    {user.name}
                                </div>
                                <div className="text-gray-600 dark:text-gray-200 text-sm">
                                    {/* {title} */}  Title
                                </div>
                            </div>
                            {/*Add time that text came through */}
                            {/* <div className="text-gray-600 dark:text-gray-200 text-xs">
                    6:00 AM
                </div> */}
                            <a href="/Messages" className="w-24 text-right flex justify-end">
                                <svg width="12" fill="currentColor" height="12" className="hover:text-blue-400 dark:hover:text-blue-400 dark:text-blue-400 text-gray-500" viewBox="0 0 1792 1792"
                                >
                                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul className="flex flex-col">
                    <li className="px-2 py-2 sm:px-6 w-full border dark:bg-gray-800 bg-blue-200 shadow mb-2 rounded-md flex justify-between items-center">
                        <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:text-blue-400 rounded-md flex flex-1 items-center p-4">
                            <div className="flex flex-col w-10 h-10 justify-center items-center mr-2">
                                <a href="link" className="block relative">
                                    <img alt="Avatar" src={user.imageUrl} className="h-8 w-8 rounded-full " />
                                    <span className="absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-green-500 rounded-full">
                                    </span>
                                </a>
                            </div>
                            <div className="flex-1 pl- md:mr-16">
                                <div className="font-medium dark:text-white">
                                    {user.name}
                                </div>
                                <div className="text-gray-600 dark:text-gray-200 text-sm">
                                    {/* {title} */}  Title
                                </div>
                            </div>
                            {/*Add time that text came through */}
                            {/* <div className="text-gray-600 dark:text-gray-200 text-xs">
                    6:00 AM
                </div> */}
                            <a href="/Messages" className="w-24 text-right flex justify-end">
                                <svg width="12" fill="currentColor" height="12" className="hover:text-blue-400 dark:hover:text-blue-400 dark:text-blue-400 text-gray-500" viewBox="0 0 1792 1792"
                                >
                                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul className="flex flex-col">
                    <li className="px-2 py-2 sm:px-6 w-full border dark:bg-gray-800 bg-blue-200 shadow mb-2 rounded-md flex justify-between items-center">
                        <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:text-blue-400 rounded-md flex flex-1 items-center p-4">
                            <div className="flex flex-col w-10 h-10 justify-center items-center mr-2">
                                <a href="link" className="block relative">
                                    <img alt="Avatar" src={user.imageUrl} className="h-8 w-8 rounded-full " />
                                    <span className="absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-green-500 rounded-full">
                                    </span>
                                </a>
                            </div>
                            <div className="flex-1 pl- md:mr-16">
                                <div className="font-medium dark:text-white">
                                    {user.name}
                                </div>
                                <div className="text-gray-600 dark:text-gray-200 text-sm">
                                    {/* {title} */}  Title
                                </div>
                            </div>
                            {/*Add time that text came through */}
                            {/* <div className="text-gray-600 dark:text-gray-200 text-xs">
                    6:00 AM
                </div> */}
                            <a href="/Messages" className="w-24 text-right flex justify-end">
                                <svg width="12" fill="currentColor" height="12" className="hover:text-blue-400 dark:hover:text-blue-400 dark:text-blue-400 text-gray-500" viewBox="0 0 1792 1792"
                                >
                                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}