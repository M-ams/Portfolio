import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Homepage() {
  return (
    <div className="bg-[#121111] h-screen">
      <div className="space-x-8 float-right mr-[12vw] mt-[8vh] flex ">
        <Link href="/about-me" className="text-white text-4xl font-bold gg">
          About me
        </Link>
        <Link href="/projects" className="text-white text-4xl font-bold gg2">
          Projects
        </Link>
        <Link href="/contact" className="text-white text-4xl font-bold gg3">
          Contact
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

      <div className="flex space-x-9 cssanimation sequence fadeInBottom dd border-t-2 justify-center align-middle w-[40vw] mt-[20vh]">
    <Link href="/" target="_blank" className="social mt-[6vh]">
        <FaGithub className="text-5xl m-4" />
    </Link>

    <Link href="" target="_blank" className="social mt-[6vh]">
        <FaLinkedin className="text-5xl m-4" />
    </Link>
</div>
      </div>

    </div>
  );
}

export default Homepage;
