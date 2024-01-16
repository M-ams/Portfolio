import Link from "next/link";
function Homepage() {
  return (
    <div className="kk">
      <div className="bg-[#121111] h-screen flex">
        <div className=" text-white pl-40 pt-20 cssanimation sequence fadeInBottom dd">
          <div className="flex text-2xl font-extralight">
            <p className="mams">Hello, I am SY Mamadou,</p>
            <p className="dev ml-1">Full Stack Web Developer</p>
          </div>
          <div className="flex text-2xl font-extralight">
            <p>but you can call me</p>
            <p className="ml-2 change-text">Mams</p>
          </div>
        </div>
        <div className="text-white text-9xl pt-[35vh] font gg flex flex-col font-light">
          <Link href="/projects/projects" className="ff">
            PROJECTS
          </Link>
          <Link href="/about-me/about-me" className="pt-10 ff">
            ABOUT ME
          </Link>
          <Link href="/contact/contact" className="pt-10 ff">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
