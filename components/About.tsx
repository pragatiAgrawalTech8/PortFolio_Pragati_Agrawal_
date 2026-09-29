import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-[160px_1fr] md:gap-16 md:py-24">
        <h2 className="font-serif text-2xl">About</h2>
        <p className="max-w-xl text-lg leading-relaxed text-ink/90">
          {profile.bio}
        </p>
      </div>
    </section>
  );
}
