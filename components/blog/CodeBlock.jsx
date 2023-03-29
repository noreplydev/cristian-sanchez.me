'use client'

import style from './markdownComponents.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


export default  function CodeBlock ({ ...props }) {
  const language = props.className ? props.className.replace('language-', '') : ''

  return (
    <SyntaxHighlighter 
      language={language} 
      style={vs2015} 
      codeTagProps={{ className: style.code }}
      customStyle={{ 
        backgroundColor: 'transparent',  
        padding: '25px'
      }}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};