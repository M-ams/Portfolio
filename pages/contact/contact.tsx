import Link from "next/link";

function Contact() {
  return (
    <div className="bg-[#121111] h-screen flex flex-col">
      <div className="flex flex-col mt-[25vh] ml-[17vw] optima">
        <p className="text-9xl text-white gg">Hello.</p>
        <p className="text-2xl text-white mt-10 font-thin gg2">
          Interested in my profile ? Get in touch
        </p>
        <p className="text-2xl text-white mt-6 font-thin gg2">
          Email:{" "}
          <Link href="mailto:mamadou.sy143@gmail.com" className="underline">
            {" "}
            mamadou.sy143@gmail.com
          </Link>
        </p>
        <p className="text-2xl text-white mt-6 font-thin gg3">
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
      <div className="flex m-auto mt-[25vh] space-x-6 cssanimation sequence fadeInBottom">
        <Link href="/" className="btn btn--stripe btn--radius">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Contact;
