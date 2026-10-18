import {
  ArrowDown,
  BadgeCheck,
  ChartNoAxesCombined,
  GitBranch,
  PanelsTopLeft,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      <div aria-hidden="true" className="hero-art">
        <div className="hero-orbit">
          <span className="hero-orbit__satellite" />
        </div>
        <div className="hero-marker hero-marker--top-left">
          <UsersRound size={16} aria-hidden="true" />
          <span>Team leadership</span>
        </div>
        <div className="hero-marker hero-marker--top-right">
          <ShieldCheck size={16} aria-hidden="true" />
          <span>Production support</span>
        </div>
        <div className="hero-marker hero-marker--bottom-left">
          <PanelsTopLeft size={16} aria-hidden="true" />
          <span>Frontend modernization</span>
        </div>
        <div className="hero-marker hero-marker--bottom-right">
          <BadgeCheck size={16} aria-hidden="true" />
          <span>Release quality</span>
        </div>
        <div className="hero-marker hero-marker--integration">
          <GitBranch size={16} aria-hidden="true" />
          <span>GraphQL &amp; API integration</span>
        </div>
        <div className="hero-marker hero-marker--analytics">
          <ChartNoAxesCombined size={16} aria-hidden="true" />
          <span>Customer journey analytics</span>
        </div>
      </div>

      <div className="container z-10 mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Asawari
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Bhagwat
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-in-delay-4 md:text-xl">
            An experienced software developer who modernizes enterprise systems,
            leads teams through high-stake releases, and builds with quality and
            AI as force multipliers.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform flex-col items-center animate-bounce">
        <span className="mb-2 text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
