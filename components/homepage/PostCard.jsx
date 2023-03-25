import style from './postCard.module.css'

export default function PostCard ({ className, post }) {
  console.log(className)
  console.log(style[className])
  return (
    <div className={`${style[className]} ${style.card}`}>
      <h3 className={style.title}>{post.title}</h3>
      <p className={style.topics}>{post.topics}</p>
      <img className={style.banner} src={post.banner} alt={post.title}/>
      <p className={style.date}>{post.date}</p>
    </div> 
  )
}