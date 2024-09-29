import React from 'react'
import Image from 'next/image'
import NextProjects from '@/components/NextProjects'

const JapaneseResturantPage = () => {
  return (
    <div className='screen'>
      <div className="flex justify-center items-center flex-col">
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl lg:mt-60 lg:mb-6 mt-52 mb-4">Japanese Restaurant</div>
        <p className='text-xs mb-40'>Address: Sheung Wan | Area: 1800sqf </p>

        {/* HORIZONTAL LIVING */}
        <div className="flex flex-col items-center">
          <p className='text-xs md:mb-32 mb-8 max-w-[500px] mt-12'>This Japanese restaurant located in Sheung Wan was designed within the client's limited budget. Although expensive materials were not used, the design still maintained a strong sense of style. The design also cleverly concealed the site's imperfections, incorporating traditional Japanese patterns to enhance the restaurant's upscale ambiance. <br />
            The entire design aligned with the client's budget, increasing their confidence in our work.</p>
        <div className="">
          <Image
            src="/commercial/japanese_restaurant/japanese-restaurant-v1.jpg"
            alt='japanese restaurant'
            width={2750}
            height={1548}
              className='w-[95vw] mb-20 md:mb-32'
              quality={100}
            />
            <Image
            src="/commercial/japanese_restaurant/japanese-restaurant-v2.jpg"
            alt='japanese restaurant'
            width={2750}
            height={1548}
              className='w-[95vw] mb-20'
              quality={100}
            />
        </div>
 
        </div>
        
      <NextProjects />
      </div>
    </div>
  )
}

export default JapaneseResturantPage