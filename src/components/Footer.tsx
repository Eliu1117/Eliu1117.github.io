import { site } from "@/data/site";
import { Container } from "@/components/Container";
import { GitHubIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} {site.name}. {site.degree},{" "}
          {site.university}.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-zinc-700 hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a
            href="#top"
            className="font-medium text-zinc-700 hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
          >
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
