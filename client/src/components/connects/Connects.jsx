import React from 'react';
import ProfileChatCard from '../profile/ProfileChatCard';

export default function Connects() {
  return (
    <React.Fragment>
      <div className="mb-4">
        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
          <p className="font-bold text-md text-black dark:text-white">
          </p>
          <ul>
            <li className="flex items-center my-6 space-x-2">
              <ProfileChatCard></ProfileChatCard>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}