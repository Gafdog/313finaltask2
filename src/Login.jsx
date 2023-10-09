import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate, Link } from "react-router-dom";
import './Login.css'
import { signInWithGooglePopup, createUserDocFromAuth, signinAuthUserWithEmailAndPassword } from "./Utils/firebase";





const Login = (props) => {

    
        const navigate = useNavigate();
    

    const logGoogleUser = async()=>{
        const {user} =await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user)
        navigate('/home');
    }
    const [contact, setContact] = useState({
        email: '',
        password: ''
    })

    const {email,password} = contact

    const handleChange = (event) => {
        const { id, value } = event.target

        setContact((preValue) => {
            return {
                ...preValue,
                [id]: value,
            }
        })
    }
    const handleSubmit = async(event)=>{
        event.preventDefault();
        
        try{
            const response = await signinAuthUserWithEmailAndPassword(email,password);
            console.log(response);
            navigate('/home');

           
        }
        catch(error){
            console.log('error in login ', error.message);
            alert('Not a valid email/Password combination, please try again or Sign-up for an account')
      
        }
    }



    return (
       <div>
            <Link to="/CreateAcc">
                <button className="signup">Sign-Up</button>
            </Link>
            <br></br>
            <div className="loginitems">
                <br></br>
                <Input id='email' type="email" placeholder='Your Email' onChange={handleChange} value={contact.email} />
                <br></br>
                <Input id='password' type="Password" placeholder=' Your Password' onChange={handleChange} value={contact.password} />
                <br></br>
                <button onClick={logGoogleUser}>Log in with Google</button>
                <br></br>
                <br></br>
                <button onClick={handleSubmit} type='submit' >Submit</button>
                <br></br>
                
            </div>
        </div>)
}

export default Login




