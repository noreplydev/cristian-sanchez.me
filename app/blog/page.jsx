import fs from 'fs'

export function generateStaticParams() {
  const files = fs.readdirSync('posts')

  const slugs = files.map(filename => filename.replace('.md', ''))
  return slugs.map(slug => {slug})
}

export const dynamicParams = false // true if you want to generate params dynamically otherwise 404

export default function Blog () {
  return (
    <div>Blog</div>
  )
}
