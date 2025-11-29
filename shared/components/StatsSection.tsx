function StatsSection() {
  return (
    <section className="page-section">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 lg:gap-6 w-full">
        {/* Stat 1 */}
        <div className="flex flex-col items-center text-center md:basis-1/4 gap-2">
          <span className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-russo-one font-bold">
            3+
          </span>
          <span className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold">
            Years Experience
          </span>
          <span className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl text-gray-700">
            Building production applications
          </span>
        </div>

        {/* Divider - hidden on mobile */}
        <div className="hidden md:block">
          <div className="h-full w-px bg-gray-300 mx-auto"></div>
        </div>

        {/* Stat 2 */}
        <div className="flex md:basis-1/4 flex-col items-center text-center gap-2">
          <span className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-russo-one font-bold">
            1000+
          </span>
          <span className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold">
            Downloads
          </span>
          <span className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl text-gray-700">
            Propreso Chrome extension users
          </span>
        </div>

        {/* Divider - hidden on mobile */}
        <div className="hidden md:block">
          <div className="h-full w-px bg-gray-300 mx-auto"></div>
        </div>

        {/* Stat 3 */}
        <div className="flex md:basis-1/4 flex-col items-center text-center gap-2">
          <span className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-russo-one font-bold">
            10+
          </span>
          <span className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold">
            Projects Delivered
          </span>
          <span className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl text-gray-700">
            From MVP to production
          </span>
        </div>

        {/* Divider - hidden on mobile */}
        <div className="hidden md:block">
          <div className="h-full w-px bg-gray-300 mx-auto"></div>
        </div>

        {/* Stat 4 */}
        <div className="flex md:basis-1/4 flex-col items-center text-center gap-2">
          <span className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-russo-one font-bold">
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
    </section>
  );
}

export default StatsSection;
