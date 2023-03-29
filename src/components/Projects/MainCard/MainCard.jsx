import React, { useEffect, useState } from 'react'
import circle from '../../../assets/images/projects/blue-dona.svg'

// STYLED COMPONENTS
import {
  Card,
  Title,
  Desc,
  Tool,
  Blur,
  Dona
} from './style'

export const MainCard = ({ project }) => {
  const [card, setCards] = useState()
  const tilt = {
    maxDeg: 20, // max tilt rotation (degrees (deg))
    perspective: 1000 // perspective (px)
  }

  // Select all cards from the DOM
  useEffect(() => {
    setCards(document.querySelector('.card'))
  }, [])

  if (card) {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform .3s cubic-bezier(.03,.98,.52,.99)'
    })

    card.addEventListener('mousemove', event => {
      setTimeout(() => {
        card.style.transition = ''
      }, 300)

      // card size
      const a = 'hola'
      const cardWidth = card.offsetWidth
      const cardHeight = card.offsetHeight

      // center position
      const centerX = card.offsetLeft + cardWidth / 2
      const centerY = card.offsetTop + cardHeight / 2

      // mouse position
      const mouseX = event.clientX - centerX
      const mouseY = event.clientY - centerY

      // idk
      const rotateX = (+1) * (mouseY / (cardHeight * 2)) * tilt.maxDeg
      const rotateY = (-1) * (mouseX / (cardWidth * 2)) * tilt.maxDeg

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform .3s ease'
      card.style.transform = ''
    })
  }

  return (
    <Card className='card'>
      <Title href={project.link} target='_blank'>{project.name}</Title>
      <Desc>{project.description}</Desc>
      <Tool>{project.tools}</Tool>
      <Blur>
        <Dona src={circle} alt=''/>
      </Blur>
    </Card>
  )
}
