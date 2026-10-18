import { ArrowRight, Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    role: "Associate Development Lead",
    company: "People10 Technologies Inc. · Airline client project · Remote",
    period: "Mar 2026 – Present",
    summary:
      "Lead delivery and production support across two development teams for an airline platform.",
    achievements: [
      "Coordinated delivery for four developers, tracking progress, reviewing pull requests, and mentoring and onboarding teammates to support on-time releases with minimal bugs.",
      "Managed production defect triage and release-branch deployments using Jira, ServiceNow, Jenkins, GitHub Actions, and Bitbucket; improved release stability by 40% through daily status tracking.",
      "Analyzed requirements with architects and stakeholders using Jira, Confluence, Microsoft Office, Azure DevOps, and SharePoint, reducing rework by 25% by identifying gaps and conflicts before release.",
      "Accelerated content migration by 40% through research on Contentful models, JavaScript Object Notation (JSON), asset imports, and API-token authentication across two teams.",
    ],
    technologies: [
      "Jira",
      "Jenkins",
      "GitHub Actions",
      "Bitbucket",
      "SharePoint",
      "JSON",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "People10 Technologies Inc. · Airline client project",
    period: "Mar 2023 - Feb 2026",
    summary:
      "Built customer-facing booking features and improved clarity and tracking across high-traffic airline journeys.",
    achievements: [
      "Introduced a Bag Fee Calculator using Stimulus controllers, Resize Observers, React, JavaScript, HTML, CSS, Jest, Webpack, and GraphQL, serving 5 million travelers annually; reduced booking-clarification inquiries by 50% with mandatory-fee disclosures and rate-detail modals.",
      "Engineered cart-override logic and GraphQL query mappings with Next.js, React, GraphQL, and Postman, enabling query-formation integration and combined Flight + Bundle workflows.",
      "Built a deep-link form for the new stadium booking flow with JavaScript, React, TypeScript, and APIs, adding automatic data population, fallback safeguards, and edge-case validation to increase stadium bookings.",
      "Configured GA4 event tracking across key user journeys and validated booking-flow responsiveness, improving tracking accuracy and visibility into user interactions.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Jest",
      "Webpack",
      "GraphQL",
      "Next.js",
      "Postman",
      "Google Analytics 4",
    ],
  },
  {
    role: "Software Engineer",
    company: "People10 Technologies Inc. · Airline client project",
    period: "Nov 2021 – Feb 2023",
    summary:
      "Helped modernize a legacy airline website as part of a customer-facing rebrand.",
    achievements: [
      "Transformed 50+ customer pages with React.js, Next.js, and TypeScript, delivering the rebrand while preserving core functionality and adding targeted updates.",
      "Wrote unit tests and supported middleware integration to deliver the work on schedule.",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Unit testing"],
  },
];

function ExperienceCard({ experience }) {
  return (
    <article className="group w-full rounded-lg border border-border bg-card text-left shadow-xs transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="h-0.5 rounded-t-lg bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
      <div className="p-6 sm:p-7">
        <h3 className="text-lg font-semibold leading-snug">
          {experience.role}
        </h3>
        <p className="mt-1 font-medium text-primary">{experience.company}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {experience.period}
        </p>

        <p className="mt-4 border-l-2 border-primary/40 pl-3 text-sm italic leading-relaxed text-muted-foreground">
          {experience.summary}
        </p>

        <div className="mb-3 mt-5 flex items-center gap-2">
          <TrendingUp
            size={14}
            className="shrink-0 text-primary"
            aria-hidden="true"
          />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Highlights
          </span>
        </div>
        <ul className="space-y-2.5">
          {experience.achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
            >
              <ArrowRight
                size={15}
                className="mt-1 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export const ExperienceSection = () => {
  return (
    <section id="experience" className="overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="mb-3 block text-xs uppercase tracking-widest text-muted-foreground">
            The Journey
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Where I’ve made <span className="text-primary">impact</span>
          </h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Growing from modernizing customer-facing airline pages to delivering
            booking features and leading engineering teams, production support,
            and releases.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-3.5 top-6 w-0.5 bg-gradient-to-b from-primary/50 via-border to-transparent md:left-1/2 md:-translate-x-1/2"
          />
          <div className="space-y-8 md:space-y-5">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={experience.role}
                  className="relative grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-3 md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:gap-0"
                >
                  <div className="relative z-10 mt-5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-card text-primary md:col-start-2 md:row-start-1 md:mx-auto md:mt-5 md:h-10 md:w-10">
                    <Briefcase size={15} aria-hidden="true" />
                  </div>

                  <div
                    className={`min-w-0 md:row-start-1 ${
                      isLeft
                        ? "md:col-start-1 md:pr-8"
                        : "md:col-start-3 md:pl-8"
                    }`}
                  >
                    <ExperienceCard experience={experience} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
