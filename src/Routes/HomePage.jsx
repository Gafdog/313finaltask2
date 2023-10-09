import React from "react"
import Image1 from '../Image'

import CardList from '../CardList'
import Header from "../Header"
import Title1 from "../Title1"
import Button from "../Button"
import CustList from '../CustList'
import MailList from '../MailList'
import Footer from "../Footer"





    
function HomePage(){
    
    return(
        <div>
        <Header />
        <Image1 />
        <Title1 txt="Featured Freelancers" />
        <br></br>
        <CardList />
        <br></br>
        <Button wording="See More" />
        <br></br>
        <Title1 txt="Featured Customers" />
        <CustList />
        <br></br>
        <Button wording="See All Customers" />
        <br></br>
        <MailList />
        <br></br>
        <Footer />
      
        
       
        </div> )
}

export default HomePage