export type ProjectLink = {
  href: string;
  label: string;
};

export type Project = {
  title: string;
  summary: string;
  contribution: string;
  tags: string[];
  repo: ProjectLink | null;
  repoUnavailableNote: string | null;
  /** PLACEHOLDER until real screenshots are added to /public/projects */
  screenshot: null;
};

export const projects: Project[] = [
  {
    title: "UMD Course Recommender",
    summary:
      "Hackathon web app that helps University of Maryland Computer Science students select courses from academic requirements, giving personalized responses based on information from their uAchieve degree audit.",
    contribution:
      "I contributed to the degree-audit parser that converts audit information into structured data used for recommendations.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"],
    repo: {
      href: "https://github.com/Eliu1117/umd-course-recommender",
      label: "View repository",
    },
    repoUnavailableNote: null,
    screenshot: null,
  },
  {
    title: "GroupThink",
    summary:
      "Group-based study hall app that helps friends study together, blocking distracting apps in real time.",
    contribution:
      "I contributed to the architecture, design, and implementation of the app, working with SwiftUI, Apple's Screen Time controls, and Firebase Firestore to deliver a polished, functional app.",
    tags: [
      "Swift",
      "iOS",
      "Firebase Firestore",
      "FamilyControls",
      "ManagedSettings",
      "DeviceActivity",
      "Git",
    ],
    repo: {
      href: "https://github.com/Eliu1117/GroupThink",
      label: "View repository",
    },
    repoUnavailableNote: null,
    screenshot: null,
  },
  {
    title: "Diabetes Risk Prediction from CDC Health Indicators",
    summary:
      "Collaborative data science project predicting diabetes risk from CDC/BRFSS health indicators.",
    contribution:
      "I cleaned and validated a 70,692-record survey extract, ran statistical tests across 21 indicators, and authored the primary analysis write-up for logistic regression and SVM models.",
    tags: ["Python", "pandas", "SciPy", "scikit-learn", "Matplotlib"],
    repo: {
      href: "https://github.com/Eliu1117/diabetes-risk-brfss",
      label: "View repository",
    },
    repoUnavailableNote: null,
    screenshot: null,
  },
];
