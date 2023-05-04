import fs from 'fs'
import style from './blogGrid.module.css'
import PostCard from './PostCard.jsx'
import Image from 'next/image'
import asterisk from '@/public/assets/asterisk.svg'
import { getPostsMetadata } from '@/lib/postMetadata'
import GridLine from '../global/GridLine'

export default function BlogGrid () {
  const posts = getPostsMetadata()
  const mostRecentPosts = posts.sort((a, b) => {
    const dateA = a.date.split('-')
    const dateB = b.date.split('-')

    return new Date(dateB[2], dateB[1], dateB[0]) - new Date(dateA[2], dateA[1], dateA[0])
  }).slice(0, 3)
  const classes = ['main', 'left', 'right']
  
  return (
    <section className={style.parentContainer} >
      {/* <Image src={asterisk} alt="Background asterisk image" className={style.asterisk}/>
      <Image src={asterisk} alt="Background asterisk image" className={style.asterisk}/> */}
      <h2 className={style.title}>Blog</h2>
      <div className={style.recentsContainer}>
        <GridLine lineType={'verticalLeft'} offset='offset'/>
        <GridLine lineType={'horizontalTop'}/>
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