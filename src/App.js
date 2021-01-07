import React, { useState } from "react";
import Parent from "./parent.js"
import countercontext from "./countercontext";


function App() {
    let countstate = useState(1)
    return(
        
        <countercontext.Provider value = {countstate}>
            <div>
                <Parent />
            </div>
        </countercontext.Provider>
 
    )
}
export default App;
