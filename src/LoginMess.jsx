import React from "react";
import './LoginMess.css'

const Greeting = (props) =>{
    return <div>
        <h1 className="greeting"> 
        {props.text}
        </h1>
    </div>
}
export default Greeting