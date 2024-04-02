import { useState } from 'react'
import  styles from './App.module.css'

function App() {

  return (
   <div className={styles.calculator}>
      <input className={styles.display} type="text" />
      <div className={styles.buttonsContainer}>
       
      </div>
    </div>
   
  )
}

export default App
