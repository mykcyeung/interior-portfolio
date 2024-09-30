import ProjectCard from '@/components/ProjectCard'
import { residentialCard } from '@/constants'
import Link from 'next/link'

const ResidencePage = () => {
  return (
    <div className="screen">
      <div className="flex-col gap-20 justify-center flex items-center">

        <div className="font-bold mt-48 mb-20 text-2xl underline md:text-4xl">Residential Projects</div>

        {/* PROJECT CARD CONTAINER */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:w-full lg:gap-16 ">
          {residentialCard.map(project => (
          <ProjectCard
            img={project.img}
            key={project.title}
            title={project.title}
            url={project.url}
          />
          ))}
        </div>
        <Link
          href="/projects/commercial"
        className=" text-sm mb-20 hover:underline hover:text-orange duration-200">Commercial Projects</Link>
      </div>
    </div>
    // <div className='z-0 screen gap-20 flex flex-col'>
    //   {residentialCard.map(project => (
    //     <Link
    //       href={project.url}
    //       className="w-[90vw] lg:w-1/2 h-1/2 relative"
    //       key={project.title}
    //     >
    //       <ProjectCard
    //       img={project.img}
    //       key={project.title}
    //       title={project.title}
    //     />
    //     </Link>
        
    //   ))}
      
    // </div>
  )
}

export default ResidencePage