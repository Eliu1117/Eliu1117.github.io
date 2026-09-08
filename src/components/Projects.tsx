import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { Container } from "@/components/Container";
import { Placeholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon } from "@/components/icons";

export function Projects() {
  return (
    <Section id="projects" className="bg-white/60">
      <Container>
        <SectionHeading
          id="projects"
          index="02 / Projects"
          title="Selected work"
          description="Coursework, hackathon, and collaborative projects across web, iOS, data science, and systems."
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_1px_2px_rgb(24_24_27_/_0.04)] transition-shadow hover:shadow-md motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none">
      <div className="relative flex aspect-[16/9] items-center justify-center border-b border-zinc-100 bg-[linear-gradient(135deg,_#f4fafa_0%,_#eef2f4_100%)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgb(15_118_110_/_0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(15_118_110_/_0.08)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div className="relative px-4 text-center">
          <Placeholder>screenshot not added</Placeholder>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {project.summary}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          {project.contribution}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-xs text-zinc-700"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-1">
          {project.repo ? (
            <a
              href={project.repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-800 hover:text-teal-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            >
              {project.repo.label}
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <p className="text-sm text-zinc-500">
              {project.repoUnavailableNote}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
