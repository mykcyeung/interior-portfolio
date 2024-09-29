import NextProjects from "@/components/NextProjects"
import Image from "next/image"
import { residentialCard } from "@/constants"

const ParkAvenuePage = () => {
  return (
    <div className='screen'>
      <div className="flex justify-center items-center flex-col">
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl lg:mt-60 lg:mb-6 mt-48 mb-4">Park Avenue</div>
        <p className='text-xs mb-40'>Address: Mong Kok | Area: 1000sqf | Year Completed: 2022</p>

        {/* HORIZONTAL LIVING */}
        <div className="flex flex-col items-center">
        <p className='text-xs md:mb-32 mb-8 max-w-[500px] mt-12'>This 1000sqf apartment located in Mong Kok integrates materials and colors that complement the furniture and lighting chosen by the homeowner, along with some of their personal preferences. The design is a blend of the designer&apos;s minimalist style and the homeowner&apos;s personal design tastes, creating a distinctive unit at Park Avenue.</p>
        <div className="">
          <Image
            src="/residence/park_avenue/park-avenue-dinning.jpg"
            alt='park avenue dining'
            width={2530}
            height={1423}
              className='w-[95vw]'
              quality={100}
          />
        </div>
        <div className="flex flex-col mt-2 gap-8">
        {/* <p className='text-xs '>3D Rendering</p> */}
        <p className='text-xs md:mb-32 mb-20 max-w-[500px] mt-4'>This dining and living area showcases a modern design with neutral tones, minimalistic pendant lights above the table, and integrated cabinetry for a seamless look, complemented by open shelving and decor that add warmth and texture.</p>
          </div>
        </div>
        
        {/* HORIZONTAL KITCHEN */}
        <div className="flex flex-col items-center">
        <div className="">
          <Image
            src="/residence/park_avenue/park-avenue-kitchen.jpg"
            alt='park avenue kitchen'
            width={2530}
            height={1423}
              className='w-[95vw]'
              quality={100}
          />
          </div>
          
        <div className="flex flex-col mt-2 gap-8">
        {/* <p className='text-xs '>3D Rendering</p> */}
        <p className='text-xs md:mb-32 mb-20 max-w-[500px] mt-4'>This compact kitchen features a clean, modern design integrated appliances, and a functional layout that maximizes the use of space.</p>
          </div>
          <Image
            src="/residence/park_avenue/park-avenue-09.png"
            alt='park avenue kitchen'
            width={1600}
            height={1280}
              className='lg:w-[70vw]'
              quality={100}
          />
          <p className='text-xs md:mb-32 mb-20 max-w-[500px] mt-4'>In addition to floor plans and elevation drawings,  also create isometric drawings, which not only provide clearer and more intuitive visuals but also help clients better understand the construction structure of custom furniture. This also reduces errors during installation.</p>
          </div>
        
        {/* HORIZONTAL BEDROOM */}
        <div className="flex flex-col mt-12 gap-8">

        <div className="flex flex-col items-center">
        {/* <p className='text-xs mb-8 max-w-[500px]'>This master bedroom features a neutral color palette with modern furniture, soft lighting, and floor-to-ceiling windows that bring in natural light. The design includes a cozy bed with wooden paneling behind it. The room feels spacious, calm, and elegant.</p> */}
        </div>
        <div className="md:mb-32 mb-2">
          <Image
            src="/residence/park_avenue/park-avenue-bedroom1.jpg"
            alt='park avenue bedroom 1'
            width={2530}
            height={1423}
            className='w-[95vw] md:mb-32 mb-12'
            />
            <Image
            src="/residence/park_avenue/park-avenue-bedroom2.jpg"
            alt='park avenue bedroom 2'
            width={2530}
            height={1423}
            className='w-[95vw]'
            />
          </div>
          <div className="flex flex-row justify-center items-center">
          <Image
            src="/residence/park_avenue/park-avenue-10.png"
            alt='park avenue bedroom 1'
            width={1600}
            height={1280}
              className='w-[50vw]'
              quality={100}
            />
            <Image
            src="/residence/park_avenue/park-avenue-11.png"
            alt='park avenue bedroom'
            width={1600}
            height={1280}
              className='w-[50vw]'
              quality={100}
          />
          </div>
          {/* <p className='text-xs mt-2 mb-10'>3D Rendering</p> */}
        </div>
        
        {/* HORIZONTAL MASTER */}
        <div className="flex flex-col mt-24 md:mt-48 gap-8">

          <div className="flex flex-col items-center">
            
        
        </div>
        <div className="md:mb-32 mb-20 flex flex-col justify-center items-center">
          <Image
            src="/residence/park_avenue/park-avenue-v1.jpg"
            alt='park avenue master'
            width={2530}
            height={1423}
            className='w-[95vw] mb-8'
            />
            <div className="flex flex-row justify-center items-center">
            <Image
            src="/residence/park_avenue/park-avenue-12.png"
            alt='park avenue master'
            width={1600}
            height={1280}
              className='w-[50vw] mb-12'
              quality={100}
              />
              <p className='text-xs mb-2 max-w-[500px] self-start'>Master bedroom combines light wood tones and soft textiles with built-in shelving and a subtle lighting scheme to create a cozy, organized space for rest and relaxation.</p>
            </div>
            <Image
            src="/residence/park_avenue/park-avenue-bathroom2.jpg"
            alt='park avenue master bathroom'
            width={2530}
            height={1423}
            className='w-[95vw] md:mb-20 mb-12'
            />
            <Image
            src="/residence/park_avenue/park-avenue-walkincloset.jpg"
            alt='park avenue walkin closet'
            width={1518}
            height={2530}
            className='md:max-w-[500px]'
            />
            </div>
          {/* <p className='text-xs mt-2 mb-10'>3D Rendering</p> */}
        </div>
        <NextProjects />
      </div>
      
    </div>
  )
}

export default ParkAvenuePage