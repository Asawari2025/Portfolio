import { useEffect, useState } from "react";

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    category: "frontend",
    logo: "html5",
    logoColor: "E34F26",
    level: 5,
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    logo: "javascript",
    logoColor: "F7DF1E",
    level: 5,
  },
  {
    name: "TypeScript",
    category: "frontend",
    logo: "typescript",
    logoColor: "3178C6",
    level: 5,
  },
  {
    name: "React",
    category: "frontend",
    logo: "react",
    logoColor: "61DAFB",
    level: 5,
  },
  {
    name: "Next.js",
    category: "frontend",
    logo: "nextdotjs",
    logoColor: "000000",
    level: 5,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    logo: "tailwindcss",
    logoColor: "06B6D4",
    level: 5,
  },
  {
    name: "GraphQL",
    category: "frontend",
    logo: "graphql",
    logoColor: "E10098",
    level: 5,
  },

  // Backend
  {
    name: "Node",
    category: "backend",
    logo: "nodedotjs",
    logoColor: "5FA04E",
    level: 4,
  },
  {
    name: "Express",
    category: "backend",
    logo: "express",
    logoColor: "000000",
    level: 4,
  },
  {
    name: "MongoDB",
    category: "backend",
    logo: "mongodb",
    logoColor: "47A248",
    level: 4,
  },
  {
    name: "Mongoose",
    category: "backend",
    logo: "mongoose",
    logoColor: "880000",
    level: 4,
  },
  { name: "REST APIs", category: "backend", logoLabel: "API", level: 4 },
  {
    name: "Hono.js",
    category: "backend",
    logo: "hono",
    logoColor: "E36002",
    level: 3,
  },
  {
    name: "Appwrite",
    category: "backend",
    logo: "appwrite",
    logoColor: "F02E65",
    level: 3,
  },

  // Tools
  {
    name: "git/GitHub",
    category: "tools",
    logo: "github",
    logoColor: "181717",
    level: 5,
  },
  {
    name: "Jest",
    category: "tools",
    logo: "jest",
    logoColor: "C21325",
    level: 4,
  },
  { name: "Prova", category: "tools", logoLabel: "P", level: 3 },
  {
    name: "Google Analytics (GA4)",
    category: "tools",
    logo: "googleanalytics",
    logoColor: "E37400",
    level: 4,
  },
  {
    name: "OKD",
    category: "tools",
    logo: "okd",
    logoColor: "326CE5",
    level: 5,
  },
  {
    name: "Postman",
    category: "tools",
    logo: "postman",
    logoColor: "FF6C37",
    level: 4,
  },
  { name: "CI/CD", category: "tools", logoLabel: "CI", level: 3 },
];

const categories = [
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "tools", name: "Tools & Technologies" },
];

const SkillLogo = ({ skill }) => {
  const [hasError, setHasError] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      typeof window !== "undefined" &&
      window.localStorage.getItem("theme") === "dark",
  );
  const label = skill.logoLabel ?? skill.name.slice(0, 2).toUpperCase();

  useEffect(() => {
    const syncTheme = () => {
      setIsDarkMode(window.localStorage.getItem("theme") === "dark");
    };

    window.addEventListener("themechange", syncTheme);
    window.addEventListener("storage", syncTheme);

    return () => {
      window.removeEventListener("themechange", syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  if (!skill.logo || hasError) {
    return (
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded bg-primary/15 text-xs font-bold text-primary"
      >
        {label}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${skill.logo}/${isDarkMode ? "FFFFFF" : skill.logoColor ?? "000000"}`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      onError={() => setHasError(true)}
      className="h-8 w-8 rounded-md p-1 object-contain"
      style={{ backgroundColor: isDarkMode ? "#1e293b" : "#f1f5f9" }}
    />
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3-xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-xl font-semibold text-primary mb-5">
                {category.name}
              </h3>
              <div className="space-y-3">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-3 border border-transparent bg-card p-4 rounded-lg shadow-xs card-hover text-foreground hover:border-primary hover:text-glow"
                    >
                      <SkillLogo skill={skill} />
                      <span className="text-center">{skill.name}</span>
                      <div
                        className="flex w-fit self-center justify-center gap-1"
                        role="img"
                        aria-label={`${skill.level} out of 5 proficiency`}
                      >
                        {Array.from({ length: skill.level }, (_, index) => (
                          <span
                            key={index}
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full bg-primary"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
