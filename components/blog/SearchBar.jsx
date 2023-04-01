'use client'

import { PostsGrid } from '@/components/blog/PostsGrid'
import Image from "next/image"

import style from './searchBar.module.css'
import lens from '@/public/assets/lens.svg'
import { useState } from "react"

export function  SearchBar({ data, children }) {
  const [search, setSearch] = useState('')

  return (
    <>
      <div className={style.searchbarWrapper}>
        <div className={style.searchbar}>
          <Image className={style.lens} src={lens} alt="Lens icon" width={20} height={20} />
          <input 
            onChange={e => setSearch(e.target.value)}
            value={search}
            className={style.input} 
            type="text" 
            placeholder="Search" 
          />
        </div>
      </div>
      <PostsGrid data={data.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))}/> 
    </>
  )
}