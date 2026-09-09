import { site } from "@/data/site";
import { Container } from "@/components/Container";
import {
  ArrowDownIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/icons";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgb(13_148_136_/_0.11),_transparent_58%)]"
      />
      <div
        aria-hidden="true"
        className="page-grid pointer-events-none absolute inset-0 opacity-70"
      />

      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-end lg:gap-16 lg:py-28">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-800">
            {site.university} · Class of 2028
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-snug text-zinc-700 sm:text-2xl">
            {site.headline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-900 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            >
              View My Work
              <ArrowDownIcon className="h-4 w-4" />
            </a>
            <a
              href={site.resumeUrl}
              download="Ethan-Liu-Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-teal-800 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-teal-800 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_1px_2px_rgb(24_24_27_/_0.04)] sm:p-7">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Currently
          </p>
          <dl className="mt-5 space-y-4">
            <Fact label="Seeking" value={site.seeking} />
            <Fact label="Location" value={site.location} />
            <Fact
              label="Education"
              value={`${site.degree}, ${site.minor}, UMD · ${site.graduation}`}
            />
            <Fact label="GPA" value={site.gpa} />
          </dl>
        </aside>
      </Container>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-relaxed text-zinc-800">{value}</dd>
    </div>
  );
}
