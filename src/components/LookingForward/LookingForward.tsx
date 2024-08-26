import React from 'react'
import Image from 'next/image'

const LookingForward = () => {
  return (
    <>
      <div className='min-h-[80vh] bg-white text-gray-800'>
        <div className='pt-16'>
        <div className='covering-all flex items-center justify-center gap-x-4'>
          <div className='1 w-[34%] flex flex-col gap-y-12 mt-10'>
            <div>
              <h1 className='text-3xl font-extrabold w-[18rem] tracking-wide'>
                Looking to raise capital for your growth business?
              </h1>
            </div>
            <div>
              <p className='text-gray-400 font-medium text-sm w-[80%] tracking-wide'>
                Whether expanding or opening a brand new concept, we make it easy to raise money from thousands of local investors.
              </p>
            </div>         
            <div className='bg-green-700 text-gray-100 rounded-md h-10 w-36 text-xs flex items-center justify-center animate-slideIn'>
              APPLY ONLINE
            </div>          
          </div>
          <div className='2 -ml-8'>
            <Image src={'/images/2.svg'} alt='' width={350} height={350}/>
          </div>
          <div className='3 flex -mt-[10rem]'>
          <Image src={'/images/Shape.svg'} alt='' width={200} height={200}/>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default LookingForward