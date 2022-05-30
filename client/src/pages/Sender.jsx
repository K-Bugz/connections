
import React from 'react';

export default function Sendercard(){
    return(
        <div className="flex flex-row items-center">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  U 
                  {/* {user.name} */} 
                  {/* first letter if name we could pop the first letter from an array */}
                </div>
                <div
                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                  <div>
                    User message goes here
                      {/* {user.message} */}
                  </div>
                </div>
              </div>
    )
}