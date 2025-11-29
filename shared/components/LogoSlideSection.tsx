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
    <section className="page-section w-full">
      <div className="flex flex-col gap-6 w-full items-center">
        <span className=" text-lg sm:text-2xl font-semibold text-gray-600">
          50+ happy clients
        </span>
        <div className="w-full overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-20 md:before:w-[200px] lg:before:w-[300px] before:h-full before:bg-linear-to-r before:from-white before:via-white/70 before:to-transparent before:z-10 after:content-[''] after:absolute after:top-0 after:right-0 after:w-20 md:after:w-[200px] lg:after:w-[300px] after:h-full after:bg-linear-to-l after:from-white after:via-white/70 after:to-transparent after:z-10">
          <div className="flex gap-6  md:gap-8 lg:gap-12 will-change-transform">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`duplicate-${index}`} className="shrink-0">
                <Image
                  src={logo}
                  alt="Client logo"
                  width={80}
                  height={40}
                  className="object-contain grayscale brightness-0 md:w-[100px] md:h-[50px] lg:w-[120px] lg:h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSlideSection;
