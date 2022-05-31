import "./pages.styles/Dashboard.css";
import React from 'react';
import Calendario from "./Calender";
import Navbar from '../components/navbar/Navbar';
import Connects from '../components/connects/Connects';
import Jobcard from '../components/jobcard/Jobcard';
import Notecard from '../pages/Notes'
import ProfileCard from '../components/profile/ProfileCard';
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";


export default function Dashboard() {
  const { loading, data } = useQuery(QUERY_USER);
  const [jobsToPost, setJobsToPost] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  let savedJobs = [];

  const getSavedJobs = async (userInfo) => {
    try {
      if (!loading) {
        savedJobs = userInfo.savedJobs.slice(0, 10);
        setJobsToPost(savedJobs);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getDataForProfileCard = async (data) => {
    try{
      if (!loading) {
        const { user } = data;
        setUserInfo(user);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {getSavedJobs(userInfo)}, [userInfo])
  useEffect(() => { getDataForProfileCard(data)}, [data])

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main className="bg-white dark:bg-white  h-screen overflow-hidden">
        <div className="flex items-start justify-between">
          <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg w-80">
            <div className="bg-white h-full rounded-2xl dark:bg-white">
              <ProfileCard userInfo={userInfo}></ProfileCard>
            </div>
          </div>
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
              <div className="flex flex-col flex-wrap sm:flex-row ">
                <div className="w-full sm:w-1/2 xl:w-1/3">
                  <div className="mb-4">
                    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                      {!jobsToPost ? <p>no saved jobs yet</p> : jobsToPost.map(job => {
                        return <Jobcard job={job} key={job._id} ></Jobcard>})}
                    </div>
                  </div>
                </div>
                <Notecard/>
                {/* Calender Area */}
                <div className="w-full sm:w-1/2 xl:w-1/3">
                  <div className="mb-4">
                    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700">
                      <Calendario></Calendario>
                    </div>
                  </div>
                  {/* Chat area */}
                  <div className="mb-4">
                    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                      <Connects></Connects>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
     
    </React.Fragment>
  );
}
