import "./State1.css"
import { useState } from "react";
const State1=()=>{

    // const [a, seta] = useState(1)
    const [event,setevent]=useState("");
    const handlechange=(event)=>{
        setevent(event.target.value)
    }
    const toupper=()=>{
        setevent(event.toUpperCase());
    }
    const tolower=()=>{
        setevent(event.toLowerCase())
    }
    const tocopy=()=>{
       navigator.clipboard.writeText(event)
      let data=document.getElementById('text');
       data.select()
       alert ('copied')
    }
    const tocut=()=>{
        navigator.clipboard.writeText(event)
        setevent("")
        alert ('cut')
       
    }
    const topaste=()=>{
        navigator.clipboard.readText().then(abc=>{
            setevent(event+abc)
        })
    }
    const toremove=()=>{
        setevent("")
    }
    const toremoveextra=()=>{
        // let newtext=event.replace(/\s/g,'')
        let newtext=event.replace(/  +/g, ' ')
        // let newtext = event.split(`/[]/`)
        setevent(newtext)
    }

    let b=1;
    const tochangetheme=()=>{
        // b++;
        if(b%8===1){
             document.getElementById('main').style.background='yellow'
            //  seta(2)
            }
         if(b%8===2){
                document.getElementById('main').style.background='red'
                // seta(3)
        }
         if(b%8===3){
            document.getElementById('main').style.background='green'
            // seta(4)
        }
        if(b%8===4){
            document.getElementById('main').style.background='blue'
            // seta(5)
        }
        if(b%8===5){
            document.getElementById('main').style.background='orange'
            // seta(6)
        }
        if(b%8===6){
            document.getElementById('main').style.background='gray'
            // seta(7)
        }
        if(b%8===7){
            document.getElementById('main').style.background='black'
            // seta(8)
        }
        if(b%8===8){
            document.getElementById('main').style.background='pink'
            // seta(1)
        }
        console.log(b);
       b++;
    }
    return (
        <div  id="main">
           {/* <div className="ss d-flex flex-wrap "><span >{event}</span></div> 
            <input className="ps-2" value={event} type="text" onChange={handlechange} placeholder="text to see magic"/> */}
           <center> 
            <textarea className="ps-4" value={event} onChange={handlechange} id="text" placeholder="text to see magic" cols="80" rows="10"></textarea>
            </center>
            <button onClick={toupper}>ToUpperCase</button>
            <button onClick={tolower}>ToLowerCase</button>
            <button onClick={tocopy}>Copy</button>
            <button onClick={tocut}>Cut</button>
            <button onClick={topaste}>Paste</button>
            <button onClick={toremove}>Remove</button>
            <button onClick={toremoveextra}>Remove extra space</button>
            <button onClick={tochangetheme}>Theme change</button>
        </div>
    )
};
export default State1