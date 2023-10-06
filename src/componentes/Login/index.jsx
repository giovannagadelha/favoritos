import React from 'react'
import { useState } from "react";

const Login = () => {

    const [email, setEmail]=useState("")
    const [senha, setSenha]=useState("")


  return (
    <div>Login
        <form>
        <label>Email </label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <br/>

        <label>Senha </label>
        <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
        </form>
    </div>
    
  )
}

export default Login