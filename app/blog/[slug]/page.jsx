import fs from 'fs'
import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'
import { MarkdownComponents } from '@/components/blog/markdownComponents'

import style from './page.module.css'
import Link from 'next/link'

const getPostContent = (slug) => {
  const file = fs.readFileSync(`posts/${slug}.md`, 'utf8')
  const {data, content} = matter(file)
  
  return { data, content}
}

export function generateStaticParams() {
  const params = fs.readdirSync('posts')
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filename = file.replace('.md', '')
      return { slug: filename }
    })

  return params
}


export default function Post({params}) {
  const {slug} = params
  const {data, content} = getPostContent(slug)

  return (
    <div className={style.parentContainer}>
      <Link 
        className={style.backLink}
        href='/blog'
      >👈 Go back to blog</Link>
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
      <a
        className={style.githubLink}
        href='https://github.com/sanchez-cristian/cristian-sanchez.me/tree/main/posts'
        target='_blank'
      >
        Something wrong? PR this post on Github
      </a>
    </div>
  )
}