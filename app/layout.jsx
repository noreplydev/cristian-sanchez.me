import { Sora, Source_Code_Pro } from 'next/font/google'
import Nav from '@/components/global/Nav'
import './globals.css'
import style from './page.module.css'
import Footer from '@/components/global/Footer'

export const metadata = {
  title: 'Cristin Sánchez',
  description: 'Cristian Sánchez personal website, portfolio and blog',
}

const sora = Sora({ 
  variable: '--sora',
  subsets: ['latin'],
})

const sourceCodePro = Source_Code_Pro({ 
  variable: '--source-code-pro',
  weight: ['300', '400', '500', '600', '700'], 
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
      <body className={`${sora.variable} ${sourceCodePro.variable}`} >
        <header>
          <div className='advice'>
          🚧 This web is under construction, go to <a href="https://old.cristian-sanchez.me">old.cristian-sanchez.me</a>
          </div>
          <Nav/>
        </header>
        <div className="blur"/>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}
