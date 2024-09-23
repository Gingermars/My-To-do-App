import React from 'react'
import tick from '../Assets/tick.png'
import not_tick from '../Assets/not_tick.png'
import trash from '../Assets/trash.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isComplete ? tick : not_tick} alt=""  />
            <p className={`tex-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>

    <img onClick={()=>{deleteTodo(id)}} src={trash} alt="" className='w-3.5 cursor-pointer' />
        
    </div>
  )
}

export default TodoItems