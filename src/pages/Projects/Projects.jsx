import React, { useEffect, useState } from 'react'

// STYLED COMPONENTS
import { Parent, Container } from './styles'

// COMPONENTS
import { CardMenu } from '../../components/Projects/CardMenu/CardMenu.jsx'

// ASSETS
import passlock from '../../assets/images/projects/passlock.png'
import easyIP from '../../assets/images/projects/easy-ip.png'
import lorpie from '../../assets/images/projects/lorpie.png'

export const Projects = () => {
  const [cards, setCards] = useState([])
  const tilt = {
    maxDeg: 5, // max tilt rotation (degrees (deg))
    perspective: 1000 // perspective (px)
  }

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
      <Container className='card'>
        <CardMenu projectName={'Passlock'}/>
        <img src={passlock} alt='Passlock project dashboard image' />
      </Container>
      <Container className='card'>
        <CardMenu projectName={'Easy IP'}/>
        <img src={easyIP} alt='Passlock project dashboard image' />
      </Container>
      <Container className='card'>
        <CardMenu projectName={'Lorpie'}/>
        <img src={lorpie} alt='Passlock project dashboard image' />
      </Container>
    </Parent>
  )
}
