import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

const routes = () => {
  return (
    <div>
        
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Principal/>}/>
    <Route path="/" element={<Login/>}/>
    <Route path="/" element={<Cadastro/>}/>



    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default routes