import React from 'react'
import style from './postsGrid.module.css'
import { getPostsMetadata } from '@/lib/postMetadata'

export const PostsGrid = () => {
  const data = getPostsMetadata()

  return (
    <div className={style.postsGridContainer}>
      {
        data.map(post => {
          return (
            <div className={style.postCard} key={post.slug}>
              <p className={style.topics}>{post.topics}</p>
              <h3 className={style.title}>{post.title}</h3>
              <p className={style.postDate}>{post.date}</p>
              <img src={post.banner} alt={post.title} className={style.banner} />
            </div>
          )
        })
      }      
    </div>
  )
}
