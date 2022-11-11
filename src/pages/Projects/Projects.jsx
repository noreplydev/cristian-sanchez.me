import React, { useEffect, useState } from 'react'
import { projects } from '../../data/projects'
// STYLED COMPONENTS
import {
  Parent,
  Container
} from './style'

// COMPONENTS
import { CardContent } from '../../components/Projects/CardMenu/CardContent.jsx'
import { ImageRenderer } from '../../components/Projects/ImageRenderer/ImageRenderer.jsx'

export const Projects = () => {
  const [cards, setCards] = useState([])
  const tilt = {
    maxDeg: 5, // max tilt rotation (degrees (deg))
    perspective: 1000 // perspective (px)
  }

  // Select all cards from the DOM
  useEffect(() => {
    setCards(document.querySelectorAll('.card'))
  }, [])
  console.log(cards)

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseenter', () => {
      cards[i].style.transition = 'transform .1s cubic-bezier(.03,.98,.52,.99)'
    })

    cards[i].addEventListener('mousemove', event => {
      setTimeout(() => {
        cards[i].style.transition = ''
      }, 100)

      // cards[i] sizes
      const cardWidth = cards[i].offsetWidth
      const cardHeight = cards[i].offsetHeight

      // center position
      const centerX = cards[0].offsetLeft + cardWidth / 2
      const centerY = cards[0].offsetTop + cardHeight / 2

      // mouse position
      const mouseX = event.clientX - centerX
      const mouseY = event.clientY - centerY

      // idk
      const rotateX = (+1) * (mouseY / (cardHeight / 2)) * tilt.maxDeg
      const rotateY = (-1) * (mouseX / (cardWidth / 2)) * tilt.maxDeg

      cards[i].style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    cards[i].addEventListener('mouseleave', () => {
      cards[i].style.transition = 'transform .2s ease'
      cards[i].style.transform = ''
    })
  }

  return (
    <Parent>
      {
        projects.map((project) => (
          <Container className='card' key={project.projectName}>
            <ImageRenderer image={project.image} />
          </Container>
        ))
      }
    </Parent>
  )
}
