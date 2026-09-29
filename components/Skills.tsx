import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-[160px_1fr] md:gap-16 md:py-24">
        <h2 className="font-serif text-2xl">Skills</h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-sm text-muted">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-ink/90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
