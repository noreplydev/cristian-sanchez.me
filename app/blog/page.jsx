import Image from 'next/image'
import style from './blog.module.css'
import lens from '@/public/assets/lens.svg'
import { PostsGrid } from '@/components/blog/PostsGrid'

export default function Blog () {
  return (
    <div className={style.blogParent}>
      <h1 className={style.title}>Your dev <span>Blog</span></h1>
      <div className={style.searchbarWrapper}>
        <div className={style.searchbar}>
          <Image className={style.lens} src={lens} alt="Lens icon" width={20} height={20} />
          <input className={style.input} type="text" placeholder="Search" />
        </div>
      </div>
      <PostsGrid/> 
    </div>
  )
}
