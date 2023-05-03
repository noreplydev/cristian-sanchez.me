import BlogGrid from '@/components/homepage/BlogGrid'
import style from './page.module.css'
import { Projects } from '@/components/homepage/Projects'
import Twitch from '@/components/homepage/Twitch'
import CommandK from '@/components/homepage/CommandK'

export default function Home() {
  return (
    <main className={style.mainContainer}>
      <CommandK/>
      <section className={style.firstSection}>
        <div className={style.titleContainer}>
          <div className={style.gridLineVertical}></div>
          <div className={style.gridLineVerticalRight}></div>
          <div className={style.gridLineHorizontal}></div>
          <div className={style.gridLineHorizontalBottom}></div>
          <h1 className={style.title}>Cristian Sánchez</h1>
          <div className={style.subtitleInlineContainer}>
            <button className={style.subtitle}>Software developer</button>
            <button className={style.subtitle}>⌘k</button>
          </div>
        </div> 
      </section> 
      <BlogGrid/>
      {/* <Projects/> */}
      <Twitch/>
    </main>
  )
}
