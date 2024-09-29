import Image from "next/image"
import NextProjects from "@/components/NextProjects"

const MelissaPage = () => {
  return (
    <div className='screen'>
      <div className="flex justify-center items-center flex-col">
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl lg:mt-60 lg:mb-6 mt-52 mb-4">melissa</div>
        <p className='text-xs mb-40'>Address: Macau | Area: 1250sqf | Completed Year: 2023</p>

        {/* HORIZONTAL LIVING */}
        <div className="flex flex-col items-center">
        <p className='text-xs md:mb-32 mb-28 max-w-[500px] mt-12'>This well-known brand Melissa, located in Macau, benefits from its high ceilings, which provide more creative space for the design. The design aligns with Melissa's signature curved aesthetic, enhancing this element and giving the entire store a unique character.</p>
        <div className="">
          <Image
            src="/commercial/melissa/melissa-front.jpg"
            alt='melissa'
            width={1760}
            height={991}
              className='w-[95vw] mb-20 md:mb-32'
              quality={100}
            />
            <Image
            src="/commercial/melissa/melissa-02.jpg"
            alt='melissa'
            width={1980}
            height={1115}
              className='w-[95vw] mb-20'
              quality={100}
            />
            <Image
            src="/commercial/melissa/melissa-03.jpg"
            alt='melissa'
            width={1980}
            height={1115}
              className='w-[95vw] mb-20'
              quality={100}
            />
        </div>
 
        </div>
        
      <NextProjects />
      </div>
    </div>
  )
}

export default MelissaPage