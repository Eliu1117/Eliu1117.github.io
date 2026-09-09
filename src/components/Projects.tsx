import Image from "next/image";
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
          description="Hackathon, iOS, and collaborative projects across web and data science."
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
  const screenshot = project.screenshot;
  const isPortrait =
    screenshot !== null && screenshot.height > screenshot.width;
  const screenshotImage = screenshot ? (
    <Image
      src={screenshot.src}
      alt={screenshot.alt}
      width={screenshot.width}
      height={screenshot.height}
      className={
        isPortrait
          ? "mx-auto h-full w-auto object-contain"
          : "h-full w-full object-cover object-top"
      }
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  ) : null;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_1px_2px_rgb(24_24_27_/_0.04)] transition-shadow hover:shadow-md motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none">
      <div
        className={`relative aspect-[16/9] overflow-hidden border-b border-zinc-100 ${
          isPortrait ? "bg-[#f3efe6]" : "bg-zinc-100"
        }`}
      >
        {screenshotImage ? (
          project.live ? (
            <a
              href={project.live.href}
              className="block h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
              aria-label={`${project.live.label}: ${project.title}`}
            >
              {screenshotImage}
            </a>
          ) : (
            screenshotImage
          )
        ) : (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgb(15_118_110_/_0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(15_118_110_/_0.08)_1px,transparent_1px)] [background-size:22px_22px]"
            />
            <div className="relative flex h-full items-center justify-center px-4 text-center">
              <Placeholder>screenshot not added</Placeholder>
            </div>
          </>
        )}
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
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 pt-1">
          {project.live ? (
            <a
              href={project.live.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-800 hover:text-teal-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            >
              {project.live.label}
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          ) : null}
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
          ) : project.live ? null : (
            <p className="text-sm text-zinc-500">
              {project.repoUnavailableNote}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
