import React from "react";
import { useState } from "react";
import styles from './Conteudo.module.css'

const Conteudo = () => {

  const [nome, setNome]=useState("google")
    const [url, setUrl]=useState("https://www.google.com")
    const [favoritos, setFavoritos]=useState([])
    


    function adicionarFavorito(){
        setFavoritos([...favoritos,{nome,url}]) 
        localStorage.setItem ("favorito", JSON.stringify (favoritos))
        console.log(favoritos)
    
    }

    function handleInput(valor){
        setNome(valor)

    }
    return(

        <div className={styles.area}>

 
            <form className={styles.formulario}>    
        
            <h1>{nome}</h1>
            <label> Nome do Site </label>
            <input type="text" value={nome} onChange={(e)=>handleInput(e.target.value)} />
            <br />
             
            <h1>{url}</h1>
            <label> Url </label>
            <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)} />

            <input type="button" onClick={()=>adicionarFavorito()} value="Adicionar"/>

    <ul>
      {favoritos[0]!=undefined &&
        favoritos.map((favorito) => (
          <li>{favorito.nome} : {favorito.url}</li>
        ))}
      </ul>   
            </form>
        </div>
    );
};
export default Conteudo;