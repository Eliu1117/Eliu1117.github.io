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
      "Kotlin",
      "SQL",
      "Dafny",
      "OCaml",
      "Rust",
      "Haskell",
      "R",
    ],
  },
  {
    category: "Web",
    items: ["HTML", "React", "Next.js", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Data & ML",
    items: ["pandas", "scikit-learn", "PyTorch", "Matplotlib"],
  },
  {
    category: "Mobile & backend",
    items: [
      "iOS development",
      "SwiftUI",
      "Firebase Firestore",
      "FamilyControls",
      "ManagedSettings",
      "DeviceActivity",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "Cursor",
      "VSCode",
      "Eclipse",
      "Jupyter Notebook",
      "Android Studio",
      "XCode",
    ],
  },
];
