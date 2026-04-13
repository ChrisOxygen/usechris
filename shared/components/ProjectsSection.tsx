export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="px-10 grid grid-rows-[4rem_1fr] bg-linear-to-tr from-[#130202] via-background to-[#130202]"
    >
      <div className="w-full py-16 max-w-7xl mx-auto flex flex-col gap-12 pb-60">
        <h2 className="">Some Things I’ve Built</h2>
        <div className="grid grid-cols-3">
          <div className=" row-start-1 w-full col-start-1 col-span-2 bg-red-400 aspect-5/3 "></div>
          <div className=" col-start-2 row-start-1 w-full  col-span-2  flex flex-col items-end justify-center">
            <span className="">Featured Project</span>
            <h2 className="">Halcyon Theme</h2>
            <div className="p-6 bg-black">
              <p className=" text-right">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </p>
            </div>
            <span className="">VS Code Sublime Text Atom iTerm2 Hyper</span>
          </div>
        </div>
      </div>
    </section>
  );
}
