import ChrisOkaforTextSvgComponent from "@/shared/components/ChrisOkaforTextSvgComponent";
import FSDTextSvgComponent from "@/shared/components/FSDTextSvgComponent";

function HeroSection() {
  return (
    <section className="page-section">
      <span className=" ml-2 lg:mb-6 mb-3 md:text-2xl lg:text-3xl lg:max-w-[900px] font-semibold text-gray-500 dark:text-gray-400">
        Hi I&apos;m,
      </span>
      <div className="flex flex-col gap-3 md:gap-8">
        <ChrisOkaforTextSvgComponent
          className="w-full [&_path]:stroke-black [&_path]:dark:stroke-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        />
        <FSDTextSvgComponent className="[&_path]:fill-black [&_path]:dark:fill-white" />
      </div>
      <div className="flex w-full flex-col lg:flex-row gap-8 justify-between mt-6 lg:mt-10 xl:mt-16 ">
        <p className=" md:text-2xl lg:text-2xl lg:max-w-[900px] font-semibold text-gray-500 dark:text-gray-400 lg:basis-2/3 basis-full">
          3+ Years Building Scalable Web Apps with Next.js, React & TypeScript |
          MVP Development Expert
        </p>
        <div className=" flex flex-col md:flex-row gap-4 w-full basis-1/2">
          <button className="font-semibold shrink-0 text-lg sm:text-xl md:text-2xl basis-1/2 text-black dark:text-white border-2 sm:border-3 border-black dark:border-white rounded-lg px-6 py-3 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            Let&apos;s Talk
          </button>
          <button className="font-semibold shrink-0 text-lg sm:text-xl md:text-2xl basis-1/2 text-black dark:text-white border-2 sm:border-3 border-black dark:border-white rounded-lg px-6 py-3 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
