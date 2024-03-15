import React, { useReducer } from 'react'
import "../../src/App.css"

const ToDoItem = ({item: {data, isHidden}, index, dispatch}) => {
    const toggleVisibility = () => {
        console.log((!isHidden))
    };
  return (
      <>
    <center>
    <div className='to-do'>
    <h3 className='todo-item'>{isHidden?"This Content is Hidden":data}</h3>
    <button className = "toggle" onClick={()=>{
        {dispatch({type:"CHANGE_ISHIDDEN", payload:index})}
    }}
        >Toggle</button>
    </div>
    </center>   </>
)}

export default ToDoItem