import React from "react"
import './Header.css'
import {Link} from "react-router-dom"


function Header (props)
{
    return (
        <div className="header-div">

        <span className='title' >Devlink Marketplace</span> 
        
        <Link className='links' to='/CreateAcc'>Create Account</Link>
        <Link className='links' to='/'>Login</Link>
        <a href="https://ontrack.deakin.edu.au/#/projects/70471/dashboard/7.1P" className='links'>Find Jobs</a>
        <a href="https://ontrack.deakin.edu.au/#/projects/70471/dashboard/7.1P" className='links'>Find DEV</a>
        
        
        
        <br></br>
        </div>
        )

}

export default Header