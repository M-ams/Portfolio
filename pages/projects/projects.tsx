import Link from "next/link";
import Image from "next/image";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaSymfony } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";


function Projects() {
  return (
    <div className="bg-[#121111] h-auto flex flex-col">
      <div className="">
        <p className="text-white text-6xl m-20 font-bold cssanimation sequence fadeInBottom">
          Some of my Works
        </p>
      </div>

      <div className="flex flex-col">
        <div className="divdcgg gg">
          <Link
            href="https://dc.gg"
            className="text-white text-5xl ml-[10vw] sparkle u-hover--sparkle dcgg items-center justify-center flex w-[15Vw] h-[10vh]"
            target="_blank"
          >
            DC.GG
          </Link>
        </div>

        <div className="flex h-[50vh]  ml-[17vw] m-5 ">
          <div className="flex flex-col text-2xl font-normal w-[40vw] text-center gg2 optima ">
            <div className="dcggtext text-white  m-auto text-left">
              <span className="dark-purple">DC.GG</span> is a group
              end-of-studies project. During this project, I had the opportunity
              to collaborate with a team of 4 individuals, focusing mainly on
              the <span className="dark-purple">front-end</span> aspect. The
              purpose of this project is to enable Discord servers to generate
              their own{" "}
              <span className="dark-purple">personalized invitation links</span>{" "}
              with a functionnality of real-time tracking.
            </div>
            <span className="dark-purple mb-10 flex dark-purple">
              <div className=" flex flex-col m-auto  w-[6vw] float1">
                <SiPrisma className="text-3xl m-auto" />
                <div className="m-auto">Prisma</div>
              </div>
              <div className="flex flex-col m-auto  w-[6vw] float4">
                <SiTypescript className="text-3xl m-auto" />
                <div className="m-auto">Typescript</div>
              </div>
              <div className="flex flex-col m-auto  w-[6vw] float2">
                <TbBrandNextjs className="text-3xl m-auto" />
                <div className="m-auto">NextJs</div>
              </div>
              <div className="flex flex-col m-auto  w-[6vw] float5">
                <SiExpress className="text-3xl m-auto" />
                <div className="m-auto">ExpressJs</div>
              </div>
            </span>
          </div>
          <Image
            height={400}
            width={400}
            alt="dcgg"
            src="/assets/images/dcgg.png"
            className="ml-10 m-auto w-[40vw] gg3"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="gg">
          <Link
            href="https://www.actadat.fr"
            className="text-white text-5xl ml-[10vw] sparkle u-hover--sparkle actadat items-center justify-center flex w-[15Vw] h-[10vh]"
            target="_blank"
          >
            ACTADAT
          </Link>
        </div>

        <div className="flex h-[50vh]  ml-[17vw] m-5 ">
          <div className="flex flex-col text-2xl font-normal w-[40vw] text-center gg2 optima ">
            <div className="dcggtext text-white  m-auto text-left">
              <span className="actcolor">Actadat</span> was the software I
              was working on during my <span className="actcolor">apprenticeship</span>. This software is for
              <span className="actcolor">accounting firms</span>. It allows you to manage your accounting firm and
              have a reliable and complete monitoring of accounting records. I
              participated in the development of <span className="actcolor">new features</span>.
            </div>
            <span className="dark-purple mb-10 flex actcolor">
              <div className=" flex flex-col m-auto  w-[6vw] float1">
                <SiPhp className="text-3xl m-auto" />
                <div className="m-auto">Php</div>
              </div>
              <div className="flex flex-col m-auto  w-[6vw] float4">
                <FaSymfony className="text-3xl m-auto" />
                <div className="m-auto">Symfony</div>
              </div>
              <div className="flex flex-col m-auto  w-[6vw] float2">
                <IoLogoJavascript className="text-3xl m-auto" />
                <div className="m-auto">Javascript</div>
              </div>
            </span>
          </div>
          <Image
            height={400}
            width={400}
            alt="dcgg"
            src="/assets/images/actadat.png"
            className="ml-10 m-auto w-[40vw] gg3"
          />
        </div>
      </div>
      <div className="flex m-auto mt-10 space-x-6 cssanimation sequence fadeInBottom">
        <Link href="/" className="btn btn--stripe btn--radius">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Projects;
