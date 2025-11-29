import Image from "next/image";

function AboutSection() {
  return (
    <section id="about" className="page-section">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
        <div className="flex flex-col gap-4 lg:gap-6 items-center lg:basis-4/10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-russo-one flex flex-row lg:flex-col gap-3  items-center font-bold">
            <span className="">ABOUT</span>
            <span className="">CHRIS</span>
          </h2>
          <Image
            src="/assets/about-chris.jpg"
            alt="About Chris Okafor"
            width={800}
            height={800}
            className="object-cover object-[center_-60px] w-full lg:max-w-[500px] aspect-square rounded-xl lg:rounded-2xl"
          />
        </div>
        <div className="lg:basis-6/10 flex flex-col gap-4 sm:gap-5 lg:gap-6 text-base sm:text-lg lg:text-xl leading-[160%] sm:leading-[170%] text-gray-700 dark:text-gray-300">
          <p className="">
            I started my career as a graphics designer, creating visuals for
            clients before moving into web development through{" "}
            <span className="font-bold text-black dark:text-white">
              WordPress
            </span>{" "}
            and{" "}
            <span className="font-bold text-black dark:text-white">
              Elementor
            </span>
            . Building sites was exciting, but I wanted more control and deeper
            technical capabilities. That curiosity led me to dive into{" "}
            <span className="font-bold text-black dark:text-white">
              JavaScript
            </span>
            ,{" "}
            <span className="font-bold text-black dark:text-white">React</span>,
            and{" "}
            <span className="font-bold text-black dark:text-white">
              TypeScript
            </span>
            —a decision that completely transformed my career.
          </p>
          <p>
            Today, I&apos;m a full-stack developer specializing in{" "}
            <span className="font-bold text-black dark:text-white">
              Next.js
            </span>
            ,{" "}
            <span className="font-bold text-black dark:text-white">React</span>,
            and{" "}
            <span className="font-bold text-black dark:text-white">
              TypeScript
            </span>
            , helping startups and businesses build MVPs and production-ready
            applications. My design background gives me a unique edge: I
            don&apos;t just write code, I craft experiences that look great and
            work seamlessly. From authentication systems to complex dashboards,
            I build solutions that solve real problems while maintaining
            exceptional user experience.
          </p>
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
              Tech Stack:
            </h3>
            <div className="flex gap-3 sm:gap-4 text-base sm:text-lg flex-wrap">
              <div className="basis-full sm:basis-[calc(50%-0.5rem)] flex flex-col gap-2">
                <span className="font-semibold text-black dark:text-white">
                  Next.js
                </span>
                <span className="font-semibold text-black dark:text-white">
                  TypeScript
                </span>
                <span className="font-semibold text-black dark:text-white">
                  React
                </span>
              </div>
              <div className="basis-full sm:basis-[calc(50%-0.5rem)] flex flex-col gap-2">
                <span className="font-semibold text-black dark:text-white">
                  Tailwind CSS
                </span>
                <span className="font-semibold text-black dark:text-white">
                  Prisma
                </span>
                <span className="font-semibold text-black dark:text-white">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
