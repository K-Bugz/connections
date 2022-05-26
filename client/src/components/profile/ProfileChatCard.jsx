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
                    <div className="w-3/6">
                        <p className="text-gray-500 text-sm">
                            You have
                            <span className="text-blue-400 font-bold">
                                {/* Need to connect the new messages to this line */}
                                &nbsp;2&nbsp;
                            </span>
                            new messages
                        </p>
                    </div>
                    <div className="w-1/6 text-right">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" className="text-blue-400 h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                            </path>
                        </svg>
                    </div>
                </div>
                <ul className="flex flex-col">
                    <li className="px-2 py-2 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md flex justify-between items-center">
                        <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:text-blue-400 rounded-md flex flex-1 items-center p-4">
                            <div className="flex flex-col w-10 h-10 justify-center items-center mr-2">
                                <a href="link" className="block relative">
                                    <img alt="Avatar" src={user.imageUrl} className="h-8 w-8 rounded-full" />
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
                    {/* <li className="border-gray-400 flex flex-row mb-2">
            <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" className="block relative">
                        <img alt="profil" src="/images/person/10.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium dark:text-white">
                        Designer
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-sm">
                        Charlie Moi
                    </div>
                </div>
                <div className="text-gray-600 dark:text-gray-200 text-xs">
                    6:00 AM
                </div>
                <button className="w-24 text-right flex justify-end">
                    <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
        <li className="border-gray-400 flex flex-row mb-2">
            <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" className="block relative">
                        <img alt="profil" src="/images/person/3.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium dark:text-white">
                        CEO
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-sm">
                        Marine Jeanne
                    </div>
                </div>
                <div className="text-gray-600 dark:text-gray-200 text-xs">
                    6:00 AM
                </div>
                <button className="w-24 text-right flex justify-end">
                    <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
        <li className="border-gray-400 flex flex-row mb-2">
            <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" className="block relative">
                        <img alt="profil" src="/images/person/7.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium dark:text-white">
                        CTO
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-sm">
                        Boby PArk
                    </div>
                </div>
                <div className="text-gray-600 dark:text-gray-200 text-xs">
                    6:00 AM
                </div>
                <button className="w-24 text-right flex justify-end">
                    <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li> */}
                </ul>
            </div>

        </React.Fragment>
    )
}