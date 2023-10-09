import React from "react";
import Greeting from "../LoginMess"
import Login from "../Login"


function LoginPage (){
    var isLoggenin=false;

return(
    <div>
        
            {

            isLoggenin ? 
                <Greeting text = "You are logged in"/> 
                :
                
                <Greeting text = "Please enter your details to login"/>}
            <Login />
            
         
        
    
    </div>
)
}

export default LoginPage