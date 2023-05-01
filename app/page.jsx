import BlogGrid from '@/components/homepage/BlogGrid'
import style from './page.module.css'
import { Projects } from '@/components/homepage/Projects'
import Twitch from '@/components/homepage/Twitch'

export default function Home() {
  return (
    <main className={style.mainContainer}>
      <section className={style.firstSection}>
        <h1 className={style.title}>Cristian Sánchez</h1>
        <h2 className={style.subtitle}>Software developer</h2>
        <div className={style.grid}>
        <div className={style.overlay}></div>
          {
            [...Array(234)].map((_, i) => {
              return <div className={style.item} key={i}></div>
            })
          }
        </div>
      </section> 
      <BlogGrid/>
      {/* <Projects/> */}
      <Twitch/>
    </main>
  )
}
