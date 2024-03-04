import React from 'react'
import {useNavigate} from 'react-router-dom'
import styles from '../styles/GoToButton.module.css'

export default function GoToButton(){
    const navigate = useNavigate()
    const handleGoHome =()=>{
        navigate('/')
      }

      return(
        <button onClick={handleGoHome} className={styles.GoToButton}>Go to Home</button>
      )
}
