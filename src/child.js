import React, { useContext } from "react";
import countercontext from "./countercontext";

function Child() {
    let countervalue = useContext(countercontext)
    console.log(countervalue)
    return(
        <div>
            <h1>
                This is counter API : {countervalue[0]}
            </h1>


            <button onClick = {() => {countervalue[1](++countervalue[0])}} >
                    Counter Context
             </button>
        </div>
    )
    
}

export default Child;