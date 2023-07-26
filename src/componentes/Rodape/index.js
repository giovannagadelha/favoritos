import React from 'react'
import styles from './Rodape.module.css'


export default function Rodape(props) { 
  
  const getCurrentDate = () => {
    const now = new Date ();
    return now.toLocaleDateString();
  };


  return (
    
    <div className={styles.rodape}>
      <h2>{getCurrentDate()}</h2>
    <img src={props.logo1}/>
    <img src={props.logo2}/>
    <img src={props.logo3}/>
    </div>

    
  )
}

