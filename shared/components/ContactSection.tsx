import Link from "next/link";

import {
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="page-section">
      <div className=" m-auto flex flex-col lg:flex-row max-w-[500px] lg:max-w-full gap-8   lg:gap-6 w-full">
        <div className="basis-full lg:basis-1/3 flex flex-col gap-4 sm:gap-5 lg:gap-6 pt-0 lg:pt-4">
          <h2 className="font-russo-one text-3xl sm:text-4xl lg:text-3xl xl:text-4xl leading-tight">
            Let&apos;s Build Something Amazing Together
          </h2>
          <ul className="flex flex-row flex-wrap lg:flex-col gap-3 sm:gap-4 lg:gap-3">
            <li>
              <Link
                href="mailto:chris@useChris.dev"
                className="flex items-center gap-2 sm:gap-3 hover:text-black transition-colors group"
              >
                <span className="text-lg sm:text-xl text-black">
                  <FaEnvelope />
                </span>
                <span className="text-sm sm:text-base lg:text-lg text-gray-600 group-hover:text-black">
                  chris@useChris.dev
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="tel:+2347034670696"
                className="flex items-center gap-2 sm:gap-3 hover:text-black transition-colors group"
              >
                <span className="text-lg sm:text-xl text-black">
                  <FaPhone />
                </span>
                <span className="text-sm sm:text-base lg:text-lg text-gray-600 group-hover:text-black">
                  (+234) 703 4670 696
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex gap-3 sm:gap-4 items-center">
            <Link
              href="https://www.linkedin.com/in/christopher-okafor-17084416b"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn Profile"
            >
              <span className="size-8 sm:size-10 lg:size-11 xl:size-12 text-sm sm:text-base lg:text-lg grid place-items-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-black/80 group-hover:scale-110">
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
              <span className="size-8 sm:size-10 lg:size-11 xl:size-12 text-sm sm:text-base lg:text-lg grid place-items-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-black/80 group-hover:scale-110">
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
              <span className="size-8 sm:size-10 lg:size-11 xl:size-12 text-sm sm:text-base lg:text-lg grid place-items-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-black/80 group-hover:scale-110">
                <FaGithub />
              </span>
            </Link>
          </div>
        </div>
        <div className="basis-full lg:basis-2/3 flex lg:px-8 xl:pl-16 pt-6 sm:pt-8 lg:pt-0 lg:border-l-2 xl:border-l-3 border-t sm:border-t-2 lg:border-t-0 border-gray-300">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
