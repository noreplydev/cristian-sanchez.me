import fs from 'fs'
import style from './blogGrid.module.css'
import matter from 'gray-matter'
import PostCard from './PostCard.jsx'

const getPostsMetadata = () => {
  const files = fs.readdirSync('posts/') // get all the files in the posts folder
  const markdownFiles = files.filter(filename => filename.endsWith('.md')) 

  const metadata = markdownFiles.map(filename => {
    const file = fs.readFileSync(`posts/${filename}`, 'utf-8')
    const { data } = matter(file) // get the headers metada from the file

    return { slug: filename.replace('.md', ''), ...data }
  })

  return metadata
}

export default function BlogGrid () {
  const posts = getPostsMetadata()
  const mostRecentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)
  const classes = ['main', 'left', 'right']
  
  console.table(mostRecentPosts)
  return (
    <section className={style.parentContainer} >
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