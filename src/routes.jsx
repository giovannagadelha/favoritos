import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './paginas/Principal';
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';

const Rotas = () => {
  return (
    <div>
        
    <BrowserRouter>
    <Cabecalho logo="fav3.png" titulo= "Favoritos" subtitulo="o melhor gerenciador de favoritos" menu="menu ilustrativo"/>

    <Routes>
    <Route path="/" element={<Principal/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Cadastro" element={<Cadastro/>}/>
    </Routes>
    <Rodape logo1="whats.png" logo2="twitter.png" logo3="face.png" logo4="insta.png" />
    </BrowserRouter>
    
    </div>
  )
}

export default Rotas;