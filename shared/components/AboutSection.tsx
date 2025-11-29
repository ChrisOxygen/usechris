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
        <div className="lg:basis-6/10 flex flex-col gap-4 sm:gap-5 lg:gap-6 text-base sm:text-lg lg:text-xl leading-[160%] sm:leading-[170%] text-gray-700">
          <p className="">
            I started my career as a graphics designer, creating visuals for
            clients before moving into web development through{" "}
            <span className="font-bold text-black">WordPress</span> and{" "}
            <span className="font-bold text-black">Elementor</span>. Building
            sites was exciting, but I wanted more control and deeper technical
            capabilities. That curiosity led me to dive into{" "}
            <span className="font-bold text-black">JavaScript</span>,{" "}
            <span className="font-bold text-black">React</span>, and{" "}
            <span className="font-bold text-black">TypeScript</span>—a decision
            that completely transformed my career.
          </p>
          <p>
            Today, I&apos;m a full-stack developer specializing in{" "}
            <span className="font-bold text-black">Next.js</span>,{" "}
            <span className="font-bold text-black">React</span>, and{" "}
            <span className="font-bold text-black">TypeScript</span>, helping
            startups and businesses build MVPs and production-ready
            applications. My design background gives me a unique edge: I
            don&apos;t just write code, I craft experiences that look great and
            work seamlessly. From authentication systems to complex dashboards,
            I build solutions that solve real problems while maintaining
            exceptional user experience.
          </p>
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3 className="text-xl sm:text-2xl font-bold text-black">
              Tech Stack:
            </h3>
            <div className="flex gap-3 sm:gap-4 text-base sm:text-lg flex-wrap">
              <div className="basis-full sm:basis-[calc(50%-0.5rem)] flex flex-col gap-2">
                <span className="font-semibold text-black">Next.js</span>
                <span className="font-semibold text-black">TypeScript</span>
                <span className="font-semibold text-black">React</span>
              </div>
              <div className="basis-full sm:basis-[calc(50%-0.5rem)] flex flex-col gap-2">
                <span className="font-semibold text-black">Tailwind CSS</span>
                <span className="font-semibold text-black">Prisma</span>
                <span className="font-semibold text-black">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
