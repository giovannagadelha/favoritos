import React from 'react'
import styles from './Cabecalho.module.css'

export default function Cabecalho(props) {
  return (
    <>
    <div className={styles.cabecalho}>
    <img className= {styles.foto} src={props.logo}/>
    <p className={styles.titulo}>{props.titulo}</p>
    <p className={`${styles.titulo} ${styles.subtitulo}`}>{props.subtitulo} </p>

    <div className= {styles.menu}>
      <ul>
        <li>Cadastrar-se</li>
        <li>Login</li>
        <li>Sobre</li>
        
      </ul>
    
    </div>
    


    </div>

    </>
  )
}
