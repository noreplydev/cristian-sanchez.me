'use client'
import { useEffect, useState } from 'react'
import style from './twitch.module.css'

export default function Twitch() {
  useEffect(() => {
    const setStyleOnScroll = (e) => {
      const twitch = document.querySelector('iframe')
      scroll = window.pageYOffset;

      if ( twitch && window.innerWidth > 768) {
        if (scroll > 150) {
          twitch.style.display = 'block'
        } else {
          twitch.style.display = 'none'
        }
      } 
    }

    window.addEventListener('scroll', setStyleOnScroll)

    return () => {
      window.removeEventListener('scroll', setStyleOnScroll)
    }
  }, [])
  
  return (
    <iframe
      className={style.twitch}
      height="150"
      width="auto"
      src="https://player.twitch.tv/?channel=afrodeveloper&muted=true&parent=www.cristian-sanchez.me"
    >
    </iframe>
  )
}