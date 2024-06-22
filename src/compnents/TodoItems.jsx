import React from 'react'
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png"
function TodoItems({task_text, id, isComplete, doDeleteTask, toggle}) {
  return (
    <div className="flex items-center my-3 gap-2">
      <div onClick={()=>toggle(id)} className="flex flex-1 items-center cursor-pointer">
         <img className="w-7" src={isComplete?tick:not_tick} alt="" />
         <p className={`text-slate-700 ml-3 text-[17px] decoration-slate-500 font-semibold ${isComplete? "line-through text-gray-500":""}`}>
            {task_text}
         </p>
      </div>
      
      <img className="w-4 cursor-pointer hover:bg-slate-300" src={delete_icon} alt="" onClick={()=>doDeleteTask(id)} />
    </div>
  )
}

export default TodoItems