import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="mb-6 font-serif text-2xl">Get in touch</h2>
        <p className="max-w-md text-ink/90">
          Have a project in mind, or just want to say hello? My inbox is open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block border-b border-accent font-serif text-2xl text-accent hover:opacity-70 md:text-3xl"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex gap-6 text-sm text-muted">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              className="hover:text-ink"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
