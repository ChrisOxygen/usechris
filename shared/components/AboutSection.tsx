import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden px-10 py-24">
      {/* Layer 1 — texture background at near-invisible opacity */}
      <div className="absolute inset-0">
        <Image
          src="/assets/about-sect-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.58]"
          aria-hidden="true"
        />
      </div>

      {/* Layer 2 — section gradient, same direction as hero/projects */}
      <div className="absolute inset-0 bg-linear-to-tr from-[#130202] via-background/85 to-[#130202]" />

      {/* Layer 3 — Chris sitting, anchored to bottom-right of section */}
      <Image
        src="/assets/chris-okafor-sitting.webp"
        alt=""
        width={700}
        height={700}
        className=" absolute bottom-0 right-0 opacity-75"
        aria-hidden="true"
      />
      <div className="">
        {/* Fade: left edge blends into the section background */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/40 to-transparent" />
        {/* Fade: top edge dissolves in */}
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-transparent to-transparent" />
      </div>

      {/* Layer 4 — content (text + overlay photos) */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* ── Left: Text ── */}
        <div className="flex flex-col gap-6">
          <p className="font-squada-one text-xs text-accent uppercase tracking-[0.22em]">
            About me
          </p>

          <h2 className="font-russo-one text-3xl md:text-4xl text-foreground leading-tight">
            Developer. Designer.
            <br />
            <span className="text-accent">Builder.</span>
          </h2>

          <div className="flex flex-col gap-4 font-source-code-pro text-sm text-foreground/65 leading-relaxed">
            <p>
              I&apos;m Chris, a full-stack developer from Port Harcourt,
              Nigeria, with a background in UI/UX design that still shapes every
              interface I build.
            </p>
            <p>
              I didn&apos;t start in code. I started in pixels — designing
              layouts, thinking through flows, obsessing over spacing. Then I
              realized I could design it but had to wait for someone else to
              build it. So I learned to build.
            </p>
            <p>
              Three years later, I&apos;ve shipped a Chrome extension with over
              1,000 downloads, an invoice platform handling 500+ real
              transactions, and a visa application system with some of the most
              complex form logic I&apos;ve ever had to think through. I&apos;ve
              also built the backend operations for a business I co-founded:
              lead capture, automation, CRM — the invisible plumbing that makes
              it all run.
            </p>
            <p>
              I work across the full stack: Next.js on the front, Supabase and
              Prisma on the back, TypeScript throughout. But the design
              background never left. I still care deeply about how things{" "}
              <em className="text-foreground/85 not-italic">feel</em>, not just
              whether they work.
            </p>
            <p>
              Right now I&apos;m building Propreso into a full SaaS product, and
              I&apos;m open to full-time roles where I can do meaningful work
              with a team that takes craft seriously.
            </p>
          </div>
        </div>

        {/* ── Right: Three overlay photos, positioned over the sitting-image bg ── */}
        <div className="relative flex flex-col gap-4 items-end justify-end mt-20 pr-10">
          {/* Photo 1 — upper area */}
          <Image
            src="/assets/chris-okafor-about-3.webp"
            alt="Chris Okafor"
            height={500}
            width={500}
            className="object-cover max-w-[200px] rounded-lg aspect-4/3"
          />
          <Image
            src="/assets/chris-okafor-about-2.webp"
            alt="Chris Okafor"
            height={500}
            width={500}
            className="object-cover max-w-[200px] rounded-lg aspect-4/3"
          />
          <Image
            src="/assets/chris-okafor-about-1.webp"
            alt="Chris Okafor"
            height={500}
            width={500}
            className="object-cover max-w-[200px] rounded-lg aspect-4/3"
          />
        </div>
      </div>
    </section>
  );
}
