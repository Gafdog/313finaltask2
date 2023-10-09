import React from "react"

import HomePage from "./Routes/HomePage"
import { Routes,Route } from "react-router-dom"
import LoginPage from "./Routes/LoginPage"
import CreateAcc from "./Routes/CreateAcc"




function App(){
return(
    <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/CreateAcc' element={<CreateAcc />} />

    </Routes>
  
)
}

export default App