export const profile = {
  name: "Pragati Agrawal",
  role: "Frontend Developer",
  location: "Raipur, India",
  tagline: "I build fast, accessible web interfaces — mostly in React and TypeScript.",
  bio: "I'm a developer who cares about the details most people skip: load time, keyboard focus, the way a button feels when you press it. Outside of work I like reading, chess and terrible puns.",
  email: "pragati6.tech@gmail.com",
  resumeUrl: "/Pragati_Agrawal.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/pragatiAgrawalTech8" },
    { label: "LinkedIn", url: "https://linkedin.com/in/pragati-agrawal-tech5" },
    // { label: "Twitter", url: "https://twitter.com/yourusername" },
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "HTML & CSS"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "Node.js", "Express"],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "Vercel"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "Supabase"],
  },
];

export type Project = {
  title: string;
  year: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Project One(DigamberMart)",
    year: "2026",
    description:"Latest Crockery at Best Prices Discover premium-quality crockery that brings elegance and style to every meal. Perfect for everyday dining and special occasions",
    stack: ["React.js", "Nodejs", "Tailwind"],
    liveUrl: "https://www.digambermart.com",
    githubUrl: "https://github.com/pragatiAgrawalTech8/Digamber-Mart-frontend",
  },
  {
    title: "Project Two(online-library-system)",
    year: "2025",
    description:
      "A short, specific description of what this project does and the problem it solves for its users.",
    stack: ["Reactjs"],
    liveUrl: "https://online-library-system-79s8.vercel.app/",
    githubUrl: "https://github.com/pragatiAgrawalTech8/Online-Library-System",
  },
  {
    title: "Project Three(You-Tube-Clone)",
    year: "2025",
    description:
      "A short, specific description of what this project does and the problem it solves for its users.",
    stack: ["Tailwind", "Reactjs", "Nodejs"],
    liveUrl:"https://you-tube-clone-frontend-delta.vercel.app/",
    githubUrl: "https://github.com/pragatiAgrawalTech8/YouTube_clone_Frontend",
  },
];
