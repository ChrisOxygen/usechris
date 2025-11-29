function StatsSection() {
  return (
    <section className="page-section">
      <div className="flex flex-col gap-6 sm:gap-0 w-full">
        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:border-b-3 sm:border-gray-300 xl:border-b-0">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center sm:basis-1/2 xl:basis-1/4 gap-2 pb-6 border-b-2 border-gray-300 sm:border-b-0 sm:py-8 xl:py-0 sm:pr-8 xl:pr-0 sm:border-r-3 sm:border-gray-300 xl:border-r-3">
            <span className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-russo-one font-bold">
              3+
            </span>
            <span className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold">
              Years Experience
            </span>
            <span className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl text-gray-700">
              Building production applications
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center sm:basis-1/2 xl:basis-1/4 gap-2 pb-6 border-b-2 border-gray-300 sm:border-b-0 sm:py-8 xl:py-0 sm:pl-8 xl:px-0 xl:border-r-3 xl:border-gray-300">
            <span className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-russo-one font-bold">
              1000+
            </span>
            <span className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold">
              Downloads
            </span>
            <span className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl text-gray-700">
              Propreso Chrome extension users
            </span>
          </div>

          {/* Stat 3 - Visible only on XL */}
          <div className="hidden xl:flex flex-col items-center text-center xl:basis-1/4 gap-2 xl:border-r-3 xl:border-gray-300">
            <span className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-russo-one font-bold">
              10+
            </span>
            <span className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold">
              Projects Delivered
            </span>
            <span className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl text-gray-700">
              From MVP to production
            </span>
          </div>

          {/* Stat 4 - Visible only on XL */}
          <div className="hidden xl:flex flex-col items-center text-center xl:basis-1/4 gap-2">
            <span className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-russo-one font-bold">
              100%
            </span>
            <span className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold">
              Client Satisfaction
            </span>
            <span className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl text-gray-700">
              On Upwork and freelance platforms
            </span>
          </div>
        </div>

        {/* Row 2 - Hidden on XL */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 xl:hidden">
          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center sm:basis-1/2 gap-2 pb-6 border-b-2 border-gray-300 sm:border-b-0 sm:py-8 sm:pr-8 sm:border-r-3 sm:border-gray-300">
            <span className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-russo-one font-bold">
              10+
            </span>
            <span className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold">
              Projects Delivered
            </span>
            <span className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl text-gray-700">
              From MVP to production
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center text-center sm:basis-1/2 gap-2 sm:py-8 sm:pl-8">
            <span className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-russo-one">
              100%
            </span>
            <span className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold">
              Client Satisfaction
            </span>
            <span className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl text-gray-700">
              On Upwork and freelance platforms
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
