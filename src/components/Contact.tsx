import type { ReactNode } from "react";
import { site } from "@/data/site";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          id="contact"
          index="06 / Contact"
          title="Let’s talk."
          description="I’m currently seeking Summer 2027 software engineering and technology internships, and I’m open to collaborating on technical projects. If you’re a recruiter or you’d like to work together, I’d be glad to hear from you."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          <ContactCard
            icon={<MailIcon className="h-5 w-5" />}
            label="Email"
            value={site.email}
            href={`mailto:${site.email}`}
          />
          <ContactCard
            icon={<PhoneIcon className="h-5 w-5" />}
            label="Phone"
            value={site.phone}
            href={site.phoneHref}
          />
          <ContactCard
            icon={<GitHubIcon className="h-5 w-5" />}
            label="GitHub"
            value={site.githubLabel}
            href={site.github}
          />
          <ContactCard
            icon={<LinkedInIcon className="h-5 w-5" />}
            label="LinkedIn"
            value={site.linkedinLabel}
            href={site.linkedin}
          />
        </ul>
      </Container>
    </Section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <li className="rounded-2xl border border-zinc-200 bg-white p-5">
      <p className="flex items-center gap-2 text-sm font-medium text-zinc-500">
        <span className="text-teal-800">{icon}</span>
        {label}
      </p>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-label={
          isExternal
            ? `${label}: ${value} (opens in a new tab)`
            : `${label}: ${value}`
        }
        className="mt-2 inline-block break-all text-base font-medium text-zinc-900 hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
      >
        {value}
      </a>
    </li>
  );
}
