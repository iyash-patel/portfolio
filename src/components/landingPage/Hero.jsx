import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { socialLinks } from "@/data/social";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Doodles from "./Doodles"; // Adjust the path as necessary

function Hero() {
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "github":
        return (
          <IoLogoGithub className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-700 hover:rotate-[360deg] cursor-pointer" />
        );
      case "linkedin":
        return (
          <FaLinkedin className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-700 hover:rotate-[360deg] cursor-pointer" />
        );
      case "mail":
        return (
          <MdEmail className="h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-700 hover:rotate-[360deg] cursor-pointer" />
        );
      case "phone":
        return (
          <FaPhoneSquareAlt className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-700 hover:rotate-[360deg] cursor-pointer" />
        );
      default:
        return null;
    }
  };

  return (
    <section className="hero-background relative py-10 sm:py-16 lg:py-20 bg-white w-full min-h-screen flex items-center overflow-hidden">
      <Doodles />

      {/* Main Hero Content */}
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-10 md:gap-x-14">
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-extrabold text-black">
              Namaste 🙏
            </h2>

            <p className="mt-3 text-[clamp(1.25rem,4vw,2rem)] font-semibold text-gray-800">
              I'm Yash Patel
            </p>

            <p className="mt-3 text-[clamp(1rem,3.5vw,1.25rem)] text-gray-600 font-medium">
              Passionate in Web Development
            </p>

            <TypeAnimation
              sequence={[
                "MERN Stack Development",
                2000,
                "Building Scalable Web Apps",
                2000,
                "Crafting Clean UI & Code",
                2000,
                "Always Learning & Evolving",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="mt-4 text-[clamp(1rem,3.5vw,1.25rem)] font-medium text-gray-600"
            />

            {/* Social + Button */}
            <div className="flex flex-col items-center md:items-start gap-4 mt-8">
              {/* Social Icons */}
              <div className="flex gap-5 sm:gap-6">
                {socialLinks.map((social) => (
                  <Link
                    to={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={social.id}
                  >
                    {getIconComponent(social.icon)}
                  </Link>
                ))}
              </div>

              {/* About Button */}
              <a
                href="#about"
                className="inline-flex mt-4 items-center gap-2 px-6 py-3 border border-black rounded-full text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                <span>About Me</span>
                <FaRegArrowAltCircleDown className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <div className="ml-auto mt-8 w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden transition-all duration-500 ease-in-out hover:scale-105">
                <img
                  src="public/YashPhoto.jpeg"
                  alt="Yash Patel"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
