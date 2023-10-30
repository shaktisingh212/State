
import React, { useState } from "react"
const State=()=>{
    const [data,mydata]=useState(0);
    // const [ndata, setndata] = useState(0)
    const hand=()=>{
        mydata(data+1)
        // setndata(ndata-1)
    }
    return(
    <div>
            <h1>{data}</h1>
            {/* <h1>{ndata}</h1> */}
            {/* <button onClick={hand}> click me for increase/decrease</button> */}
            <button onClick={hand}> click me for increase</button>
            <button onClick={()=>{mydata(data-1)}}> click me for decrease </button>
        </div>
    )
};
export default State;