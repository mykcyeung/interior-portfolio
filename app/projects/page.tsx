"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"

const imgVariant = {
  initial: { y: 0 },
  hover: {y: -5}
}


const ProjectsPage = () => {
 
  return (
    <div className="screen">
      <div className=" flex-col gap-20 pb-20 flex justify-center items-center">
      <div className="text-4xl font-extrabold mt-32 lg:mt-32 underline lg:text-5xl">Projects</div>

      {/* COMMERCIAL */}
      <div className="flex flex-col lg:flex-row gap-14 sm:gap-20">
        <div className="flex flex-col justify-center items-center gap-3 lg:w-1/2">
            <motion.div
              variants={imgVariant}
              initial="initial"
              whileHover="hover"
              transition={{duration:0.3}}
            className=""
            // whileHover={{ y: -5 }}
            >
          <Link href="/projects/commercial">
          <Image
            src="/commercial/japanese_restaurant/japanese-restaurant-v2.jpg"
            alt='janpanese restaurant v1'
            width={800}
            height={400}
            className='object-contain'
          />
          </Link>
          </motion.div>
          
          <Link
            href="/projects/commercial"
            className="hover:underline lg:text-lg hover:text-orange duration-200 mt-2">
            Commercial
          </Link>
        </div>
      
      {/* RESIDENTIAL */}
      <div className="flex flex-col lg:flex-row gap-10 lg:w-1/2">
        <div className="flex flex-col justify-center items-center gap-3">
          <motion.div
            variants={imgVariant}
            initial="initial"
            whileHover="hover"
            transition={{duration:0.3}}
            className="">
          <Link href="/projects/residence">
          <Image
            src="/residence/grand_napa/residential-profile.jpg"
            alt='grand napa'
            width={1100}
            height={619}
            className='object-cover'
          />
          </Link>
          </motion.div>
          
          <Link
            href="/projects/residence"
            className="hover:underline hover:text-orange duration-200  lg:text-lg mt-2">
            Residential
          </Link>
        </div>
      </div>
        </div>
        </div>
      </div>
    
  )
}

export default ProjectsPage