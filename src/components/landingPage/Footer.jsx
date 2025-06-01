import React from 'react'
import { Link } from "react-router-dom";
import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { socialLinks } from "@/data/social";


function Footer() {

    const getIconComponent = (iconName) => {
        switch (iconName) {
          case "github":
            return <IoLogoGithub className="h-7 w-7 transition-transform duration-700 hover:rotate-[360deg] cursor-pointer" />;
          case "linkedin":
            return <FaLinkedin className="h-7 w-7 transition-transform duration-700 hover:rotate-[360deg] cursor-pointer" />;
          case "mail":
            return <MdEmail className="h-8 w-8 transition-transform duration-700 hover:rotate-[360deg] cursor-pointer" />;
          case "phone":
            return <FaPhoneSquareAlt className="h-7 w-7 transition-transform duration-700 hover:rotate-[360deg] cursor-pointer" />;
          default:
            return null;
        }
      };
    

  return (
    <div>
  <section className="py-10 bg-black sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
        {/* Description */}
        <div className="md:col-span-1">
          <p className="lg:text-3xl text-base leading-relaxed text-white">Yash Patel</p>
          <p className="text-base leading-relaxed text-white mt-7">
            A passionate MERN stack developer dedicated to crafting modern, responsive, and performance-optimized web applications.
          </p>
        </div>

        {/* Quick Links: 2 Columns */}
        <div className="md:col-span-1">
          <p className="text-sm font-semibold tracking-widest text-gray-100 uppercase">Quick Links</p>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li><a href="#home" className="text-base text-white hover:underline">Home</a></li>
              <li><a href="#about" className="text-base text-white hover:underline">About</a></li>
              <li><a href="#skills" className="text-base text-white hover:underline">Skills</a></li>
              <li><a href="#education" className="text-base text-white hover:underline">Education</a></li>
            </ul>
            <ul className="space-y-4">
              <li><a href="#experience" className="text-base text-white hover:underline">Experience</a></li>
              <li><a href="#certifications" className="text-base text-white hover:underline">Certifications</a></li>
              <li><a href="#projects" className="text-base text-white hover:underline">Projects</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-gray-100 uppercase">Connect</p>
          <div className="flex items-center text-white gap-4 mt-4">
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
        </div>
      </div>

      <hr className="mt-16 mb-10 border-gray-200" />
      <p className="text-sm text-center text-gray-600">© {new Date().getFullYear()} Yash Patel. All Rights Reserved.</p>
    </div>
  </section>
</div>

  )
}

export default Footer
