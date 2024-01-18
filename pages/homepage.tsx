import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Homepage() {
  return (
    <div className="bg-[#121111] min-h-screen flex flex-col">
      <div className="space-x-8 ml-[60vw] flex mt-8">
        <Link
          href="/about-me/about-me"
          className="text-white text-3xl font-bold gg text-underline-center"
        >
          ABOUT ME
        </Link>
        <Link
          href="/projects/projects"
          className="text-white text-3xl font-bold gg2 text-underline-center"
        >
          WORKS
        </Link>
        <Link
          href="/contact/contact"
          className="text-white text-3xl font-bold gg3 text-underline-center"
        >
          CONTACT
        </Link>
      </div>
      <div className=" text-white ml-[6vw] pt-[27vh] cssanimation sequence fadeInBottom dd">
        <div className="flex text-5xl font-normal courier tracking-wider">
          <p className="mams">Hi, I am SY Mamadou.</p>
        </div>
        <div className="text-5xl font-medium courier mt-[6vh] tracking-wider">
          <p className="dev ml-1">Full Stack Web Developer.</p>
        </div>
        <div className="flex text-5xl font-normal courier mt-[6vh] tracking-wider">
          <p>But you can call me</p>
          <p className="ml-2 change-text">Mams.</p>
        </div>
      </div>
      <div className="w-auto  flex justify-center items-center">
        <div className="flex space-x-9 cssanimation sequence fadeInBottom dd justify-center align-middle w-[40vw] mt-[20vh]">
          <Link href="https://github.com/Mams-sy" target="_blank" className="social mt-[6vh] float2">
            <FaGithub className="text-5xl m-4" />
          </Link>

          <Link href="https://www.linkedin.com/in/mamadou-sy/" target="_blank" className="social social1 mt-[6vh] float4">
            <FaLinkedin className="text-5xl m-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
