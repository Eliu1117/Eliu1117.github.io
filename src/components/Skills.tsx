import { skillGroups } from "@/data/skills";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <Section id="skills" className="bg-white/60">
      <Container>
        <SectionHeading
          id="skills"
          index="04 / Skills"
          title="Technical skills"
          description="Languages, frameworks, and tools I use in coursework and project work. Grouped by area — not self-scored."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_1px_2px_rgb(24_24_27_/_0.04)]"
            >
              <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
