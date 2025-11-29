import Link from "next/link";
import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6";

function SiteFooter() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-start gap-6 lg:gap-8 px-6 sm:px-8 md:px-16 lg:px-20 py-8 lg:py-12 ">
      {/* Left side - Links and Copyright */}
      <div className="flex flex-col gap-3">
        <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base font-semibold uppercase">
          <Link href="/" className="hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-gray-600 transition-colors">
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-gray-600 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Chris Okafor. All rights reserved.
        </p>
      </div>

      {/* Right side - Social Media Icons */}
      <div className="flex gap-3 sm:gap-4">
        <Link
          href="https://www.linkedin.com/in/christopher-okafor-17084416b"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label="LinkedIn Profile"
        >
          <span className="size-8 sm:size-10 lg:size-11 text-sm sm:text-base lg:text-lg grid place-items-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-black/80 group-hover:scale-110">
            <FaLinkedinIn />
          </span>
        </Link>
        <Link
          href="https://x.com/chris_okafor_x"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label="X (Twitter) Profile"
        >
          <span className="size-8 sm:size-10 lg:size-11 text-sm sm:text-base lg:text-lg grid place-items-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-black/80 group-hover:scale-110">
            <FaXTwitter />
          </span>
        </Link>
        <Link
          href="https://github.com/chrisOxygen"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label="GitHub Profile"
        >
          <span className="size-8 sm:size-10 lg:size-11 text-sm sm:text-base lg:text-lg grid place-items-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-black/80 group-hover:scale-110">
            <FaGithub />
          </span>
        </Link>
      </div>
    </footer>
  );
}

export default SiteFooter;
