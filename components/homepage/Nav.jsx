'use client'
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { sections } from "@/data/sections"

import github from '@/assets/github.png'


export default function Nav() {
  useEffect(() => {
    const setStyleOnScroll = (e) => {
      const nav = document.querySelector('nav')
      scroll = window.pageYOffset;

      if (scroll > 0) {
        nav.style.boxShadow = '0 1px 0px 0 #ececec'
      } else {
        nav.style.boxShadow = 'none'
      }
    }

    window.addEventListener('scroll', setStyleOnScroll)

    return () => {
      window.removeEventListener('scroll', setStyleOnScroll)
    }
  }, [])
  
  return (
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
  )
}