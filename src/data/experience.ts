export type ExperienceItem = {
  title: string;
  organization: string;
  dates: string | null;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "Web Strategy & Design Volunteer",
    organization: "Casa Chirilagua & InterVarsity Christian Fellowship USA",
    dates: "June 2026 – July 2026 · Alexandria, VA",
    description:
      "Worked as a community liaison and website UI/UX design volunteer in the Chirilagua neighborhood in Alexandria, partnering with Casa Chirilagua, a nonprofit serving 100+ Latino families in the region.",
  },
  {
    title: "Worship Coordinator",
    organization: "Asian American InterVarsity @ UMD",
    dates: "August 2026 – Present · College Park, MD",
    description:
      "Currently serving as the Worship Coordinator for the Asian American InterVarsity Chapter at UMD, where I lead weekly worship rehearsals and plan chapter meetings/events for a 120+ member campus ministry.",
  },
  {
    title: "Co-Founder & Operations Director",
    organization: "CS Base @ UMD",
    dates: "November 2025 – Present · College Park, MD",
    description:
      "Co-founded and currently working on establishing the University of Maryland Chapter of CS Base, a nonprofit providing programming classes to underserved communities.",
  },
  {
    title: "Student Leader | LeadXperience Cohort, Urbana 25",
    organization: "InterVarsity Christian Fellowship/USA",
    dates: "December 2025 – January 2026 · Phoenix, AZ",
    description:
      "Selected as a student leader for an international triennial conference focused on faith, leadership, and vocation, leading daily small group studies and a call to faith.",
  },
];

export const leadership: { title: string; detail?: string }[] = [];
