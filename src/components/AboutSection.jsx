import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3-xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cls-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">
              Full-Stack Engineer & Development Lead
            </h3>
            <p className="text-muted-foreground text-xl">
              Five years inside a live airline platform have taught me how
              products behave under real pressure. I specialize in React,
              TypeScript, and Node.js, turning complex booking flows into
              dependable experiences.
            </p>
            <p className="text-muted-foreground text-xl">
              I lead by example: building test foundations from scratch,
              resolving production issues fast, and mentoring developers so
              releases ship with confidence. Currently deepening my backend and
              AI skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Frontend Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable React and Next.js interfaces for
                    high-traffic airline booking journeys.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Quality & Accessibility
                  </h4>
                  <p className="text-muted-foreground">
                    Raising the bar with automated tests, WCAG fixes, and
                    release-ready code.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Technical Leadership
                  </h4>
                  <p className="text-muted-foreground">
                    Guiding teams, aligning with architects, and owning delivery
                    from planning to production.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Backend & AI</h4>
                  <p className="text-muted-foreground">
                    Designing Node.js and MongoDB services, with LLM features in
                    active exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
