'use client'

import Link from 'next/link'
import style from './postsGrid.module.css'

export function PostsGrid({data}) {

  return (
    <div className={style.postsGridContainer}>
      {
        data.map(post => {
          return (
            <Link href={'/blog/'+post.slug} key={post.slug}>
              <div className={style.postCard} >
                <p className={style.topics}>{post.topics}</p>
                <h3 className={style.title}>{post.title}</h3>
                <p className={style.postDate}>{post.date}</p>
                <img src={post.banner} alt={post.title} className={style.banner} />
              </div>
            </Link>
          )
        })
      }      
    </div>
  )
}
