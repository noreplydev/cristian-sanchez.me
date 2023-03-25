import BlogGrid from '@/components/homepage/BlogGrid'
import style from './page.module.css'

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
    </main>
  )
}
