'use client'

import React, { FC } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { HiMiniUsers } from "react-icons/hi2";
import Autoplay from "embla-carousel-autoplay"

const Hero: FC = ({}) => {
  return (
    <main>
      <div className='bg-blend-overlay'>
        <div className='absolute w-screen h-[40vh] md:h-[70vh] bg-zinc-950  opacity-30' />
        <Carousel
        className='-z-10'
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}>
        <CarouselContent className=''>
          <CarouselItem>
            <img src="/c5.jpeg" alt="Slide 1" className='h-[40vh] md:h-[70vh] w-screen object-cover'/>
          </CarouselItem>
          <CarouselItem>
            <img src="/c1.jpeg" alt="Slide 2" className='h-[40vh] md:h-[70vh] w-screen object-cover'/>
          </CarouselItem>
          <CarouselItem>
            <img src="/c2.jpeg" alt="Slide 3" className='h-[40vh] md:h-[70vh] w-screen object-cover'/>
          </CarouselItem>
          <CarouselItem>
            <img src="/c3.jpeg" alt="Slide 4" className='h-[40vh] md:h-[70vh] w-screen object-cover'/>
          </CarouselItem>
        </CarouselContent>
            </Carousel>
      </div>
      <div className='
      z-20 aspect-square bg-[#1f357a] m-auto translate-y-[-50%] rounded-full border-[15px] border-white
      flex justify-center items-center w-40
      md:w-52
      '>
        <HiMiniUsers color='white' className='w-24 h-24 md:h-28 md:w-28'/>
      </div>
    </main>
  )
}

export default Hero