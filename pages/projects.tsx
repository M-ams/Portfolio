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
    <div className="bg-[#121111] min-h-screen flex flex-col">
      <div className="">
        <p className="text-white text-[3vw] xs:text-[5vw] xs:text-center md:text-center m-20 font-bold cssanimation sequence fadeInBottom">
          Some of my Works
        </p>
      </div>

      <div className="flex flex-col">
        <div className="divdcgg gg xs:text-center xs:w-[40vw] xs:m-auto xs:item-center md:w-[40vw] md:m-auto">
          <Link
            href="https://dc.gg"
            className="text-white text-[3vw] md:text-[5vw] xs:text-[8vw] xl:ml-[10vw] lg:ml-[10vw] 2xl:ml-[10vw] dcgg items-center justify-center flex 2xl:w-[15Vw] xl:w-[15Vw] xl:h-[10vh] 2xl:h-[10vh] lg:w-[15vw] lg:h-[10vh] "
            target="_blank"
          >
            DC.GG
          </Link>
        </div>

        <div className=" 2xl:flex 2xl:h-[50vh] 2xl:ml-[17vw] xl:flex xl:h-[50vh] xl:ml-[17vw] lg:flex lg:h-[50vh] lg:ml-[17vw] m-5 xs:flex-col xs:text-center md:flex-col md:justify-center  ">
          <div className="xl:flex xl:flex-col 2xl:flex 2xl:flex-col xs:flex-col xl:text-[2vw] 2xl:text-[2vw] lg:flex lg:flex-col lg:text-[2vw] xs:text-[3vw] font-normal xl:w-[40vw] 2xl:w-[40vw] text-center gg2 optima ">
            <div className="dcggtext text-white  m-auto 2xl:text-left xl:text-left lg:text-left">
              <span className="dark-purple">DC.GG</span> is a group
              end-of-studies project. During this project, I had the opportunity
              to collaborate with a team of 4 individuals, focusing mainly on
              the <span className="dark-purple">front-end</span> aspect. The
              purpose of this project is to enable Discord servers to generate
              their own{" "}
              <span className="dark-purple">personalized invitation links</span>{" "}
              with a functionnality of real-time tracking.
            </div>
            <span className="dark-purple xl:mb-10 lg:mb-10 flex dark-purple mt-10 mb-10">
              <div className=" flex flex-col m-auto xs:text-[6vw] md:text-[4vw] text-[2vw] w-full float1">
                <SiPrisma className=" m-auto" />
                <div className="">Prisma</div>
              </div>
              <div className="flex flex-col m-auto xs:text-[6vw] md:text-[4vw]  text-[2vw] w-full float4">
                <SiTypescript className=" m-auto " />
                <div className="">Typescript</div>
              </div>
              <div className="flex flex-col m-auto xs:text-[6vw] md:text-[4vw] text-[2vw] w-full float2">
                <TbBrandNextjs className="m-auto"  />
                <div className="">NextJs</div>
              </div>
              <div className="flex flex-col m-auto xs:text-[6vw] md:text-[4vw] text-[2vw] w-full float5">
                <SiExpress className=" m-auto" />
                <div className="">ExpressJs</div>
              </div>
            </span>
          </div>
          <Image
            height={400}
            width={400}
            alt="dcgg"
            src="/assets/images/dcgg.png"
            className="2xl:ml-10 2xl:w-[40vw] xl:ml-10  xl:w-[40vw] lg:ml-10  lg:w-[40vw] m-auto md:mt-10 gg3"
          />
        </div>
      </div>

      <div className="flex flex-col xl:mt-[18vh] lg:mt-[18vh] 2xl:mt-[18vh]">
        <div className="gg xs:text-center xs:w-[40vw] xs:m-auto xs:item-center md:w-[40vw] md:m-auto">
          <Link
            href="https://www.actadat.fr"
            className="text-white text-[3vw] xs:text-[8vw] md:text-[5vw] xl:ml-[10vw] lg:ml-[10vw] 2xl:ml-[10vw] actadat items-center justify-center flex 2xl:w-[15Vw] xl:w-[15Vw] xl:h-[10vh] 2xl:h-[10vh] lg:w-[15Vw] lg:h-[10vh]"
            target="_blank"
          >
            ACTADAT
          </Link>
        </div>

        <div className="2xl:flex 2xl:h-[50vh] 2xl:ml-[17vw] xl:flex xl:h-[50vh] xl:ml-[17vw] lg:flex lg:h-[50vh] lg:ml-[17vw] m-5 xs:flex-col xs:text-center md:flex-col md:justify-center ">
          <div className="xl:flex xl:flex-col 2xl:flex 2xl:flex-col xs:flex-col xl:text-[2vw] 2xl:text-[2vw] lg:flex lg:flex-col lg:text-[2vw] xs:text-[3vw] font-normal xl:w-[40vw] 2xl:w-[40vw] text-center gg2 optima  ">
            <div className="dcggtext text-white  m-auto 2xl:text-left xl:text-left lg:text-left">
              <span className="actcolor">Actadat</span> was the software I was
              working on during my{" "}
              <span className="actcolor">internship</span>. This software is
              for
              <span className="actcolor"> accounting firms</span>. It allows you
              to manage your accounting firm and have a reliable and complete
              monitoring of accounting records. I participated in the
              development of <span className="actcolor">new features</span>.
            </div>
            <span className="dark-purple flex actcolor mt-10">
              <div className=" flex flex-col m-auto xs:text-[6vw] md:text-[4vw] text-[2vw] w-full float1 ">
                <SiPhp className=" m-auto" />
                <div className="">Php</div>
              </div>
              <div className="flex flex-col m-auto xs:text-[6vw] md:text-[4vw] text-[2vw] w-full float4">
                <FaSymfony className="m-auto" />
                <div className="">Symfony</div>
              </div>
              <div className="flex flex-col m-auto xs:text-[6vw] md:text-[4vw]  text-[2vw] w-full float2">
                <IoLogoJavascript className="m-auto" />
                <div className="">Javascript</div>
              </div>
            </span>
          </div>
          <Image
            height={400}
            width={400}
            alt="dcgg"
            src="/assets/images/actadat.png"
            className=" m-auto 2xl:ml-10  2xl:w-[40vw] xl:ml-10  xl:w-[40vw] lg:ml-10  lg:w-[40vw] md:mt-10 gg3"
          />
        </div>
      </div>
      <div className="flex m-auto mt-10 space-x-6 cssanimation sequence fadeInBottom">
        <Link href="/" className="btn btn--stripe btn--radius 2xl:text-[2vw]">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Projects;
