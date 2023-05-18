import GridLine from '@/components/global/GridLine'
import style from './contact.module.css'

//social icons
import github from '@/public/assets/social/github.webp'
import linkedin from '@/public/assets/social/linkedin.webp'
import twitter from '@/public/assets/social/twitter.webp'
import Image from 'next/image'

export default function Contact() {
  const email = 'contact.cristiansanchez@gmail.com'

  return (
    <div className={style.contactContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Reach me <span>anytime</span></h1>
        <div className={style.horizontalLine}>
          <GridLine lineType='horizontal' position='topLeft'/>
        </div>
        <GridLine lineType='horizontal' position='bottomLeft'/>
        <div className={style.verticalLines}>
          <GridLine lineType='vertical' position='topLeft' offset='offsetBottom'/>
          <GridLine lineType='vertical' position='topRight' offset='offsetBottom'/>
        </div>
      </div>
      <div className={style.socialImages}>
        <a href='https://github.com/noreplydev' target='_blank'>
          <Image src={github} alt='github' className={style.socialImage}/>
        </a>
        <a href='https://linkedin.com/in/cristian-sanchez-dev' target='_blank'>
          <Image src={linkedin} alt='linkedin' className={style.socialImage}/>
        </a>
        <a href='https://twitter.com/noreplydev' target='_blank'>
          <Image src={twitter} alt='twitter' className={style.socialImage}/>
        </a>
      </div>
      <form className={style.form}>
        <input 
          type="email" 
          value={email}
          className={style.input}
          readOnly
        />
      </form>
    </div>
  )
}