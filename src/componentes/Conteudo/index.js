import React from "react";
import { useState } from "react";
import styles from './Conteudo.module.css'

const Conteudo = () => {

  const [nome, setNome]=useState("google")
    const [url, setUrl]=useState("https://www.google.com")
    const [favoritos, setFavoritos]=useState([])



    function adicionarFavorito(){
        setFavoritos([...favoritos,{nome,url}]) 
        localStorage.setItem ("favorito", {nome,url})
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

            <input type="button" onClick={()=>adicionarFavorito(nome,url)} value="Adicionar"/>
        
            <ul>
            { favoritos.map( (fav) => <li key={fav.url}>{ fav.nome } <br />{ fav.url }</li>) }
            </ul>
            </form>
        </div>
    );
};
export default Conteudo;