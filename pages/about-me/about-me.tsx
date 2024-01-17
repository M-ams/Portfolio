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
    <div className="bg-[#121111] h-auto flex flex-col">
      <div className="">
        <p className="text-white text-6xl m-20 cssanimation sequence fadeInBottom font-bold">
          What about me ?
        </p>
        <div className="flex ml-40 gg">
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

        <p className="text-white text-6xl m-20 cssanimation sequence fadeInBottom font-bold">
          Where did I have work for ?
        </p>
        <div className="flex flex-col ml-40 ">
          <p className="text-gray-500 text-3xl bb">
            Full Stack Web Developer at{" "}
            <Link
              href="https://www.uptodo.fr"
              target="_blank"
              className="text-gray-200 effect-shine"
            >
              UPTODO
            </Link>
          </p>
          <p className="text-gray-200 text-1xl ml-2">Sep 2022 - Nov 2023</p>
        </div>
        <div className="flex ml-60 gg">
          <div className="flex flex-col text-gray-500 h-auto w-[40vw] text-left">
            <div className="text-2xl mt-8">
              At uptodo I participated in the development of the{" "}
              <span className="text-gray-200">Actadat </span>
              software. The languages were{" "}
              <span className="text-gray-200">Symfony</span> and{" "}
              <span className="text-gray-200">Javascript</span>
            </div>
            <div className="text-2xl mt-4">
              My missions were to develop <span className="text-gray-200">new features</span> based on
              customer feedback and update them. I also participated in the
              meetings to reflect on the application evolution perspectives.
            </div>
            <div className="text-2xl mt-4">
              This very <span className="text-gray-200">enriching</span> first experience allowed me to
              develop my skills, see how <span className="text-gray-200">software development</span> works
              with production etc ... and prepare myself for the professional
              world.
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
      </div>
    </div>
  );
}

export default AboutMe;
