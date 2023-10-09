import React, {useState} from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";


import './SignUp.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "./Utils/firebase";

const SignUp = (props)=>{
    
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        fName: '',
        lName: '',
        email:'',
        password: '',
        passwordConf:''
    })

    const {fName, lName, email, password, passwordConf} = contact;
    console.log(contact);
    
    const handleChange = (event)=>{
        const {id, value} = event.target

        setContact((preValue)=>{
            return{
                ...preValue,
                
                [id]:value,
                
            }
            
        })
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if (password !== passwordConf){
            alert('Passwords dont match!')
            return;
        }
       

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            
            await createUserDocFromAuth(user,{fName},{lName},{password})
            navigate('/');
            
           
        }
        catch(error){
            console.log('error in creating user ', error.message);
      
        }
    }
  
    

    

    return(

     
    <div>
        

       
        
        <br></br>
        <div className="loginitems">
        <br></br>
        <Input id = 'fName' type="text" placeholder='First Name' onChange = {handleChange} value = {contact.fName}/>
        <br></br>
        <Input id = 'lName' type="text" placeholder='Last Name' onChange = {handleChange} value = {contact.lName}/>
        <br></br>
        <Input id = 'email' type="email" placeholder='Email' onChange = {handleChange} value = {contact.email}/>
        <br></br>
        <Input id = 'password' type="password" placeholder='Password' onChange = {handleChange} value = {contact.password}/>
        <br></br>
        <Input id = 'passwordConf' type="password" placeholder='Confirm Password' onChange = {handleChange} value = {contact.passwordConf}/>
        <br></br>
        <button onClick={handleSubmit}> Sign Up</ button>
    </div></div>)
}
export default SignUp




