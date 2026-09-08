import { interests, site } from "@/data/site";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          id="about"
          index="01 / About"
          title="Building software, looking for a place to grow."
          description={`I'm a Computer Science major at ${site.university}, graduating in ${site.graduation}. I'm based in ${site.location}.`}
        />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            <p>
              I&apos;m interested in software engineering across the stack — full-stack
              web, mobile, data science and machine learning, systems
              programming, and technical project work. I like taking a messy
              requirement and turning it into something people can actually use,
              whether that is parsing a degree audit into structured
              recommendations or building Screen Time controls into an iOS app.
            </p>
            <p>
              I&apos;m seeking {site.seeking}. I want a team where I can write
              production code, learn from experienced engineers, and ship work
              that is useful.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
              Interests
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
