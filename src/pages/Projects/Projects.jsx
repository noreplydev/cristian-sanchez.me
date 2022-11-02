import React, { useEffect, useState } from 'react'

// STYLED COMPONENTS
import { Parent, Container } from './styles'

// ASSETS
import passlock from '../../assets/images/passlock.png'

export const Projects = () => {
  const [card, setCard] = useState()
  const tilt = {
    maxDeg: 5, // max tilt rotation (degrees (deg))
    perspective: 1000 // perspective (px)
  }

  useEffect(() => {
    setCard(document.querySelector('.card'))
  }, [card])
  console.log(card)

  if (card) {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform .1s cubic-bezier(.03,.98,.52,.99)'
    })

    card.addEventListener('mousemove', event => {
      setTimeout(() => {
        card.style.transition = ''
      }, 100)

      // card sizes
      const cardWidth = card.offsetWidth
      const cardHeight = card.offsetHeight

      // center position
      const centerX = card.offsetLeft + cardWidth / 2
      const centerY = card.offsetTop + cardHeight / 2

      // mouse position
      const mouseX = event.clientX - centerX
      const mouseY = event.clientY - centerY

      // idk
      const rotateX = (+1) * (mouseY / (cardHeight / 2)) * tilt.maxDeg
      const rotateY = (-1) * (mouseX / (cardWidth / 2)) * tilt.maxDeg

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform .2s ease'
      card.style.transform = ''
    })
  }

  return (
    <Parent>
        <Container className='card'>
            <img src={passlock} alt='Passlock project dashboard image' />
        </Container>
    </Parent>
  )
}
