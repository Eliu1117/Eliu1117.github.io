export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      "Python",
      "Java",
      "C",
      "JavaScript",
      "TypeScript",
      "Swift",
      "OCaml",
      "Rust",
      "Haskell",
      "R",
    ],
  },
  {
    category: "Web",
    items: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Data & ML",
    items: ["pandas", "scikit-learn", "PyTorch", "Matplotlib"],
  },
  {
    category: "Mobile & backend",
    items: [
      "iOS development",
      "Firebase Firestore",
      "FamilyControls",
      "ManagedSettings",
      "DeviceActivity",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub"],
  },
];
