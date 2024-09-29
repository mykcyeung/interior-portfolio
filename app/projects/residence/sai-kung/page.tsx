import Image from "next/image"
import { residentialCard } from "@/constants"
import NextProjects from "@/components/NextProjects"
import { usePathname } from "next/navigation"
import Link from "next/link"

const SaiKungPage = () => {
  // const patheName = usePathname();


  return (
    <div className='screen'>
      <div className="flex justify-center items-center flex-col">
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl lg:mt-60 lg:mb-6 mt-52 mb-4">Sai Kung</div>
        <p className='text-xs mb-40'>Address: Sai Kung | Area: 3000sqf | Year Completed: 2022</p>

        {/* HORIZONTAL LIVING */}
        <div className="flex flex-col items-center">
        <p className='text-xs md:mb-32 mb-16 max-w-[500px] mt-12'>This special project in Sai Kung involved redesigning the front entrance. The main focus was the altar, as the homeowner follows different religions and wanted it to be very practical. A key challenge was blending the new design with the existing furniture. The home is in a quiet, forested area, with the living room featuring a big glass window looking out into the trees. The design aimed to connect the living space with the natural surroundings.</p>
        <div className="">
          <Image
            src="/residence/sai_kung/saikung-v1.jpg"
            alt='sai kung'
            width={2875}
            height={1617}
              className='w-[95vw] mb-20 md:mb-32'
              quality={100}
            />
            <Image
            src="/residence/sai_kung/saikung-v2.jpg"
            alt='sai kung'
            width={2875}
            height={1617}
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

export default SaiKungPage