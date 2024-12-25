import { Button } from 'flowbite-react'
import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="w-[100%] bg-[url('/WebsiteImage/Header/HeaderBg.jpg')] bg-cover pb-[80px] ">
    <div className=" max-w-[1320px] mx-auto  h-[200px] text-white  " >
    <h1 className=' pt-[40px] text-center text-[30px] font-bold'>Publish your passions, your way</h1>
    <p className='mt-[20px] text-center text-[20px]'>Create a unique and beautiful blog easily.</p>
    <div className='flex justify-center mt-5 pb-3'>
    <Button className='bg-orange-500 hover:bg-violet-600 z-0'>Create Your Blog</Button>
    </div>
    <h1 className='text-center pb-6 '>Discover storytelling through our captivating blog .</h1>
    </div>
    </div>
    
    </>
  )
}
