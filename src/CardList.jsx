import React from "react"
import CardItem from './card'
import Developers from "./Devs"
import './card.css'

const CardList=()=>
{
    return <div className="row">
        {Developers.map(  (developer)=>
    <CardItem 
        key = {developer.key}
        pic = {developer.pic}
        devName = {developer.devName}
        devDesc = {developer.devDesc}
        stars = {developer.stars}/>
)}
            </div>
}
export default CardList