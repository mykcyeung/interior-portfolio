import Image from 'next/image'
import {motion} from "framer-motion"
import NextProjects from '@/components/NextProjects'

const GrandNapaPage = () => {
  return (
    <div className='screen'>
      <div className="flex justify-center items-center flex-col">
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl lg:mt-60 lg:mb-6 mt-52 mb-4">Grand Napa</div>
        <p className='text-xs mb-40'>Address: Tuen Mun | Area: 3000sqf | Year Completed: 2019</p>

        {/* HORIZONTAL LIVING */}
        <div className="flex flex-col items-center">
        <div className="">
          <Image
            src="/residence/grand_napa/napa-living.jpg"
            alt='napa living room'
            width={1500}
            height={844}
            className='w-[95vw]'
          />
        </div>
        <div className="flex flex-col mt-2 gap-8">
        {/* <p className='text-xs '>3D Rendering</p> */}
        <p className='text-xs mb-32 max-w-[500px] mt-12'>Modern living room with neutral tones, featuring a sleek white sectional sofa and a round, minimalist coffee table at the center. Large windows allow natural light to flood in, with a view of a lush garden outside. The room includes tasteful decor, such as a contemporary mustard-colored chair, creating a warm and sophisticated atmosphere.</p>
          </div>
          </div>
        
        {/* VERTICAL ENTRANCE */}
        <div className="flex flex-col items-center max-w-[500px]">
        <div className="">
          <Image
            src="/residence/grand_napa/napa-entrance.jpg"
            alt='napa entrance'
            width={1133}
            height={1700}
            className='object-contain'
          />
        </div>
        <div className="flex flex-col mt-2 gap-8">
        {/* <p className='text-xs '>3D Rendering</p> */}
        <p className='text-xs mb-32 max-w-[500px] mt-8'>A hallway with marble floors, soft lighting leads to the living room.</p>
          </div>
          </div>

        {/* HORIZONTAL LIVING */}
        <div className="flex flex-col mt-12 gap-8">

        <div className="flex flex-col items-center">
        <p className='text-xs mb-8 max-w-[500px]'>This master bedroom features a neutral color palette with modern furniture, soft lighting, and floor-to-ceiling windows that bring in natural light. The design includes a cozy bed with wooden paneling behind it. The room feels spacious, calm, and elegant.</p>
        </div>
        <div className="mb-32">
          <Image
            src="/residence/grand_napa/napa-master.jpg"
            alt='napa master bedroom'
            width={1500}
            height={844}
            className='w-[95vw]'
            />
            </div>
          {/* <p className='text-xs mt-2 mb-10'>3D Rendering</p> */}
        </div>
        {/* VERTICAL */}
        <div className="mb-32 max-w-[500px]">
          <Image
            src="/residence/grand_napa/napa-master-living.jpg"
            alt='napa master living room'
            width={1100}
            height={1500}
            className='object-contain'
          />
          {/* <p className='text-xs mt-2 mb-10'>3D Rendering</p> */}
        </div>
        <div className="mb-32 max-w-[500px]">
          <Image
            src="/residence/grand_napa/napa-walkincloset.jpg"
            alt='napa master walkin closet'
            width={1100}
            height={1500}
            className='object-contain'
          />
          {/* <p className='text-xs mt-2 mb-10'>3D Rendering</p> */}
        </div>
        
        {/* VERTICAL ENTRANCE */}
        <div className="flex flex-col justify-center items-center max-w-[500px] ">
          <div className="">
            <Image
              src="/residence/grand_napa/napa-v1.jpg"
              alt='napa entrance'
              width={1500}
              height={1100}
              className='object-contain'
            />
          </div>
 
        {/* <p className='text-xs '>3D Rendering</p> */}
          <p className='text-xs mb-32 max-w-[500px] mt-8 gap-8'>
            This side living room features a relaxing seating area, built-in shelving for storage.
          </p>
        </div>
        <NextProjects />
      </div>
      
    </div>
  )
}

export default GrandNapaPage