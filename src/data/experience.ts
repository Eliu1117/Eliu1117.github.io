export type ExperienceItem = {
  title: string;
  organization: string;
  dates: string | null;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "Panda Express",
    organization: "Panda Express",
    dates: null,
    description:
      "Worked on a team of 10+ handling orders, payments, closing, cleaning, and preparation for regional inspections. The role required dependability, communication, teamwork, and consistent performance in a fast-paced environment.",
  },
  {
    title: "Assistant Soccer Coach",
    organization: "World Class Premier FC",
    dates: null,
    description:
      "Coached elementary-age players, running drills and supporting player development with attention to safety and equipment.",
  },
];

export const leadership: { title: string; detail?: string }[] = [
  { title: "Soccer team captain" },
  { title: "Clarksburg High School Ambassador" },
];
