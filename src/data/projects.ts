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
      "Hackathon web app that helps University of Maryland students select courses from academic requirements.",
    contribution:
      "I developed the degree-audit parser that converts audit information into structured data used for recommendations.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"],
    repo: {
      href: "https://github.com/JamesALin/BitCamp2026",
      label: "View repository",
    },
    repoUnavailableNote: null,
    screenshot: null,
  },
  {
    title: "GroupThink",
    summary:
      "Group-accountability iOS app that helps friends reduce distracting app usage.",
    contribution:
      "I built the Screen Time blocking engine, integrated Firebase Firestore, and spent significant time debugging and testing the app.",
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
    title: "CDC/BRFSS Health Indicators Analysis",
    summary:
      "Collaborative data science project on public health data from CDC/BRFSS health indicators.",
    contribution:
      "I contributed data cleaning, exploratory data analysis, visualizations, and machine learning analysis.",
    tags: ["Python", "pandas", "scikit-learn", "Matplotlib"],
    repo: null,
    repoUnavailableNote: "Public repository unavailable",
    screenshot: null,
  },
  {
    title: "Systems and Programming-Language Projects",
    summary:
      "Academic collection of systems and programming-language work covering low-level systems, data structures, and language implementation.",
    contribution:
      "Projects include process management (fork, exec, pipes, and redirection), concurrency (pthreads, mutexes, and barriers), graphs, binary search trees, parsers, interpreters, type checking, automata, functional programming, and memory-safe Rust.",
    tags: ["C", "Java", "OCaml", "Rust", "Haskell"],
    repo: null,
    repoUnavailableNote: "No single public repository",
    screenshot: null,
  },
];
