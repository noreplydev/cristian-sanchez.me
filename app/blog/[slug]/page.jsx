import fs from 'fs'
import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'
import { MarkdownComponents } from '@/components/blog/markdownComponents'

import style from './page.module.css'

const getPostContent = (slug) => {
  const file = fs.readFileSync(`posts/${slug}.md`, 'utf8')
  const {data, content} = matter(file)
  
  return { data, content}
}

export default function Post(props) {
  const slug = props.params.slug
  const {data, content} = getPostContent(slug)
  return (
    <div className={style.parentContainer}>
      <h1 className={style.title}>{data.title}</h1>
      <div className={style.detailsContainer}>
        <p>{data.topics}</p>
        <p>{data.date}</p>
      </div> 
      <ReactMarkdown 
        components={MarkdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}