import React, { useReducer, useState } from "react";
import "./style.css";
const Usereducer = () => {
    const reducer = (state, action) => {
        if (action.type === "INCR") {
            state = state + 1;
        }
        if (action.type === "DECR") {
            state = state - 1;
        }
        return state;
    };
    const initialData = 0;
    //  const [myNum, setmyNum] = useState(initialData);
    const [state, dispatch] = useReducer(reducer, initialData);
    return ( <
        >
        <
        div className = "comp1" >
        <
        h1 > { myNum } < /h1> <
        /div> <
        div className = "comp2" >
        <
        button className = "btn1"
        onClick = {
            () => setmyNum(myNum + 1) } >
        Incr <
        /button> <
        button className = "btn2"
        onClick = {
            () => setmyNum(myNum - 1) } >
        Decr <
        /button> <
        /div> <
        />
    );
};

export default Usereducer;