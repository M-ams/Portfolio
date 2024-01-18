import Image from "next/image";

import { FaSymfony } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

import Link from "next/link";

function AboutMe() {
  return (
    <div className="bg-[#121111] min-h-screen flex flex-col">
      <p className="text-white text-[3vw] xs:text-[5vw] xs:text-center md:text-center m-20 font-bold cssanimation sequence fadeInBottom">
        What about me ?
      </p>
      <div className="xl:flex 2xl:flex lg:flex xl:ml-40 2xl:ml-40 lg:ml-40 xs:m-auto md:m-auto gg">
        <div className="flex flex-col text-gray-500 h-auto xs:w-[80vw] md:w-[80vw]  2xl:w-[60vw] xl:w-[40vw] lg:w-[40vw] xl:text-left 2xl:text-left lg:text-left xs:text-center md:text-center ">
          <div className="text-[2vw] 2xl:text-[3vw] xs:text-[5vw] md:text-[3vw] mt-4">
            Well, now you know my nickname but for me it&apos;s not enough, so
            let&apos;s go.
          </div>
          <div className="text-[2vw] xs:text-[5vw] md:text-[3vw] mt-8">
            Since childhood I have always had an attraction towards computers.
            After some adventures, back in{" "}
            <span className="text-gray-200">2021</span> where I found myself
            doing a<span className="text-gray-200"> web development</span>{" "}
            school for a period of 2 years. During which I was able to discover
            the world of work in this field.
          </div>
          <div className="text-[2vw]  xs:text-[5vw] md:text-[3vw] mt-8 mb-4">
            My main goal these days is to{" "}
            <span className="text-gray-200">improve</span> my web skills by
            integrating a company with a{" "}
            <span className="text-gray-200">passionate</span> team that will
            make me a better
            <span className="text-gray-200"> developer</span>
          </div>
          <div className="text-[2vw] xs:text-[5vw] md:text-[3vw] mt-8 mb-4">
            Here is some languages that I have discovered and have been able to
            practice
          </div>
          <div className="xl:flex lg:flex 2xl:flex mt-6">
            <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float1 xs:w-full md:w-full">
              <SiPhp className="text-[4vw] xs:text-[12vw] md:text-[8vw] m-auto" />
              <div className="m-auto">PHP</div>
            </div>
            <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float4 xs:w-full md:w-full">
              <FaSymfony className="text-[4vw] xs:text-[12vw] md:text-[8vw] m-auto" />
              <div className="m-auto">Symfony</div>
            </div>
            <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float5 xs:w-full md:w-full">
              <IoLogoJavascript className="text-[4vw] xs:text-[12vw] md:text-[8vw] m-auto" />
              <div className="m-auto">Javascript</div>
            </div>
            <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float3 xs:w-full md:w-full">
              <FaReact className="text-[4vw] xs:text-[12vw] md:text-[8vw] m-auto" />
              <div className="m-auto">ReactJs</div>
            </div>
            <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float2 xs:w-full md:w-full">
              <SiTypescript className="text-[4vw] xs:text-[12vw] md:text-[8vw] m-auto" />
              <div className="m-auto">Typescript</div>
            </div>
          </div>

          <div className="xl:flex lg:flex 2xl:flex xl:mt-10 2xl:mt-10 lg:mt-10 ">
            <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float1 xs:w-full md:w-full">
              <TbBrandMysql className="text-[4vw] xs:text-[12vw] md:text-[8vw] m-auto" />
              <div className="m-auto">MySQL</div>
            </div>
            <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float4 xs:w-full md:w-full">
              <FaNodeJs className="text-[4vw] xs:text-[12vw] md:text-[8vw] m-auto" />
              <div className="m-auto">NodeJs</div>
            </div>
            <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float2 xs:w-full md:w-full">
              <TbBrandNextjs className="text-[4vw] xs:text-[12vw] md:text-[8vw] m-auto" />
              <div className="m-auto">NextJs</div>
            </div>
            <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float5 xs:w-full md:w-full">
              <SiExpress className="text-[4vw] xs:text-[12vw] md:text-[8vw] m-auto" />
              <div className="m-auto">ExpressJs</div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/images/mamsimg.jpg"
          alt="test"
          width={400}
          height={200}
          className="rounded-3xl m-auto xs:w-[40vw] md:w-[40vw] "
        />
      </div>

      <p className="text-white text-[3vw] xs:text-[5vw] xs:text-center md:text-center m-20 font-bold cssanimation sequence fadeInBottom">
        Where I&apos;ve worked ?
      </p>
      <div className="xl:flex flex-col 2xl:flex lg:flex xl:ml-40 2xl:ml-40 lg:ml-40 xs:m-auto md:m-auto xs:text-center md:text-center  gg">
        <p className="text-gray-500 text-[2vw] xs:text-[5vw] md:text-[5vw] bb">
          Full Stack Web Developer at{" "}
          <Link
            href="https://www.uptodo.fr"
            target="_blank"
            className="text-gray-200 effect-shine"
          >
            UPTODO
          </Link>
        </p>
        <p className="text-gray-200 xl:text-[2vw] 2xl:text-[2vw] lg:text-[2vw] 2xl:ml-[1vw] xl:ml-[1vw] lg:ml-[1vw]">
          Sep 2022 - Nov 2023
        </p>
      </div>
      <div className="xl:flex 2xl:flex lg:flex xl:ml-60 2xl:ml-60 lg:ml-60 xs:m-auto md:m-auto gg">
        <div className="flex flex-col text-gray-500 h-auto xs:w-[80vw] md:w-[80vw]  2xl:w-[40vw] xl:w-[40vw] lg:w-[40vw] xl:text-left 2xl:text-left lg:text-left xs:text-center md:text-center">
          <div className="text-[2vw] xs:text-[5vw] mt-8">
            At uptodo I participated in the development of the{" "}
            <span className="text-gray-200">Actadat </span>
            software. The languages were{" "}
            <span className="text-gray-200">Symfony</span> and{" "}
            <span className="text-gray-200">Javascript</span>
          </div>
          <div className="text-[2vw] xs:text-[5vw] mt-4">
            My missions were to develop{" "}
            <span className="text-gray-200">new features</span> based on
            customer feedback and update them. I also participated in the
            meetings to reflect on the application evolution perspectives.
          </div>
          <div className="text-[2vw] xs:text-[5vw] mt-4">
            This very <span className="text-gray-200">enriching</span> first
            experience allowed me to develop my skills, see how{" "}
            <span className="text-gray-200">software development</span> works
            with production etc ... and prepare myself for the professional
            world.
          </div>
        </div>
      </div>
      <div className="flex m-auto mt-10 space-x-6 cssanimation sequence fadeInBottom">
        <Link href="/" className="btn btn--stripe btn--radius 2xl:text-[2vw]">
          Home
        </Link>

        <a
          href="/assets/cv/cv.pdf"
          target="_blank"
          className="btn btn--stripe btn--radius 2xl:text-[2vw]"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
