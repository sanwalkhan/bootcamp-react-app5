import React, { useReducer } from "react";
import counterreducer from "./counterReducer";

function Child2(){
    let [state , dispatch] = useReducer(counterreducer , 0)
    console.log(state)

    return(
        <div>
            <h1>The Value Of ReducerContext is :{state} </h1>
            <p> using INCREMENT</p>

            <button onClick = { () => dispatch ('INCREMENT')} >
                + Reducer Context 
            </button>

               <p> Using DECREMENT</p>

            <button onClick = {()=> dispatch ("DECREMENT") }>
                - Reducer Context
            </button>
        </div>
    )
}
    
export default Child2 ;