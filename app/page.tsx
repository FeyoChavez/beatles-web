import { ReactLenis } from 'lenis/react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import FabFour from '@/components/FabFour'
import Clubs from '@/components/Clubs'  
import Process from '@/components/Process'
import Albums from '@/components/Albums'
import Songs from '@/components/Songs'
import LastSong from '@/components/LastSong'

export default function Home() {
  return (
    <>
    <ReactLenis root>
      <Hero/>
      <About/>
      <FabFour/>
      <Clubs/>
      <Process/>
      <Albums/>
      <Songs/>
      <LastSong/>
    </ReactLenis>
    </>
  )
}
