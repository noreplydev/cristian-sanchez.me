import style from './contact.module.css'

export default function Contact() {
  return (
    <div className={style.contactContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Reach me <span>anytime</span></h1>
      </div>
      <form className={style.form}>
        <input type="text" placeholder="email" />
        <textarea placeholder="message" />
      </form> 
    </div>
  )
}