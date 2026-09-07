const skills = [
  {
    name: "HTML",
    description: "Semantic markup and accessible page structure.",
  },
  {
    name: "CSS",
    description: "Layouts, styling, and responsive design.",
  },
  {
    name: "JS",
    description: "Interactive features and dynamic pages.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Riasat Ali
          </a>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <a href="#skills" className="transition-colors hover:text-foreground">
              Skills
            </a>
            <a
              href="#contact"
              className="rounded-full bg-accent px-4 py-2 font-medium text-zinc-950 transition-opacity hover:opacity-90"
            >
              Hire me
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex flex-1 flex-col">
        <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Frontend Developer
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl">
            Hi, I&apos;m Riasat Ali
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            I build clean, responsive websites with HTML, CSS, and JavaScript.
            Let&apos;s turn your idea into a site people enjoy using.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex w-fit rounded-full bg-accent px-6 py-3 text-base font-semibold text-zinc-950 transition-opacity hover:opacity-90"
          >
            Hire me
          </a>
        </section>

        <section
          id="skills"
          className="border-t border-border bg-card"
        >
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
            <p className="mt-3 max-w-xl text-muted">
              The core tools I use to design and build for the web.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-3">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <h3 className="font-mono text-xl font-semibold text-accent">
                    {skill.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {skill.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="border-t border-border">
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-semibold tracking-tight">
              Let&apos;s work together
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-8 text-muted">
              Open to freelance projects and full-time roles. If you need a
              frontend developer, I&apos;d love to hear from you.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl px-6 py-6 text-sm text-muted">
          © {new Date().getFullYear()} Riasat Ali
        </div>
      </footer>
    </div>
  );
}
