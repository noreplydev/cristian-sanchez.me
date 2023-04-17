import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export const getPostsMetadata = () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts')) // get all the files in the posts folder
  const markdownFiles = files.filter(filename => filename.endsWith('.md')) 

  const metadata = markdownFiles.map(filename => {
    const file = fs.readFileSync(`posts/${filename}`, 'utf-8')
    const { data } = matter(file) // get the headers metada from the file

    return { slug: filename.replace('.md', ''), ...data }
  })

  return metadata
}