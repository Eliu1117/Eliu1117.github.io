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
          title="Building software with real-world impact, always looking for opportunities to grow"
        />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            <p>
              I am a Computer Science Major and General Business Minor at{" "}
              {site.university}, graduating in {site.graduation}. I am based
              in {site.location}.
            </p>
            <p>
              I am interested in software engineering across a wide variety of
              technological disciplines, including full-stack web and mobile
              development, data science/machine learning, and UI/UX design. I
              have a passion for contributing to projects that have a clear
              impact and benefit for others.
            </p>
            <p>
              I am always excited to participate in real-world opportunities to
              expand my knowledge and contribute to meaningful projects! Right
              now, I am seeking {site.seeking} where I can gain valuable
              experience and skills that go beyond what I have learned in the
              classroom.
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
