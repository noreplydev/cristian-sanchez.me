import style from './markdownComponents.module.css'

const Code = ({className, ...props}) => {
  const filename = className.split('-')[1] // get the filename from the className 

  return (
    <pre>
      <div className={style.codeTopBar}>
        <div></div>
        <p>{filename}</p>
      </div>
      <div className={style.codeWrapper}>
        <code className={style.code}>{props.children}</code>
      </div> 
    </pre>
  )
}

export const MarkdownComponents = {
  h1: ({node, ...props}) => <h1 className={style.h1} {...props} />, 
  h2: ({node, ...props}) => <h2 className={style.h2} {...props} />,
  h3: ({node, ...props}) => <h3 className={style.h3} {...props} />,
  p: ({node, ...props}) => <p className={style.p} {...props} />,
  ul: ({node, ...props}) => <ul className={style.ul} {...props} />,
  li: ({node, ...props}) => <li className={style.li} {...props} />,
  img: ({node, ...props}) => <img className={style.img} {...props} />,
  a: ({node, ...props}) => <a className={style.a} {...props} />,
  bold: ({node, ...props}) => <strong className={style.strong} {...props} />,
  blockquote: ({node, ...props}) => <blockquote className={style.blockquote} {...props} />, 
  pre: ({node, ...props}) => <pre className={style.pre} {...props} />,
  code: ({...props}) => <Code {...props} />,
}