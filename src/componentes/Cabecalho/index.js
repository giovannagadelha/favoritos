import React from 'react'
import styles from './Cabecalho.module.css'
import { Link } from 'react-router-dom'

export default function Cabecalho(props) {
  return (
    <>
    <div className={styles.cabecalho}>
    <img className= {styles.foto} src={props.logo}/>
    <p className={styles.titulo}>{props.titulo}</p>
    <p className={`${styles.titulo} ${styles.subtitulo}`}>{props.subtitulo} </p>

    <div className= {styles.menu}>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/Login'}>Login</Link></li>
        <li><Link to={'/Cadastro'}>Cadastrar-se</Link></li>
       
        
      </ul>
    
    </div>
    


    </div>

    </>
  )
}
