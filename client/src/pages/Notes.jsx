import React, { useState, useEffect } from 'react';
import '../pages/pages.styles/Notes.css'


export default function Notecard() {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState('');
  const [error, setError] = useState(false);
  const [completedTasks, setCompletedTasks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem) {
      setError(false);
      let uniqueId =
        new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
      let newTodoItem = {
        id: uniqueId,
        todo: todoItem,
        complete: false,
      };
      setTodos([newTodoItem, ...todos]);
      setTodoItem('');
    } else {
      setError(true);
      setTodoItem('');
    }
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  };

  useEffect(() => {
    let completeArray = [];
    todos.filter((todo) => todo.complete === true && completeArray.push(todo));
    setCompletedTasks(completeArray.length);
  }, [todos]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <React.Fragment>
      <div className="w-full sm:w-1/2 xl:w-1/3 ">
        <div className="mb-4 mx-0 sm:ml-4 xl:mr-4 ">
          <div className="shadow-lg bg-white dark:bg-gray-700 w-full rounded-2xl">
              <p className="font-bold text-md p-4 text-blue-700 dark:text-white underline">
                My Notes
              </p>
            <div className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
              <form onSubmit={handleSubmit} className="flex items-center justify-start text-sm" id="form-box">
                <input
                
                  type="text"
                  value={todoItem}
                  onChange={(e) => setTodoItem(e.target.value)}
                  name="todo"
                  id="todo"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="New Note Here"
                />
                <div id="add-btn">
                <button type="submit" className="px-2 py-1 flex w-30 mt-4 items-center text-xs rounded-md font-bold text-blue-500 bg-blue-100" >
                Add
                </button>
                </div>
              </form>
            </div>

            <div className="mb-4">
              <h5 id="tick-box">{todos.length < 10 ? `0${todos.length}` : todos.length}</h5>
              <p className="font-bold text-md p-4 text-blue-700 dark:text-white underline">Created tasks</p>
              {todos.map((todoItem) => {
                const { id, todo, complete } = todoItem;
                return (
                  <div id="note-box" key={id} className="flex items-center ml-2 text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                    <p className={complete ? 'text-done' : ''}>{todo}</p>
                    <div id="del-btn">
                    <button className="px-2 py-1 flex w-30 mt-4 items-center text-xs rounded-md font-bold text-blue-500 bg-blue-100"
                      onClick={() => deleteTodo(id)}>Delete</button>
                      </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}