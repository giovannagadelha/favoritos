import React from 'react'
import { useState } from "react";

const Login = () => {

    const [email, setEmail]=useState("")
    const [senha, setSenha]=useState("")

    function validacao () {
      let usuario = JSON.parse(localStorage.getItem('usuario'))
      console.log(usuario)

      let emailCadastrado = usuario.email
      let senhaCadastrada = usuario.senha

      if (emailCadastrado === email && senhaCadastrada === senha ) {
        alert ("Login realizado com sucesso")
    
      } else {
        alert ("Email ou Senha incorretos")
        
      }

      
    }


  return (
    <div>Login
        <form>
        <label>Email </label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <br/>

        <label>Senha </label>
        <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
        <input type="button" onClick={()=>validacao()} value="login"/>
        </form>
    </div>
    
  )
}

export default Login