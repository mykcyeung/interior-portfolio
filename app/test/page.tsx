import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
   
    <div className='screen flex-col lg:flex-row gap-10  bg-red-100'>
      <Image
        src="/commercial/melissa/melissa-front.jpg"
        alt='test'
        width={500}
        height={500}
        className=' h-auto w-full lg:w-1/2 object-cover bg-yellow-500'
      />
      <div className="bg-yellow-500 max-w-[300px]">
        <h1 className='text-3xl font-bold mb-3'>Welcome to StockPrices</h1>
        <p className='text-xl'>This is a simple application that allows you to search for stock prices.</p>
      </div>
    </div>
  )
}

export default page