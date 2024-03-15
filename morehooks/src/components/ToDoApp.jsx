import React, { useReducer, useRef } from 'react'
import ToDoItem from './ToDoItem'
const todoReducer = (state, action) => {
    if (action.type == "ADD_ITEM"){
        return [
            ...state,{
                data: action.payload,
                isHidden: false
            }
        ]
    }

    if (action.type == "CHANGE_ISHIDDEN"){
        return state.map((e,i)=>{
            return i == action.payload ? {...e,isHidden:!e.isHidden} : e
        })
    }
    return state
}

const initialState = []

const ToDoApp = () => {

    const [todo, dispatch] = useReducer(todoReducer, initialState)
    const input = useRef(null)

    return (
        <>
        <div className='app-parent'>

        <h1 className='head'>📃 To Do List 📃</h1>
        <input ref={input} className = "input-todo" type="text" onKeyDown={(e)=>{
            if(e.key == "Enter"){
                dispatch({type:'ADD_ITEM', payload:e.target.value})
                console.log(todo)
            }
        }}/>

        {todo.map((e, i)=>{
            return <ToDoItem item = {e} index ={i} dispatch={dispatch}/>
        })}

        <button onClick={()=>{
            input.current.focus()
        }}>Scroll Up</button>
        </div>
        </>
    )
}

export default ToDoApp