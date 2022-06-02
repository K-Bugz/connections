import React from "react";
import Navbar from "../components/navbar/Navbar";
import ProfileChatCard from "../components/connects/Connects";
import Footer from '../components/footer/Footer'
import Sender from "../pages/Sender";
import Receiver from "../pages/Receiver";

export default function Messages() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className=" bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden">
        <div className=" flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <div className=" overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="w-full h-full shadow-lg rounded-2xl p-3 bg-white dark:bg-gray-700">
              <div className=" flex flex-col h-full w-full rounded-2xl bg-white px-4 py-6 ">
                <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100">
                    R
                  </div>
                  <div className="flex flex-col ml-3">
                    <div className="font-semibold text-sm">
                      Recruiter Name
                      {/* {user.name} */}
                    </div>
                  </div>
                </div>
                <div className="h-full overflow-hidden py-4">
                  <div className="h-full overflow-y-auto">
                    {/* message box */}
                    <div className="grid grid-cols-12 gap-y-2">
                      <div className="col-start-1 col-end-8 p-3 rounded-lg">
                        <Sender />
                      </div>
                      <div className="col-start-6 col-end-13 p-3 rounded-lg">
                        <Receiver />
                      </div>
                    </div>
                    {/* message box end */}
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
                    <div className="w-full">
                      <input
                        type="text"
                        className="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
                        placeholder="Type your message...."
                      />
                    </div>
                  </div>
                  <div className="ml-6">
                    <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white">
                      <svg
                        className="w-5 h-5 transform rotate-90 -mr-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-3/4">
              <ProfileChatCard />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}
