import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 lg:px-8 h-screen">
      <div className="text-7xl md:text-8xl lg:text-9xl text-center font-extrabold mt-32">Interior<br/>Design</div>
      <div className="text-7xl md:text-8xl lg:text-8xl text-center lg:tracking-widest font-light">Portfolio</div>
      <Link href="/projects"
        className='hover:underline hover:text-orange duration-200'>
        see projects
      </Link>
      {/* <Link href="contact" className="left-2">Contact ↓</Link> */}
    </div>

  )
}

export default Hero