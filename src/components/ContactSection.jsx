import { Send } from "lucide-react";

const contactEmail = "asawari.bhagwat.professional@gmail.com";

export const ContactSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name} (${email})`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-secondary/30 px-4 py-24">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
        <div className="text-left">
          <span className="mb-3 block text-xs uppercase tracking-widest text-muted-foreground">
            Contact
          </span>
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Let’s build something{" "}
            <span className="text-primary">worth talking about.</span>
          </h2>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            Whether you’d like to discuss frontend engineering, full-stack
            development, or a collaboration, I’d be glad to hear from you.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-primary"
            />
            Open to connecting about engineering opportunities and projects
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-xs sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                Your name <span className="text-primary">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                Email address <span className="text-primary">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="What would you like to talk about?"
                className="w-full resize-y rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="cosmic-button flex w-full items-center justify-center gap-2"
            >
              <Send size={16} aria-hidden="true" />
              Send message
            </button>
            <p className="text-xs text-muted-foreground">
              This opens your email app with the message ready to send.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
