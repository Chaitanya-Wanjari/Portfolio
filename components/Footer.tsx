import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
           Excited to begin my <span className="text-purple">tech journey</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Open to internships and entry-level roles where I can learn, contribute, and grow as a developer.
        </p>
        <a href="chaitanya2004wanjari@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
         
        </p>
<div className="flex items-center md:gap-3 gap-6 relative z-[999]">
  {socialMedia.map((info) => (
    <a
      key={info.id}
      href={info.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()} // 🔥 important
      className="w-10 h-10 flex justify-center items-center bg-black-200 rounded-lg border border-black-300 hover:scale-110 transition"
    >
      <img src={info.img} alt="icons" width={20} height={20} />
    </a>
  ))}
</div>
      </div>
    </footer>
  );
};

export default Footer;
