import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-28">
      <p className="animate-fade-up delay-1 mb-6 text-sm text-muted">{profile.role} · {profile.location}</p>

      <h1 className="animate-fade-up delay-2 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
        {profile.tagline}
      </h1>

      <div className="animate-fade-up delay-3 mt-10 flex flex-wrap items-center gap-6">
        <a
          href="#projects"
          className="border-b border-accent pb-0.5 text-sm font-medium text-accent transition-opacity hover:opacity-70"
        >
          See my work
        </a>
        <a
          href={profile.resumeUrl}
          className="text-sm text-muted transition-colors hover:text-ink"
        >
          Download resume
        </a>
      </div>
    </section>
  );
}
