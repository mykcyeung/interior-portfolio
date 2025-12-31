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
        

        
        
        
        {/* CONTAINER */}
        <div className=" flex flex-col max-w-[900px]">

          {/* Cochrane */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          transition={{duration: 2}}
          className=" flex flex-row gap-10 items-start justify-center my-20 h-auto ">
          {/* LEFT */}
          <div className="text-xs w-1/3 min-w-[130px] justify-end">Jul 2025 - Present <br />| 3 years 11 months</div>
          
          {/* RIGHT */}
          <div className="">
            <div className="mb-4 font-bold text-2xl ">Design Technician</div>
            <div className="text-sm font-bold mb-10">Cochrane Design London</div>
            <div className="md:text-sm text-xs font-extralight">
              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Produced accurate 2D CAD drawings including plans, elevations, sections, and construction details using AutoCAD.
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Prepared technical drawing packages for design development, planning, and construction stages.
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Created 3D models and visualisations using SketchUp to support design presentation and client understanding.
                </div>
                </div>
                
                <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Generated rendered views, perspectives, and walkthrough videos to help clients visualise spatial layouts, materials, and finishes,
reducing design turnaround time and accelerating client approval processes.
                </div>
                </div>
                
                <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Updated and revised drawings in response to client feedback, design changes, and site requirements.
                </div>
              </div>

              <div className="flex flex-row gap-2 mb-10">
                <div className="">•</div>
                <div className="md:mb-5">
                Proposed material selections to clearly communicate design concepts and improve client understanding and decision-making.
                </div>
                </div>
                
              
            
              {/* <div className="flex flex-col lg:flex-row gap-2 mb-6">
                <div className="font-bold  min-w-[80px]">Key Project:</div>
                <div className="">dyson, Panasonic, Rasonic, Tefal and more.</div>
                
              </div> */}
                <div className="flex flex-col lg:flex-row gap-1 pb-6">
                <div className="font-bold text-md mr-2">Skills:</div>
                <div className=" ">
                  <br /> AutoCAD | Sketch up | Enscape | Adobe Suites | Material Selection
                </div>
                </div>
            </div>
            <Link href="/projects/residence" className='font-bold hover:underline hover:text-orange duration-200'>see projects</Link>

            <div className="w-full h-[1px] bg-unselect rounded-sm mt-14"/>
          </div>
          
        </motion.div>

          
          {/* PRO ONE */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
            transition={{duration: 2}}
            // style={{scale: scaleText}}
          className=" flex flex-row gap-10 items-start justify-center h-auto">
          {/* LEFT */}
          <div className="text-xs w-1/3 min-w-[130px] justify-end ">Oct 2018 - Aug 2024 <br />| 5 years 10 months</div>
          
          {/* RIGHT */}
          <div className="">
            <div className="mb-4 font-bold text-2xl ">3D Renderer and Designer</div>
            <div className="text-sm font-bold mb-10">Pro One design & construction Limited</div>
            <div className="md:text-sm text-xs font-extralight">
              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Handled FF&E procurement, and installation, ensuring quality and consistency across projects.
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Communicate and cooperate closely with project leader to ensure smooth delivery of space on time and on budget.
                </div>
                </div>
                
                <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Created clear, detailed drawing packages covering everything from technical plans to final layouts, including accurate renderings and adjustments. These thorough drawings boosted installation efficiency and reduced misunderstandings, helping projects run smoothly and on schedule.
                </div>
              </div>

              <div className="flex flex-row gap-2 mb-10">
                <div className="">•</div>
                <div className="md:mb-5">
                Developed a bespoke design concept for brands, elevating the brand's retail presence and improving customer engagement.
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
                Completed a wide range of projects with working team, including residential and commercial projects.
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Coordinated with clients, consultants, and contractors to ensure timely project execution that met business requirements.
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Conducted site visits to monitor progress and ensure adherence to design specifications.
                </div>
                </div>
                
                <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Managed projects to completion ahead of deadlines, providing clear instructions and detailed drawings that cut project delays. This approach helped streamline the work process and kept everyone aligned, ensuring smooth progress and timely delivery.
                </div>
                </div>
                
                <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Improved project efficiency by providing clear instructions and detailed drawings, reducing delays and ensuring smooth execution.
                </div>
              </div>

              <div className="flex flex-row gap-2 mb-10">
                <div className="">•</div>
                <div className="md:mb-5">
                Strengthened client relationships through effective collaboration, aligning project outcomes with client expectation.
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
                Cooperate with brand marketing team and related parties to develop the creative ideas to visual execution.
                </div>
                </div>
                
              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Created clear construction drawings that helped improve collaboration with other designers. By providing these detailed drawings, ensured that all team members were aligned, leading to a smoother workflow throughout the project.
                </div>
              </div>

              <div className="flex flex-row gap-2 mb-10">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Produced compelling visual concepts for interior spaces, utilizing design software such as AutoCAD and SketchUp, which enhanced clarity and precision in project visualizations.
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
                Managed interior design presentations and produced comprehensive construction drawings, delivering clear visuals and detailed plans that aligned with client expectations.
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Led sourcing for materials and accessories, carefully selecting items that aligned with project aesthetics, budget, and quality standards.
                </div>
                </div>
            
              <div className="flex flex-row gap-2 mb-10">
                <div className="">•</div>
                <div className="mb-3 md:mb-5">
                Conducted regular site visits to monitor progress and provided updates to the Project Manager, ensuring alignment with design specifications and timelines.
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
          <div className="grid grid-cols-4 lg:grid-cols-8 justify-center gap-10 items-center">
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
          href="/Jay-Resume-InteriorDesign.pdf"
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