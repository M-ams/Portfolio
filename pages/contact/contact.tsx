import Link from "next/link";

function Contact() {
  return (
    <div className="bg-[#121111] min-h-screen flex flex-col">
      <div className="flex flex-col xl:mt-[25vh] xl:ml-[17vw] lg:mt-[25vh] lg:ml-[17vw] 2xl:mt-[25vh] 2xl:ml-[17vw] optima xs:text-center sm:text-center md:text-center ">
        <p className="text-[10vw] xs:text-6xl lg:text-6xl xs:mt-32 lg:mt-32 md:mt-32 text-white gg">Hello.</p>
        <p className="text-[2vw] xs:text-[5vw] sm:text-[5vw] md:text-[5vw] text-white mt-10 font-thin gg2">
          Interested in my profile ? Get in touch
        </p>
        <p className="text-[2vw] xs:text-[5vw] text-white mt-6 font-thin gg2">
          Email:{" "}
          <Link href="mailto:mamadou.sy143@gmail.com" className="underline">
            {" "}
            mamadou.sy143@gmail.com
          </Link>
        </p>
        <p className="text-[2vw] xs:text-[5vw] text-white mt-6 font-thin gg3">
          On the internet:{" "}
          <Link href="https://www.linkedin.com/in/mamadou-sy/" className="underline">
            {" "}
            Linkedin
          </Link> / 
            <Link href="https://github.com/Mams-sy" className="underline">
                {" "}
                Github
            </Link>
        </p>
      </div>
      <div className="flex m-auto mt-[15vh] space-x-6 cssanimation sequence fadeInBottom ">
        <Link href="/" className="btn btn--stripe btn--radius 2xl:text-[4vw]">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Contact;
