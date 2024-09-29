import React from 'react'
import Link from 'next/link'

interface NextProjectsProps {
  path?: string;
}

const NextProjects = ({path}: NextProjectsProps) => {
  return (
    <div className='flex justify-center w-full mb-20 text-sm'>
      {/* <Link href="/" className="hover:underline">← Previous Projects</Link>
      <Link href="/" className="hover:underline">Next Projects →</Link> */}
      <Link href={`/projects`} className="hover:underline hover:text-orange duration-200">More Projects</Link>
    </div>
  )
}

export default NextProjects