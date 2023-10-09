import React from "react"
import CardItem from './card'
import Customers from "./Cust"
import './card.css'

const CustList=()=>
{
    return <div className="row">
        {Customers.map(  (Customers)=>
    <CardItem 
        key = {Customers.key}
        pic = {Customers.pic}
        devName = {Customers.devName}
        devDesc = {Customers.devDesc}
        stars = {Customers.stars}/>
)}
            </div>
}
export default CustList