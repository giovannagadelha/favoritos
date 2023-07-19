import React from 'react'
import styles from './Rodape.module.css'


export default function Rodape(props) {


  return (
    <>
    <div className={styles.Rodape}>
    <img src={props.logo}/>
    <p className={styles.titulo}>{props.titulo}</p>
    <p className={styles.data}>{props.data}</p>
    
    </div>

    </>
  )
}

