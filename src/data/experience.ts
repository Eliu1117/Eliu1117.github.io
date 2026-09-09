export type ExperienceItem = {
  title: string;
  organization: string;
  dates: string | null;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "Co-Founder & Operations Director",
    organization: "CS Base @ UMD",
    dates: "November 2025 – Present · College Park, MD",
    description:
      "Co-founded CS Base at the University of Maryland and lead day-to-day operations for the student organization, including coordinating programs, supporting members, and keeping the group running.",
  },
  {
    title: "Web Strategy & Design Volunteer",
    organization: "Casa Chirilagua & InterVarsity USA",
    dates: "June 2026 – July 2026 · Alexandria, VA",
    description:
      "Volunteered on web strategy and design for Casa Chirilagua, a community nonprofit in Alexandria, in partnership with InterVarsity USA. Helped the organization present its programs and mission more clearly online.",
  },
];

export const leadership: { title: string; detail?: string }[] = [];
