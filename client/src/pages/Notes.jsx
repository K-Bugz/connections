import React from "react";


export default function Notecard() {
  return (
    <React.Fragment>
      <div className="w-full sm:w-1/2 xl:w-1/3">
        <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
          <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
            <p className="font-bold text-md p-4 text-black dark:text-white">
              My Notes
            </p>
            <ul>
              <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-start text-sm">
                  <span className="mx-4">
                    01
                  </span>
                  <input
                    type="text"
                    name="todo"
                    id="todo"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="New Note Here"
                  />

                </div>
                <label class="text-gray-700" for="time">
                  <input type="time" class="mx-4 text-gray-400 dark:text-gray-300" />
                </label>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-start text-sm">
                  <span className="mx-4">
                    02
                  </span>
                  <input
                    type="text"
                    name="todo"
                    id="todo"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="New Note Here"
                  />
                </div>
                <label class="text-gray-700" for="time">
                  <input type="time" class="mx-4 text-gray-400 dark:text-gray-300" />
                </label>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-start text-sm">
                  <span className="mx-4">
                    03
                  </span>
                  <input
                    type="text"
                    name="todo"
                    id="todo"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="New Note Here"
                  />
                </div>
                <label class="text-gray-700" for="time">
                  <input type="time" class="mx-4 text-gray-400 dark:text-gray-300" />
                </label>
              </li>
              <li className="flex items-center text-gray-400 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-start text-sm">
                  <span className="mx-4">
                    04
                  </span>
                  <input
                    type="text"
                    name="todo"
                    id="todo"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="New Note Here"
                  />
                </div>
                <label class="text-gray-700" for="time">
                  <input type="time" class="mx-4 text-gray-400 dark:text-gray-300" />
                </label>
              </li>
              <li className="flex items-center text-gray-400  justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-start text-sm">
                  <span className="mx-4">
                    05
                  </span>
                  <input
                    type="text"
                    name="todo"
                    id="todo"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="New Note Here"
                  />
                </div>
                <label class="text-gray-700" for="time">
                  <input type="time" class="mx-4 text-gray-400 dark:text-gray-300" />
                </label>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-start text-sm">
                  <span className="mx-4">
                    06
                  </span>
                  <input
                    type="text"
                    name="todo"
                    id="todo"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="New Note Here"
                  />
                </div>
                <label class="text-gray-700" for="time">
                  <input type="time" class="mx-4 text-gray-400 dark:text-gray-300" />
                </label>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3">
                <div className="flex items-center justify-start text-sm">
                  <span className="mx-4">
                    07
                  </span>
                  <input
                    type="text"
                    name="todo"
                    id="todo"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="New Note Here"
                  />
                </div>
                <label class="text-gray-700" for="time">
                  <input type="time" class="mx-4 text-gray-400 dark:text-gray-300" />
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}