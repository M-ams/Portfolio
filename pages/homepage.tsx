import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Homepage() {
  return (
    <div className="bg-[#121111] min-h-screen flex flex-col">
      <div className="xs:space-y-8 md:space-y-8  xl:space-x-8 2xl:space-x-20 lg:space-x-8 xl:ml-[60vw] 2xl:ml-[45vw] lg:ml-[45vw] flex xs:flex-col xs:text-center md:flex-col md:text-center m-auto mt-8">
        <Link
          href="/about-me/about-me"
          className="text-white text-[2vw] 2xl:text-[3vw] xs:text-[8vw] md:text-[5vw] font-bold gg text-underline-center"
        >
          ABOUT ME
        </Link>
        <Link
          href="/projects/projects"
          className="text-white text-[2vw] 2xl:text-[3vw] xs:text-[8vw] md:text-[5vw] font-bold gg2 text-underline-center"
        >
          WORKS
        </Link>
        <Link
          href="/contact/contact"
          className="text-white text-[2vw] 2xl:text-[3vw] xs:text-[8vw] md:text-[5vw] font-bold gg3 text-underline-center"
        >
          CONTACT
        </Link>
      </div>
      <div className=" text-white xl:ml-[6vw] xl:pt-[27vh] lg:ml-[6vw] lg:pt-[27vh] 2xl:ml-[6vw] 2xl:pt-[27vh] xs:pt-[15vh] md:pt-[15vh] cssanimation sequence fadeInBottom dd">
        <div className="xl:flex text-[3vw] xs:text-[10vw] md:text-[7vw] 2xl:text-[4vw] xs:text-center md:text-center font-normal courier tracking-wider">
          <p className="mams">Hi, I am SY Mamadou.</p>
        </div>
        <div className="text-[3vw] xs:text-[10vw] md:text-[7vw] 2xl:text-[4vw] xs:text-center md:text-center font-medium courier mt-[6vh] tracking-wider">
          <p className="dev ml-1">Full Stack Web Developer.</p>
        </div>
        <div className="xl:flex 2xl:flex lg:flex xs:flex-col md:flex-col text-[3vw] xs:text-[10vw] md:text-[7vw] 2xl:text-[4vw] xs:text-center md:text-center font-normal courier mt-[6vh] tracking-wider">
          <p>But you can call me</p>
          <p className="xl:ml-2 lg:ml-2 2xl:ml-6 change-text">Mams.</p>
        </div>
      </div>
      <div className="w-auto  flex justify-center items-center">
        <div className="flex space-x-9 cssanimation sequence fadeInBottom dd justify-center align-middle w-[40vw] mt-[20vh]">
          <Link href="https://github.com/Mams-sy" target="_blank" className="social mt-[6vh] float2">
            <FaGithub className="text-[3vw] xs:text-[14vw] md:text-[8vw] 2xl:text-[7vw] m-4" />
          </Link>

          <Link href="https://www.linkedin.com/in/mamadou-sy/" target="_blank" className="social social1 mt-[6vh] float4">
            <FaLinkedin className="text-[3vw] xs:text-[14vw] md:text-[8vw] 2xl:text-[7vw] m-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
