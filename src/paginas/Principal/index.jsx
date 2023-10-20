import React from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import Rodape from '../../componentes/Rodape'
import Cadastro from '../../paginas/Cadastro'
import Conteudo from '../../componentes/Conteudo';
import Login from '../../paginas/Login';


const Principal = () => {

  return (
    <div>

    
    {/*nosso cabecalho tem uma propriedade chamada titulo*/}
    <Cabecalho logo="fav3.png" titulo= "Favoritos" subtitulo="o melhor gerenciador de favoritos" menu="menu ilustrativo"/>
    {/*<Conteudo/>*/}
    <Cadastro/>
    <Login/>
    <Rodape logo1="whats.png" logo2="twitter.png" logo3="face.png" logo4="insta.png" />
    </div>
    
  )
}

export default Principal