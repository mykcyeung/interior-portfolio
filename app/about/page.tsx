'use client'

import { about } from '@/constants'
import { motion } from "framer-motion"
import Link from 'next/link'

const textVariant =  {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y:0 },
}

const AboutPage = () => {
  return (
    <div className='screen'>
      <div className="mt-60 mb-20 max-w-[70vw] justify-center items-center flex flex-col">
        <div className="">
        {/* ABOUT ME */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
          viewport={{once: true}}
          className="flex flex-col h-[70vh] "
        >
        <div className="font-bold text-4xl md:text-6xl mb-6 lg:mb-12 underline">About me</div>
        <p className="mb-20">
          Originally from Hong Kong, and based in <span className='font-bold '>London</span> now. <br/><br/>
          As an experienced interior designer with nearly 10 years of working experience in commercial and residential projects. Throughout my career, I have developed a deep passion for creating functional spaces that enhance the lives of individuals and businesses. Passionate about continuous learning and professional growth, currently expanding skills in programming and new design technologies.
        </p>
        </motion.div>
        
        {/* MY JOURNEY */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          transition={{duration: 2}}
          className="flex flex-col mb-20 h-[80vh] "
        >
          <div className="font-bold text-4xl md:text-6xl mb-6 lg:mb-16 underline">My Journey</div>
          <p>I started my career at a small company that mostly worked on residential projects, where I built my skills and developed a good eye for design. Wanting to learn more, I moved to another company that introduced me to commercial projects for the first time.
            <br />
            <br />
          My journey continued when I joined a firm that worked on both commercial and residential projects. There, I learned how to manage projects from start to finish, which taught me the importance of being organized and planning carefully.
          <br />
          <br />
          Most recently, I returned to a company focused on commercial projects, working with well-known brands like dyson. This has helped me improve my skills and be part of exciting, high-profile projects in the industry.</p>
        </motion.div>
        
        {/* NOW FUTURE */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          transition={{duration: 2}}
          className="flex flex-col my-20 h-auto"
        >
          <div className="font-bold text-4xl md:text-6xl mb-8 lg:mb-16 underline">Now and Future</div>
          <p>I am passionate about creating functional and beautiful spaces that meet the needs of clients.
            <br />
            <br />
            With a strong foundation in both residential and commercial projects, I am excited to continue my journey in the design industry while also expanding my skills in programming.
            <br />
            <br />
            I believe in lifelong learning and am eager to tackle new challenges beyond the interior design field, looking forward to collaborating with others and making a positive impact through my work.</p>
          </motion.div>
          </div>
        <Link
          href="/experience"
        className=" text-sm mb-2 hover:underline hover:text-orange duration-200">see my experience</Link>
      </div>
    </div>
  )
}

export default AboutPage