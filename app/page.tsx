import Image from "next/image";
import Hero from "@/components/Hero"
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="screen">
      <div className="w-[95vw] flex flex-col justify-center items-center">
        <div className="text-center">
          <Hero />
          </div>
      <About />
      <div className=" w-auto rounded-md shadow-lg h-full mb-24 flex justify-center items-center px-20">
        <Contact />
        </div>
        </div>
    </main>
  );
}
