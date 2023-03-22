import { sections } from '@/data/sections'
import Link from 'next/link'

import { Sora } from 'next/font/google'
import './globals.css'

import github from '@/assets/github.png'
import Image from 'next/image'

export const metadata = {
  title: 'Cristin Sánchez',
  description: 'Cristian Sánchez personal website, portfolio and blog',
}

const sora = Sora({ 
  variable: '--sora',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={sora.variable} >
        <header>
          <nav>
            <Image src={github} className='github'  alt="github" />
            <ul>
              {
                sections.map((section) => {
                  return (
                    <li key={section.name}>
                      <Link href={section.path}>{section.name}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
