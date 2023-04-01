import style from './blog.module.css'
import { SearchBar } from '@/components/blog/SearchBar'
import { getPostsMetadata } from '@/lib/postMetadata'

export default async function BlogPage() {
  const data = getPostsMetadata()

  return (
    <div className={style.blogParent}>
      <h1 className={style.title}>Your dev <span>Blog</span></h1>
      <SearchBar data={data}/> {/*Client component*/}  
    </div>
  )
}
