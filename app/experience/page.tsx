'use client'

import Link from 'next/link'
import {motion, useScroll, useTransform} from "framer-motion"
import { skillsIcons } from '@/constants'
import Image from 'next/image'



const ExperiencePage = () => {
  const textVariant =  {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y:0 },
  }
  
  const { scrollY } = useScroll();
  // const opacityText = useTransform(scrollY, [0, 200, 500], [1, 0.9, 0.8])
  // const scaleText = useTransform(scrollY, [300, 400, 600], [1.3, 1.1, 1])
  return (
    <div className='screen'>
      <div className="mt-64 mb-20 flex flex-col justify-center items-center">
        <motion.div
          // style={{scale: opacityText}}
          className="flex flex-col justify-center items-center">
        <div className="text-6xl md:text-8xl font-bold mb-16 underline">Experience</div>
        <div className="text-xs mb-52 tracking-wide md:tracking-widest font-bold">Project Organization | 3D Visualiser | Technical Drawings</div>
        </motion.div>
        

        {/* PRO ONE */}
        {/* CONTAINER */}
        <div className=" flex flex-col max-w-[900px]">
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
            transition={{duration: 2}}
            // style={{scale: scaleText}}
          className=" flex flex-row gap-10 items-start justify-center h-auto">
          {/* LEFT */}
          <div className="text-xs w-1/3 min-w-[130px] justify-end ">Oct 2018 - May 2024 <br />| 6 years</div>
          
          {/* RIGHT */}
          <div className="">
            <div className="mb-4 font-bold text-2xl ">Designer</div>
            <div className="text-sm font-bold mb-10">Pro One design & construction Limited</div>
            <div className="md:text-sm text-xs font-extralight">
              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Analyzed client needs and preferences to determine project goals, objectives, and design solutions, ensuring tailored approaches that align with their vision.
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Led the complete drawing process, from technical drawings and renderings to modifications and final layouts, successfully completing numerous projects.
                </div>
              </div>

              <div className="flex flex-row gap-2 mb-10">
                <div className="">•</div>
                <div className="md:mb-5">
                Collaborated closely with the project leader to ensure smooth delivery of spaces on time and within budget, enhancing overall project efficiency.
                </div>
              </div>
              
            
              <div className="flex flex-col lg:flex-row gap-2 mb-6">
                <div className="font-bold  min-w-[80px]">Key Project:</div>
                <div className="">dyson, Panasonic, Rasonic, Tefal and more.</div>
                
              </div>
                <div className="flex flex-col lg:flex-row gap-1 pb-6">
                <div className="font-bold text-md mr-2">Skills:</div>
                <div className="">3Ds Max V-ray | AutoCAD | Sketch up | Adobe Suites</div>
                </div>
            </div>
            <Link href="/projects/commercial" className='font-bold hover:underline hover:text-orange duration-200'>see projects</Link>

            <div className="w-full h-[1px] bg-unselect rounded-sm mt-14"/>
          </div>
          
          </motion.div>
        

        {/* CAVEMAN */}
        {/* CONTAINER */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          transition={{duration: 2}}
          className=" flex flex-row gap-10 items-start justify-center my-20 h-auto ">
          {/* LEFT */}
          <div className="text-xs w-1/3 min-w-[130px] justify-end">Oct 2018 - Aug 2022 <br />| 3 years 11 months</div>
          
          {/* RIGHT */}
          <div className="">
            <div className="mb-4 font-bold text-2xl ">Interior Designer</div>
            <div className="text-sm font-bold mb-10">Caveman Studio Limited</div>
            <div className="md:text-sm text-xs font-extralight">
              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Completed a variety of residential and commercial projects, working closely with team members to deliver high-quality results.
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Coordinated with clients, consultants, and contractors to make sure projects were completed on time and ran smoothly.
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Managed project timelines to ensure they were finished on schedule and within budget.
                </div>
              </div>

              <div className="flex flex-row gap-2 mb-10">
                <div className="">•</div>
                <div className="md:mb-5">
                Improved communication between all parties involved, leading to better client satisfaction and smoother project management.
                </div>
              </div>
              
            
              {/* <div className="flex flex-col lg:flex-row gap-2 mb-6">
                <div className="font-bold  min-w-[80px]">Key Project:</div>
                <div className="">dyson, Panasonic, Rasonic, Tefal and more.</div>
                
              </div> */}
                <div className="flex flex-col lg:flex-row gap-1 pb-6">
                <div className="font-bold text-md mr-2">Skills:</div>
                <div className=" ">
                  Project Organization | Cost Control | Material Selection 
                  <br />3Ds Max V-ray | AutoCAD | Sketch up | Adobe Suites
                </div>
                </div>
            </div>
            <Link href="/projects/residence" className='font-bold hover:underline hover:text-orange duration-200'>see projects</Link>

            <div className="w-full h-[1px] bg-unselect rounded-sm mt-14"/>
          </div>
          
        </motion.div>


        {/* SETO */}
        {/* CONTAINER */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          transition={{duration: 2}}
          className=" flex flex-row gap-10 items-start justify-center h-auto">
          {/* LEFT */}
          <div className="text-xs w-1/3 min-w-[130px] justify-end">Apr 2017 - Sep 2018 <br />| 1 years 6 months</div>
          
          {/* RIGHT */}
          <div className="">
            <div className="mb-4 font-bold text-2xl ">Designer</div>
            <div className="text-sm font-bold mb-10">Seto Design & Construction</div>
            <div className="md:text-sm text-xs font-extralight">
              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Collaborated closely with the brand marketing team and other stakeholders to transform creative ideas into fully realised visual executions, ensuring design alignment with brand strategies across multiple commercial projects.
                </div>
              </div>

              <div className="flex flex-row gap-2 mb-10">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Contributed to the preparation of comprehensive construction documents, including detailed plans, elevations, sections, and specifications, supporting the successful delivery.
                </div>
              </div>
            
              
            
              {/* <div className="flex flex-col lg:flex-row gap-2 mb-6">
                <div className="font-bold  min-w-[80px]">Key Project:</div>
                <div className="">dyson, Panasonic, Rasonic, Tefal and more.</div>
                
              </div> */}
                <div className="flex flex-col lg:flex-row gap-1 pb-6">
                <div className="font-bold text-md mr-2">Skills:</div>
                <div className=" ">
                  AutoCAD | Adobe Suites | Exibition System |
                </div>
                </div>
            </div>
            <Link href="/projects/commercial" className='font-bold hover:underline hover:text-orange duration-200'>see projects</Link>

            <div className="w-full h-[1px] bg-unselect rounded-sm mt-14"/>
          </div>
          
        </motion.div>


        {/* WELL DESIGN */}
        {/* CONTAINER */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          transition={{duration: 2}}
          className=" flex flex-row gap-10 items-start justify-center mt-20 h-auto">
          {/* LEFT */}
          <div className="text-xs w-1/3 min-w-[130px] justify-end ">Oct 2013 - Mar 2017 <br />| 3 years 6 months</div>
          
          {/* RIGHT */}
          <div className="">
            <div className="mb-4 font-bold text-2xl ">Assistant Interior Designer</div>
            <div className="text-sm font-bold mb-10">Well Design Constrution Limited</div>
            <div className="md:text-sm text-xs font-extralight">
              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Led the preparation and delivery of interior design presentations and full sets of construction drawings, ensuring clarity and accuracy.
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Managed the sourcing of design materials and accessories, consistently delivering high-quality selections within budget.
                </div>
              </div>
            
              <div className="flex flex-row gap-2 mb-10">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Conducted regular site visits to monitor progress, ensuring that the design was implemented according to specifications, and reported updates to the Project Manager. This proactive approach helped resolve on-site issues swiftly.
                </div>
              </div>
              
            
              {/* <div className="flex flex-col lg:flex-row gap-2 mb-6">
                <div className="font-bold  min-w-[80px]">Key Project:</div>
                <div className="">dyson, Panasonic, Rasonic, Tefal and more.</div>
                
              </div> */}
                <div className="flex flex-col lg:flex-row gap-1 pb-6">
                <div className="font-bold text-md mr-2">Skills:</div>
                <div className=" ">
                  3ds Max V-ray | AutoCAD | Adobe Suites 
                </div>
                </div>
            </div>
            <Link href="/projects" className='font-bold hover:underline hover:text-orange duration-200'>see projects</Link>

            <div className="w-full h-[1px] bg-unselect rounded-sm mt-14"/>
          </div>
          
          </motion.div>
        </div>
        <div className="mt-20 w-full flex flex-col justify-center items-center rounded-md shadow-md px-4 py-12 gap-8">
          <div className="font-bold text-xl">Software Skills</div>
          <div className="grid grid-cols-4 lg:grid-cols-7 justify-center gap-10 items-center">
            {skillsIcons.map(icon => (
              <div className="flex flex-col justify-evenly items-center gap-2 hover:scale-110 duration-200" key={icon.title}>
                <Image
                  src={icon.img}
                  width={50}
                  height={50}
                  alt={icon.title}
                />
                <div className="text-xs">{ icon.title }</div>
              </div>

                
            ))}
          </div>

        </div>
        <Link
          href="/CV_Jay_2024_BW.pdf"
          download
          target='_blank'
          className='bg-gray-300 text-white px-6 py-2 rounded-full mt-12 hover:bg-orange duration-200 ease-in'
        >
          Download my CV
        </Link>
     </div>
    </div>
  )
}

export default ExperiencePage