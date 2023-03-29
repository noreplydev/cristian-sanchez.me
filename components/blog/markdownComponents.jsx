import CodeBlock from './CodeBlock'
import style from './markdownComponents.module.css'

export const MarkdownComponents = {
  h1: ({node, ...props}) => <h1 className={style.h1} {...props} />, 
  h2: ({node, ...props}) => <h2 className={style.h2} {...props} />,
  h3: ({node, ...props}) => <h3 className={style.h3} {...props} />,
  p: ({node, ...props}) => <p className={style.p} {...props} />,
  ul: ({node, ...props}) => <ul className={style.ul}>{props.children}</ul>,
  li: ({node, ...props}) => <li className={style.li}>{props.children}</li>,
  img: ({node, ...props}) => <img className={style.img} {...props} />,
  a: ({node, ...props}) => <a className={style.a} {...props} />,
  bold: ({node, ...props}) => <strong className={style.strong} {...props} />,
  blockquote: ({node, ...props}) => <blockquote className={style.blockquote} {...props} />, 
  pre: ({node, ...props}) => <pre className={style.pre} {...props} />,
  code: ({...props}) => props.className 
    ? <CodeBlock className={props.className}>{props.children}</CodeBlock> 
    : <code className={style.code}>{props.children}</code>
}