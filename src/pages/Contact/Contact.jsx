import React from 'react'

// STYLED COMPONENTS
import {
  Parent,
  Title,
  Subtitle,
  Row,
  Card,
  Icon
} from './style.js'

// ASSETS
import github from '../../assets/images/contact/github.png'
import linkedin from '../../assets/images/contact/linkedin.png'
import twitter from '../../assets/images/contact/twitter.svg'

export const Contact = () => {
  return (
    <Parent>
      <Title>Let's keep in touch</Title>
      <Subtitle>Don't be afraid to contact me for anything</Subtitle>
      <Row>
        <Card href='https://github.com/sanchez-cristian' target={'_blank'}>
          <Icon src={github} alt='Github icon' loading='lazy'/>
        </Card>
        <Card href='https://www.linkedin.com/in/cristian-sanchez-dev' target={'_blank'}>
          <Icon src={linkedin} alt='Linkedin icon' loading='lazy'/>
        </Card>
        <Card href='https://twitter.com/devcristians' target={'_blank'}>
          <Icon src={twitter} alt='Twitter icon' loading='lazy'/>
        </Card>
      </Row>
    </Parent>
  )
}
