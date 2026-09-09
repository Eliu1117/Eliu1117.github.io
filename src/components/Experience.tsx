import { experience, leadership } from "@/data/experience";
import { Container } from "@/components/Container";
import { Placeholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          id="experience"
          index="03 / Experience"
          title="Work and leadership"
          description="Student-organization operations at Maryland and volunteer web strategy work for a community nonprofit."
        />
        <ol className="relative space-y-0 border-l border-zinc-200 pl-6 sm:pl-8">
          {experience.map((item) => (
            <li key={`${item.organization}-${item.title}`} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[1.54rem] top-1.5 h-3 w-3 rounded-full border-2 border-teal-800 bg-zinc-50 sm:-left-[2.04rem]"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                  {item.title}
                  {item.title !== item.organization ? (
                    <span className="font-medium text-zinc-600">
                      {" "}
                      · {item.organization}
                    </span>
                  ) : null}
                </h3>
                {item.dates ? (
                  <p className="text-sm text-zinc-500">{item.dates}</p>
                ) : (
                  <Placeholder>dates not provided</Placeholder>
                )}
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                {item.description}
              </p>
            </li>
          ))}
        </ol>

        {leadership.length > 0 ? (
          <div className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
              Leadership
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {leadership.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-800"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
