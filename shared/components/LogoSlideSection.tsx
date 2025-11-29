import Image from "next/image";

const logos = [
  "/assets/logo-1.png",
  "/assets/logo-1.png",
  "/assets/logo-1.png",
  "/assets/logo-1.png",
  "/assets/logo-1.png",
  "/assets/logo-1.png",
  "/assets/logo-1.png",
  "/assets/logo-1.png",
  "/assets/logo-1.png",
  "/assets/logo-1.png",
  "/assets/logo-1.png",
  "/assets/logo-1.png",
];

function LogoSlideSection() {
  return (
    <section className="page-section w-full flex-col items-center">
      <div className="flex flex-col gap-6 w-full items-center">
        <span className=" text-lg sm:text-2xl font-semibold text-gray-600 dark:text-gray-400">
          50+ happy clients
        </span>

        <div className=" w-[300px] sm:w-[500px] md:w-[800px] flex flex-row mx-auto overflow-x-scroll relative no-scrollbar before:content-[''] before:absolute before:top-0 before:-left-2.5 before:w-20 md:before:w-[200px] lg:before:w-[300px] before:h-full before:bg-linear-to-r before:from-white dark:before:from-black before:via-white/70 dark:before:via-black/70 before:to-transparent before:z-10 after:content-[''] after:absolute after:top-0 after:-right-2.5 after:w-20 md:after:w-[200px] lg:after:w-[300px] after:h-full after:bg-linear-to-l after:from-white dark:after:from-black after:via-white/70 dark:after:via-black/70 after:to-transparent after:z-10 ">
          <div className="flex md:gap-6 gap-4 items-center justify-center animate-[scroll_10s_linear_infinite] pr-4 md:pr-6">
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-none md:basis-[8em] basis-[5em]  items-center justify-center"
              >
                <Image
                  src={logo}
                  alt="Client logo"
                  width={80}
                  height={40}
                  className="object-contain grayscale brightness-0 dark:brightness-0 dark:invert md:w-[100px] md:h-[50px] lg:w-[120px] lg:h-[60px]"
                />
              </div>
            ))}
          </div>
          <div className="flex md:gap-6 gap-4 items-center justify-center animate-[scroll_10s_linear_infinite] pr-4 md:pr-6">
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-none md:basis-[8em] basis-[5em]  items-center justify-center"
              >
                <Image
                  src={logo}
                  alt="Client logo"
                  width={80}
                  height={40}
                  className="object-contain grayscale brightness-0 dark:brightness-0 dark:invert md:w-[100px] md:h-[50px] lg:w-[120px] lg:h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex items-center max-w-[1000px] w-full md:my-20 my-12 gap-4">
        <span className="w-full h-0.5 bg-black dark:bg-white"></span>
        <Image
          src="/assets/quotes.svg"
          alt="Quote Icon"
          width={40}
          height={40}
          className="object-contain w-8 h-8 dark:invert"
        />
        <span className="w-full h-0.5 bg-black dark:bg-white"></span>
      </div>
      <div className="flex flex-col w-full max-w-[1300px] mx-auto gap-6">
        <p className=" text-xl sm:text-2xl md:text-3xl  text-gray-400 dark:text-gray-500 italic  leading-relaxed">
          I&apos;ve had the pleasure of working with Chris on multiple projects,
          and his expertise in Next.js and React is unparalleled. He
          consistently delivers high-quality code and innovative solutions that
          exceed expectations.
        </p>
        <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-400 self-end">
          — Jane Doe, CEO of TechStart
        </span>
      </div>
    </section>
  );
}

export default LogoSlideSection;
