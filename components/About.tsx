'use client'

import Link from 'next/link'
import { motion } from "framer-motion"

const textVariant =  {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y:0 },
}

const About = () => {
  return (
    <div className='screen'>
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        viewport={{once: true}}
        className="mt-48 mb-20 flex flex-col justify-center items-center my-20 ">
        <div className="font-bold text-4xl mb-12 lg:text-6xl lg:mb-20 md:text-5xl underline">About me</div>
        <div className="text-center flex justify-center flex-col">
          <p className='mb-12'>
            Originally from Hong Kong, and based in 
            <span className='font-bold '> London</span> now.
          </p> 
          
          <p className='max-w-[700px] text-start'>
          As an experienced interior designer with nearly 10 years of working experience in commercial and residential projects. Throughout my career, I have developed a deep passion for creating functional spaces that enhance the lives of individuals and businesses. Passionate about continuous learning and professional growth, currently expanding skills in programming and new design technologies.
          </p>
          
        </div>
        <Link href="/about" className="hover:text-orange hover:underline text-sm mt-20 duration-200">more about me </Link>
      </motion.div>
    </div>
  )
}

export default About