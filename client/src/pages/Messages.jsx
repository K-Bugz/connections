import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ProfileChatCard from '../components/connects/Connects';

export default function Messages() {
    return (
        <React.Fragment>
        <Navbar></Navbar>   
<div className="flex flex-row h-screen antialiased text-gray-800">
    <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
  
    <ProfileChatCard></ProfileChatCard>
    </div>
    <div className="flex flex-col h-full w-full bg-white px-4 py-6">
      <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100">
          T
        </div>
        <div className="flex flex-col ml-3">
          <div className="font-semibold text-sm">UI Art Design</div>
        </div>
      </div>
      <div className="h-full overflow-hidden py-4">
        <div className="h-full overflow-y-auto">
          <div className="grid grid-cols-12 gap-y-2">
            <div className="col-start-1 col-end-8 p-3 rounded-lg">
              <div className="flex flex-row items-center">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  A
                </div>
                <div
                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                  <div>Hey How are you today?</div>
                </div>
              </div>
            </div>
            <div className="col-start-1 col-end-8 p-3 rounded-lg">
              <div className="flex flex-row items-center">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  A
                </div>
                <div
                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Vel ipsa commodi illum saepe numquam maxime
                    asperiores voluptate sit, minima perspiciatis.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-start-6 col-end-13 p-3 rounded-lg">
              <div className="flex items-center justify-start flex-row-reverse">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  A
                </div>
                <div
                    className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                >
                  <div>I'm ok what about you?</div>
                </div>
              </div>
            </div>
            <div className="col-start-6 col-end-13 p-3 rounded-lg">
              <div className="flex items-center justify-start flex-row-reverse">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  A
                </div>
                <div
                    className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                >
                  <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                  </div>
                </div>
              </div>
            </div>
            <div className="col-start-1 col-end-8 p-3 rounded-lg">
              <div className="flex flex-row items-center">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  A
                </div>
                <div
                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                  <div>Lorem ipsum dolor sit amet !</div>
                </div>
              </div>
            </div>
            <div className="col-start-6 col-end-13 p-3 rounded-lg">
              <div className="flex items-center justify-start flex-row-reverse">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  A
                </div>
                <div
                    className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                >
                  <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                  </div>
                  <div
                      className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                  >
                    Seen
                  </div>
                </div>
              </div>
            </div>
            <div className="col-start-1 col-end-8 p-3 rounded-lg">
              <div className="flex flex-row items-center">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  A
                </div>
                <div
                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, in.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-start-1 col-end-8 p-3 rounded-lg">
              <div className="flex flex-row items-center">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  A
                </div>
                <div
                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                  <div className="flex flex-row items-center">
                    <button
                        className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10"
                    >
                      <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex flex-row items-center space-x-px ml-4">
                      <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-12 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-5 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-3 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                      <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
          <button className="flex items-center justify-center h-10 w-10 text-gray-400 ml-1">
            <svg className="w-5 h-5"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
            </svg>
          </button>
          <div className="w-full">
            <input type="text"
                   className="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center" placeholder="Type your message...."/>
          </div>
          <div className="flex flex-row">
            <button className="flex items-center justify-center h-10 w-8 text-gray-400">
              <svg className="w-5 h-5"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
              </svg>
            </button>
            <button className="flex items-center justify-center h-10 w-8 text-gray-400 ml-1 mr-2">
              <svg className="w-5 h-5"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="ml-6">
          <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white">
            <svg className="w-5 h-5 transform rotate-90 -mr-px"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
    )
}
