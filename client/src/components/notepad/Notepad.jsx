import React from 'react';

export default function Notepad() {
    return (
        <div>
            <p className="font-bold text-md text-blue-400 m-4">
                My Notes
            </p>
            <form>
                <h2 className="label-wrapper">
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg bg-gray-200 "
                    name="text"
                    autoComplete="off"
                />
                <button type="submit" className="border flex-end ml-20 border-gray-200 text-gray-600 rounded bg-blue-200 shadow-lg rounded-2xl shadow-lg rounded-2xl p-2">
                    Add
                </button>
            </form>
        </div>
    );
}