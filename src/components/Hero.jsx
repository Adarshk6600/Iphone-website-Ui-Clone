import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
import { useState, useEffect } from 'react';

const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  const setHeroVid = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    }
    else { setHeroVid(heroVideo) }
  };

  useEffect(() => {
    window.addEventListener("resize", setHeroVid);
    return () => {
      window.removeEventListener("resize", setHeroVid)
    }
  })

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 0.8, });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 1 })
  }, [])
  return (
    <div className=' overflow-hidden w-full nav-height bg-black relative '>
      <div className=' h-5/6 w-full flex-center flex-col '>
        <p id='hero' className=' hero-title '>iPhone 15 pro</p>
        <div className=' pointer-events-none md:w-10/10 w-9/12 '>
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} />
          </video>
        </div>
      </div>
      <div id="cta" className=' flex flex-col items-center opacity-0 translate-y-20 '>
        <a href="Highlights" className='btn'>buy</a>
        <p className=' font-normal text-xl  '>From $199/month or $999</p>
      </div>
    </div>
  )
}

export default Hero
