import Link from "next/link";
import Image from "next/image";
function Projects() {
  return (
    <div className="bg-[#121111] h-screen flex flex-col">
      <div className="">
        <p className="text-white text-6xl m-20 font-extralight cssanimation sequence fadeInBottom">
          Some of my Works
        </p>
      </div>

      <div className="flex flex-col gg">
        <div className="divdcgg">
          <Link
            href="https://dc.gg"
            className="text-white text-5xl ml-[10vw] sparkle u-hover--sparkle dcgg items-center justify-center flex w-[15Vw] h-[10vh]"
            target="_blank"
          >
            DC.GG
          </Link>
        </div>

        <div className="flex h-[50vh]  ml-[17vw] m-5">
          <div className="flex flex-col text-center text-2xl courier font-extralight">
            <div className="dcggtext text-white  m-auto ">
              <span className="dark-purple">DC.GG</span> is a group
              end-of-studies project. During this project, I had the opportunity
              to collaborate with a team of 4 individuals, focusing mainly on
              the front-end aspect. The purpose of this project is to enable
              Discord servers to generate their own personalized invitation
              links with a functionnality of real-time tracking.
            </div>
            <span className="dark-purple mb-20">
              TypeScript, NextJs, Prisma, ExpressJs
            </span>
          </div>
          <Image
          alt="dcgg"
            src="/assets/images/dcgg.png"
            className=" h-[38vh] ml-5 m-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
