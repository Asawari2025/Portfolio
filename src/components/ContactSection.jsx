import { CheckCircle2, Send, X } from "lucide-react";
import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

const contactEmail = "asawari.bhagwat.professional@gmail.com";

export const ContactSection = () => {
  const [toastOpen, setToastOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name} (${email})`,
    );

    setToastOpen(true);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <Toast.Provider duration={5000} swipeDirection="right">
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
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium"
                >
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
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium"
                >
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
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium"
                >
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
      <Toast.Root
        open={toastOpen}
        onOpenChange={setToastOpen}
        className="flex w-full items-start gap-3 rounded-lg border border-border bg-card p-4 text-foreground shadow-lg data-[state=open]:animate-fade-in"
      >
        <CheckCircle2
          size={20}
          className="mt-0.5 shrink-0 text-primary"
          aria-hidden="true"
        />
        <div className="flex-1">
          <Toast.Title className="font-semibold">Message ready</Toast.Title>
          <Toast.Description className="mt-1 text-sm text-muted-foreground">
            Your email app is opening with your message ready to send.
          </Toast.Description>
        </div>
        <Toast.Close
          aria-label="Close notification"
          className="rounded p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <X size={16} aria-hidden="true" />
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-[100] m-0 flex w-full max-w-[28rem] list-none flex-col items-end gap-2 p-4 outline-none" />
    </Toast.Provider>
  );
};
