import React from 'react';

export default function Receivercard(){
    return(
        <div className="flex items-center justify-start flex-row-reverse">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  R
                  {/* {user.name} */}
                   {/* first letter if name we could pop the first letter from an array */}
                </div>
                <div
                    className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                >
                  <div>
                  Recruiter message goes here
                      {/* {user.message} */}
                      </div>
                </div>
              </div>
    )
}