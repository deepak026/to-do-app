import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
function Todo() {
  const inputRef = useRef();
  const [todoTasks, setTodoTasks] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText == "") {
      alert("Enter a Task");
      return;
    }
    const newTodo = {
      id: Date.now(),
      task: inputText,
      isComplete: false,
    };
    setTodoTasks(() => {
      return [...todoTasks, newTodo];
    });
    inputRef.current.value = "";
  };

  const doDeleteTask = (id)=>{
    setTodoTasks(todoTasks.filter((task)=>task.id!==id));
  }

  const toggle=(id)=>{
    setTodoTasks((prev)=>{
      return prev.map((task)=>{
        if(task.id === id){
          return {...task, isComplete: !task.isComplete}
        }
        return task;
      })
    })
  }
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoTasks));
  },[todoTasks])
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* title */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* input box and add button */}
      <div className="flex items-center my-5 bg-gray-200 rounded-full p-1">
        <input
          className=" bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-500"
          ref={inputRef}
          type="text"
          name=""
          id=""
          placeholder="Enter Task"
        />
        <button
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-md font-semibold"
          onClick={add}
        >
          Add Task+
        </button>
      </div>

      {/* todo list */}
      <div>
        {todoTasks.map((task, index) => (
          <TodoItems
            key={index}
            task_text={task.task}
            id={task.id}
            isComplete={task.isComplete}
            doDeleteTask={doDeleteTask}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
