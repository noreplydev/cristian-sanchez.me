import fs from 'fs'
import style from './blogGrid.module.css'
import PostCard from './PostCard.jsx'
import Image from 'next/image'
import asterisk from '@/public/assets/asterisk.svg'
import { getPostsMetadata } from '@/lib/postMetadata'

export default function BlogGrid () {
  const posts = getPostsMetadata()
  const mostRecentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)
  const classes = ['main', 'left', 'right']
  
  return (
    <section className={style.parentContainer} >
      <Image src={asterisk} alt="Background asterisk image" className={style.asterisk}/>
      <Image src={asterisk} alt="Background asterisk image" className={style.asterisk}/>
      <h2 className={style.title}>Blog</h2>
      <div className={style.recentsContainer}>
        {
          mostRecentPosts.map((post, index) => {
            return (
              <PostCard className={classes[index]} post={post} key={post.slug}/>
            )
          })
        }
      </div>
    </section>
  )
}