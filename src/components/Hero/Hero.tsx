'use client'
import React from 'react'
import Image from 'next/image';

export default function Hero() {  
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={'/images/frontPagebg.svg'}
            alt="heroBg"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src={'/images/frontPagelines.svg'}
            alt="herolines"
            width={400}
            height={600}
            className="z-10"
          />
        </div>
        <div className="absolute z-20 left-[190px] top-20">
          <Image
            src={'/images/frontPagecircle.svg'}
            alt=''
            width={380}
            height={300} />
        </div>
        <div className='relative z-30 flex flex-col gap-y-10 left-[290px] top-[180px]'>
          <div className='text-4xl font-bold tracking-[0.3rem]'>
            <div className='animate-slideIn'>Meaningful investments in</div>
            <div className='mt-1 animate-slideIn'>Main Street businesses</div>
          </div>
          <div className='font-medium text-sm tracking-wider'>
            <div className='animate-slideIn'>Browse vetted investment offerings in</div>
            <div className='mt-1 animate-slideIn'>communities all over the US.</div>
          </div>
          <div>
            <div className='bg-green-700 text-gray-100 rounded-md h-10 w-36 text-xs flex items-center justify-center animate-slideIn'>
              GET STARTED
            </div>
          </div>
        </div>
      </div>
    </>
  )
}