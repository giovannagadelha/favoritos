import React from 'react'
import { useState } from "react";


const Cadastro = () => {

    const [nome, setNome]=useState("")
    const [email, setEmail]=useState("")
    const [senha, setSenha]=useState("")
    const [confirmarsenha, setConfirmarsenha]=useState("")
    


    function cadastro (nome, email, senha) { 
        let usuario = {email, nome, senha};
        localStorage.setItem("usuario", JSON.stringify (usuario));
         
    }

    function validar (senha, confirmarsenha) {
        if (senha!=confirmarsenha) {
            alert('senha incorreta!')
        }
        else{
            cadastro(email, nome, senha)
        }
    }


  return (

    <div> Faça seu cadastro!
    
    <form>
        <label> Nome </label>
        <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>

        <br/>

        <label>Email </label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <br/>

        <label>Senha </label>
        <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>

        <br/>

        <label>Confirmar Senha </label>
        <input type="password" value={confirmarsenha} onChange={(e)=>setConfirmarsenha(e.target.value)}/>
        
        <input type="button"  onClick={()=>validar(senha, confirmarsenha)} value="Cadastrar" />



    </form>


    </div>
  )
}

export default Cadastro