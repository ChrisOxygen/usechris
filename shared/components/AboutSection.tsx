import Image from "next/image";
import FadeIn from "@/shared/components/FadeIn";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 sm:px-12 py-18 lg:py-24"
    >
      {/* Layer 1 — texture background at near-invisible opacity */}
      {/* <div className="absolute inset-0">
        <Image
          src="/assets/about-sect-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.58]"
          aria-hidden="true"
        />
      </div> */}

      {/* Layer 2 — section gradient, same direction as hero/projects */}
      <div className="absolute inset-0 " />

      {/* Layer 3 — Chris sitting, anchored to bottom-right of section */}
      <Image
        src="/assets/chris-okafor-sitting.webp"
        alt=""
        width={700}
        height={700}
        className="absolute bottom-0 md:right-0 -right-40 opacity-55 w-[700px] h-[700px]"
        aria-hidden="true"
      />

      {/* Layer 4 — content (text + overlay photos) */}
      <div className="relative z-10 max-w-3xl lg:max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* ── Left: Text ── */}
        <FadeIn className="flex flex-col gap-6">
          <h2 className="font-russo-one text-3xl min-[420px]:text-4xl text-foreground leading-tight">
            I design, build, and ship products{" "}
            <span className="text-accent">people actually use</span>
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
        </FadeIn>

        {/* ── Right: Three overlay photos, positioned over the sitting-image bg ── */}
        <div className="relative flex flex-col gap-4 lg:items-end items-start justify-end md:mt-20 md:pr-10">
          {/* Photo 1 — upper area */}
          <FadeIn>
            <Image
              src="/assets/chris-okafor-about-3.webp"
              alt="Chris Okafor"
              height={500}
              width={500}
              className="object-cover max-w-[250px] shadow-2xl rounded-lg aspect-4/3"
            />
          </FadeIn>
          <FadeIn delayClass="delay-100">
            <Image
              src="/assets/chris-okafor-about-2.webp"
              alt="Chris Okafor"
              height={500}
              width={500}
              className="object-cover max-w-[250px] shadow-2xl rounded-lg aspect-4/3"
            />
          </FadeIn>
          <FadeIn delayClass="delay-200">
            <Image
              src="/assets/chris-okafor-about-1.webp"
              alt="Chris Okafor"
              height={500}
              width={500}
              className="object-cover max-w-[250px] shadow-2xl rounded-lg aspect-4/3"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
