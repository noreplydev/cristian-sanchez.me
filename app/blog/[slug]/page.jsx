import fs from 'fs'
import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'

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
        components={{
          h1: ({node, ...props}) => <h1 className={style.h1} {...props} />, 
          h2: ({node, ...props}) => <h2 className={style.h2} {...props} />,
          h3: ({node, ...props}) => <h3 className={style.h3} {...props} />,
          p: ({node, ...props}) => <p className={style.p} {...props} />,
          ul: ({node, ...props}) => <ul className={style.ul} {...props} />,
          li: ({node, ...props}) => <li className={style.li} {...props} />,
          img: ({node, ...props}) => <img className={style.img} {...props} />,
          a: ({node, ...props}) => <a className={style.a} {...props} />,
          bold: ({node, ...props}) => <strong className={style.strong} {...props} />,
          blockquote: ({node, ...props}) => <blockquote className={style.blockquote} {...props} /> 
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}