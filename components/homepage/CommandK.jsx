'use client'

import { useEffect, useState } from 'react'
import style from './commandK.module.css'

export default function CommandK() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleKeyDown = () => {
      document.addEventListener('keydown', (e) => {
        if ((e.key === 'k' && e.ctrlKey) || (e.key === 'k' && e.metaKey)) {
          e.preventDefault()
          setShow(prev => !prev)
        }
      }) 
    }

    handleKeyDown()

    return () => handleKeyDown

  }, [])
  return (
    <>
      {
        show && (
          <div className={style.background}></div>
        ) 
      }
    </>
  )
}