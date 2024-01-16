import Image from "next/image";
function AboutMe() {
  return (
    <div className="bg-[#121111] h-screen flex flex-col">
      <div className="">
        <p className="text-white text-6xl m-20 font-extralight cssanimation sequence fadeInBottom">
          What about me ?
        </p>
        <div className="flex ml-40">
          <div className="flex flex-col text-gray-500 h-auto w-[40vw] text-left">
            <div className="text-2xl mt-4">
              Well now you know my nickname but for me it&apos;s not enough, so let&apos;s
              go.
            </div>
            <div className="text-2xl mt-8">
              Since childhood I have always had an attraction towards computers.
              After some adventures, back in <span className="text-gray-200">2021</span> where I found myself doing a
              <span>web development</span> school for a period of 2 years. During which I was
              able to discover the world of work in this field.
            </div>
            <div className="text-2xl mt-8 mb-4">
              My main goal these days is to <span>improve</span> my web skills by integrating
              a company with a <span>passionate</span>team that will make me a better
              developer
            </div>
          </div>
          <Image src="" alt="test" className="border m-auto h-[35vh] w-[30vw]" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
