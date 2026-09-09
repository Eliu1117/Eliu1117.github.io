import { education } from "@/data/education";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionHeading id="education" index="05 / Education" title="Education" />
        <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-5 sm:flex sm:items-baseline sm:justify-between sm:gap-8 sm:px-8 sm:py-6">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 sm:text-base">
              {education.minor}
            </p>
            <p className="mt-1 text-sm text-zinc-600 sm:text-base">
              {education.school}
            </p>
            <p className="mt-3 text-sm font-medium text-zinc-800">
              {education.honors}
            </p>
          </div>
          <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm sm:mt-0 sm:justify-end">
            <div>
              <dt className="text-zinc-500">Graduation</dt>
              <dd className="font-medium text-zinc-800">{education.expected}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">GPA</dt>
              <dd className="font-medium text-zinc-800">{education.gpa}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </Section>
  );
}
