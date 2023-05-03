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

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [show])

  return (
    <>
      {
        show && (
          <div className={style.background} onClick={() => setShow(prev => !prev)}>
            <div className={style.container} onClick={(e) => e.stopPropagation()}>
              <div className={style.header}>
                <input type="text" placeholder="Search" /> 
              </div>
            </div>
          </div>
        ) 
      }
    </>
  )
}