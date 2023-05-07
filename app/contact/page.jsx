import GridLine from '@/components/global/GridLine'
import style from './contact.module.css'

export default function Contact() {
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
      <form className={style.form}>
        <input type="email" placeholder="name@acme.com" className={style.input}/>
        <textarea placeholder="Start your message here" className={style.textarea}/>
        <button className={style.send}>Send</button>
      </form> 
    </div>
  )
}