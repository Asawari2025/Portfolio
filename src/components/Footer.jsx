import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Asawari2025",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/asawari-bhagwat-217129131/",
    Icon: FaLinkedinIn,
  },
  {
    label: "X",
    href: "https://x.com/AsawariSBhagwat",
    Icon: FaXTwitter,
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-4 py-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <a href="#hero" className="font-semibold text-primary">
              Asawari Bhagwat
            </a>
            <div className="mt-4 flex justify-center gap-4 sm:justify-start">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              Back to top
            </p>
            <a
              href="#hero"
              aria-label="Back to top"
              className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:mx-0"
            >
              <ArrowUp size={18} />
            </a>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              Get in touch
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Connect with me about engineering opportunities and projects.
            </p>
            <a
              href="#contact"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Send a message <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Asawari Bhagwat. All rights reserved.</p>
          <a
            href="mailto:asawari.bhagwat.professional@gmail.com"
            className="hover:text-primary"
          >
            asawari.bhagwat.professional@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
