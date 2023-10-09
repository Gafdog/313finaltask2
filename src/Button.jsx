import React from "react";
import { Button } from 'semantic-ui-react'
import './Button1.css'



const button = (props) =>{ return <div className="button1">
    
    <Button>{props.wording}</Button>
    
    </div>}

export default button
