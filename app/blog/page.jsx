import fs from 'fs'

export function getStaticParams() {
  const files = fs.readdirSync('posts')

  const slugs = files.map(filename => filename.replace('.md', ''))
  return slugs.map(slug => {slug})
}


export default function Blog () {
  return (
    <div>Blog</div>
  )
}
