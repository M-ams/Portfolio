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




function AboutMe() {
  return (
    <div className="bg-[#121111] h-auto flex flex-col">
      <div className="">
        <p className="text-white text-6xl m-20 font-extralight cssanimation sequence fadeInBottom">
          What about me ?
        </p>
        <div className="flex ml-40">
          <div className="flex flex-col text-gray-500 h-auto w-[40vw] text-left">
            <div className="text-2xl mt-4">
              Well, now you know my nickname but for me it&apos;s not enough, so
              let&apos;s go.
            </div>
            <div className="text-2xl mt-8">
              Since childhood I have always had an attraction towards computers.
              After some adventures, back in{" "}
              <span className="text-gray-200">2021</span> where I found myself
              doing a<span className="text-gray-200"> web development</span>{" "}
              school for a period of 2 years. During which I was able to
              discover the world of work in this field.
            </div>
            <div className="text-2xl mt-8 mb-4">
              My main goal these days is to{" "}
              <span className="text-gray-200">improve</span> my web skills by
              integrating a company with a{" "}
              <span className="text-gray-200">passionate</span> team that will
              make me a better
              <span className="text-gray-200"> developer</span>
            </div>
            <div className="text-2xl mt-8 mb-4">
              Here is some languages that I have discovered and have been able
              to practice
            </div>
            <div className="flex mt-6">
              <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float1">
                <SiPhp className="text-5xl m-auto" />
                <div className="m-auto">PHP</div>
              </div>
              <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float4">
                <FaSymfony className="text-5xl m-auto" />
                <div className="m-auto">Symfony</div>
              </div>
              <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float5">
                <IoLogoJavascript className="text-5xl m-auto" />
                <div className="m-auto">Javascript</div>
              </div>
              <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float3">
                <FaReact className="text-5xl m-auto" />
                <div className="m-auto">ReactJs</div>
              </div>
              <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float2">
                <SiTypescript className="text-5xl m-auto" />
                <div className="m-auto">Typescript</div>
              </div>
            </div>

            <div className="flex mt-10">
              <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float1">
                <TbBrandMysql className="text-5xl m-auto" />
                <div className="m-auto">MySQL</div>
              </div>
              <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float4">
                <FaNodeJs className="text-5xl m-auto" />
                <div className="m-auto">NodeJs</div>
              </div>
              <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float2">
                <TbBrandNextjs className="text-5xl m-auto" />
                <div className="m-auto">NextJs</div>
              </div>
              <div className="text-gray-200 flex flex-col m-auto  w-[6vw] float5">
                <SiExpress className="text-5xl m-auto" />
                <div className="m-auto">ExpressJs</div>
              </div>
            </div>
          </div>
          <Image
            src=""
            alt="test"
            width={400}
            height={400}
            className="border rounded-3xl m-auto"
          />
        </div>

        <p className="text-white text-3xl m-20 font-extralight cssanimation sequence fadeInBottom">
          Here is some skills that I have discovered and have been able to
          practice
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
