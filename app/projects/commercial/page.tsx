import ProjectCard from "@/components/ProjectCard"
import { commercialCard } from "@/constants"
import Link from "next/link"

const CommercialPage = () => {
  return (
    <div className="screen">
      <div className="flex-col gap-20 justify-center flex items-center">

        <div className="font-bold mt-48 mb-20 text-2xl underline md:text-4xl">Commercial Projects</div>

        {/* PROJECT CARD CONTAINER */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:w-full lg:gap-16 ">
          {commercialCard.map(project => (
          <ProjectCard
            img={project.img}
            key={project.title}
            title={project.title}
            url={project.url}
          />
          ))}
        </div>
        <Link
          href="/projects/residence"
        className="text-sm mb-20 hover:underline hover:text-orange duration-200">Residential Projects</Link>
      </div>
    </div>
  )
}

export default CommercialPage