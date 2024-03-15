import React, { useReducer } from 'react';

const reducer = (state, action) => {
    let { type } = action;
    if (type === "INCREASE") {
        return state + 1;
    }
    if (type === "DECREASE") {
        return state - 1;
    }
    console.log(state, action)
    return state;
};

const initValue = 0;

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initValue);

    return (
        <div>
            <h1>USE REDUCER</h1>
            <button onClick={() => {
                dispatch({ type: "INCREASE", payload: "1"});
            }}>+</button>
            <h2>{count}</h2>
            <button onClick={() => {
                dispatch({ type: "DECREASE" });
            }}>-</button>
        </div>
    );
};

export default UseReducer;
