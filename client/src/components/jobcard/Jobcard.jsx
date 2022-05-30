import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_JOB, REMOVE_JOB } from '../../utils/mutations';
import './Jobcard.css'

export default function JobCard( {job} ) {
    const [ jobInfo, setJobInfo ] = useState(job);
    const [saveJobPost] = useMutation(SAVE_JOB);
    const [removeFromSaved] = useMutation(REMOVE_JOB);
    const handleSaveJob =async () => {
        try {
            const updatedJob = await saveJobPost({ variables: { id: job._id, isSaved: true}});
            const { data } = updatedJob;
            setJobInfo(data.saveJob);
            alert("Job Saved!");
        } catch (err) {
            console.log(err);
        }
    }

    const handleRemoveJob =async () => {
        try {
            const updatedJob = await removeFromSaved({ variables: { id: job._id}});
            if (updatedJob) {
                alert("Job removed from saved");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <React.Fragment>
            
            <div className="mb-4 flex justify-center " id="job-container">
                <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full ">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center">
                            <span className="rounded-xl p-2 bg-gradient-to-r from-blue-400 to-blue-800 text-white w-full transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                            {jobInfo.title} <br/> {jobInfo.company}
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 256 262"
                                    preserveAspectRatio="xMidYMid"
                                >
                                </svg>
                            </span>
                        </div>
                        <div className="flex items-center">

                            {jobInfo.isSaved? (<button onClick={handleRemoveJob}>Remove from Saved</button>
                            ) : (
                                <button className="border p-3 border-gray-200 rounded-full " onClick={handleSaveJob}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    className="w-6 h-6 text-yellow-500"
                                    fill="currentColor"
                                    viewBox="0 0 1792 1792"
                                >
                                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                </svg>
                            </button>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-start my-4 space-x-4 ">
                        <span className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50">
                            {jobInfo.location}
                        </span>
                        <span className="px-2 py-1 flex items-center text-xs rounded-md text-blue-500 font-semibold bg-blue-100">
                            {jobInfo.timePosted}
                        </span>
                    </div>
                    <a href={jobInfo.link} target="_blank" rel="noreferrer"><span className="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-bold text-blue-500 bg-blue-100">
                        Click to Apply!
                    </span></a>
                </div>
            </div>
            

        </React.Fragment>
    )
}