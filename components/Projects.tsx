import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="mb-12 font-serif text-2xl">Projects</h2>

        <div className="divide-y divide-line">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-3 py-8 first:pt-0 last:pb-0 md:grid-cols-[1fr_2fr] md:gap-12"
            >
              <div>
                <h3 className="font-serif text-xl">{project.title}</h3>
                <p className="mt-1 text-sm text-muted">{project.year}</p>
              </div>

              <div>
                <p className="max-w-xl text-ink/90">{project.description}</p>

                <p className="mt-3 text-sm text-muted">
                  {project.stack.join(" · ")}
                </p>

                <div className="mt-4 flex gap-6 text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="border-b border-accent text-accent hover:opacity-70"
                    >
                      Live site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="text-muted hover:text-ink"
                    >
                      Source code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
