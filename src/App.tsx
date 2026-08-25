import { useState } from "react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Navbar */}
      {/* ==================== NAVBAR ==================== */}

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

          {/* Logo */}

          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold tracking-tight"
          >
            Mohamed Afrath
            <span className="text-blue-500">.</span>
          </a>


          {/* Desktop Navigation */}

          <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#education" className="transition hover:text-white">
              Education
            </a>

            <a href="#recognition" className="transition hover:text-white">
              Recognition
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>

          </div>


          {/* Desktop CTA */}

          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-xs font-medium transition hover:border-white/40 hover:bg-white hover:text-black md:block"
          >
            Let's Talk
          </a>


          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-white/30 hover:text-white md:hidden"
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>

        </div>


        {/* Mobile Navigation */}

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#0a0a0a] md:hidden">

            <div className="mx-auto max-w-6xl px-6 py-5">

              <div className="flex flex-col">

                {[
                  ["About", "#about"],
                  ["Experience", "#experience"],
                  ["Projects", "#projects"],
                  ["Skills", "#skills"],
                  ["Education", "#education"],
                  ["Recognition", "#recognition"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-white/5 py-4 text-sm text-gray-400 transition hover:text-white"
                  >
                    {label}
                  </a>
                ))}

              </div>


              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-5 block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Let's Talk
              </a>

            </div>

          </div>
        )}

      </nav>


      {/* Hero */}
      <section className="relative flex min-h-screen items-center px-6 pt-20">

        <div className="absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">

          {/* Hero Text */}
          <div className="animate-fade-up">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Software Developer
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Building scalable
              <br />
              <span className="text-gray-300">
                software & AI-powered
              </span>
              <br />
              solutions<span className="text-blue-500">.</span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-gray-300">
              C# · .NET · ASP.NET Core · Angular · AI/GenAI
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Software Developer with 3+ years of professional experience
              building backend and full-stack applications using C#, .NET,
              ASP.NET Core, SQL Server and Angular.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-gray-500">
              MSc in Computing (Artificial Intelligence) graduate from Dublin
              City University, with a strong interest in Generative AI,
              intelligent systems and modern software development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
              >
                View Projects →
              </a>

              <a
                href="/Afrath-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:border-white/50 hover:bg-white/5"
              >
                Download CV ↓
              </a>

            </div>

            <div className="mt-10 flex gap-6 text-sm text-gray-400">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:your-email@example.com"
                className="hover:text-white"
              >
                Email
              </a>

            </div>

          </div>


          {/* Profile */}
          <div className="hidden animate-fade-up justify-center md:flex">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

              {/* Outer Ring */}
              <div className="relative animate-float rounded-full border border-blue-500/30 p-3">
                <img
                  src="/profile.jpg"
                  alt="Mohamed Afrath"
                  className="h-80 w-80 rounded-full object-cover"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#111111] px-5 py-2 shadow-xl">
                <p className="text-center text-xs text-gray-300">
                  Dublin, Ireland
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>


      {/* What I Do */}
      <section
        id="what-i-do"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            What I Do
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                &lt;/&gt;
              </div>

              <h3 className="text-xl font-semibold">
                Backend Development
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Building reliable APIs and backend services using C#,
                .NET and ASP.NET Core, with a focus on maintainability
                and performance.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["C#", ".NET", "ASP.NET Core", "REST APIs"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                ◇
              </div>

              <h3 className="text-xl font-semibold">
                Full-Stack Development
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Developing end-to-end applications by combining backend
                services, Angular interfaces and relational databases.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Angular", "TypeScript", "SQL Server", "Azure"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                ✦
              </div>

              <h3 className="text-xl font-semibold">
                AI & GenAI
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Developing intelligent applications using NLP, transformer
                models, LLMs and Generative AI techniques to solve practical
                problems.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "NLP", "LLMs", "Transformers"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-28"
      >

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <div className="mt-8 grid gap-12 md:grid-cols-2">

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Building software with a focus on
              <span className="text-blue-500">
                {" "}quality and impact.
              </span>
            </h2>

            <div className="space-y-5 leading-8 text-gray-400">

              <p>
                I'm a software developer with professional experience
                designing and developing backend and full-stack applications.
              </p>

              <p>
                My core experience is in the Microsoft technology ecosystem,
                particularly C#, .NET, ASP.NET Core and SQL Server, alongside
                frontend development with Angular.
              </p>

              <p>
                My MSc in Computing with a specialization in Artificial
                Intelligence has given me experience working with NLP,
                transformer models, LLMs and Generative AI applications.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Skills */}
      {/* ==================== SKILLS ==================== */}

      <section
        id="skills"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            Technical Skills
          </p>

          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              My technology stack.
            </h2>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Technologies I use to build backend, full-stack and
              AI-powered applications.
            </p>
          </div>


          {/* Skills Grid */}

          <div className="mt-12 grid gap-5 md:grid-cols-2">


            {/* Backend */}

            <SkillGroup
              number="01"
              title="Backend Development"
              description="Building APIs and server-side applications with the .NET ecosystem."
              skills={[
                "C#",
                ".NET",
                "ASP.NET Core",
                "REST APIs",
                "ADO.NET",
              ]}
            />


            {/* Frontend */}

            <SkillGroup
              number="02"
              title="Frontend Development"
              description="Developing responsive and interactive web applications."
              skills={[
                "Angular",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
              ]}
            />


            {/* Database & Cloud */}

            <SkillGroup
              number="03"
              title="Database & Cloud"
              description="Working with relational databases, cloud platforms and development tools."
              skills={[
                "SQL Server",
                "Azure",
                "Git",
                "GitHub",
              ]}
            />


            {/* AI */}

            <SkillGroup
              number="04"
              title="AI / Generative AI"
              description="Developing intelligent applications using modern AI and NLP techniques."
              skills={[
                "Python",
                "NLP",
                "Transformers",
                "LLMs",
                "Generative AI",
                "Hugging Face",
              ]}
            />

          </div>

        </div>
      </section>


      {/* Experience */}
      <section
        id="experience"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            Experience
          </p>

          <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Where I've worked.
            </h2>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Building production software across backend, frontend and
              database technologies.
            </p>
          </div>

          {/* Experience Timeline */}

          <div className="relative mt-14 border-l border-white/10 pl-8 md:pl-10">

            {/* Timeline dot */}

            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)]" />

            {/* Role Header */}

            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

              <div>
                <h3 className="text-2xl font-semibold">
                  Software Analyst
                </h3>

                <p className="mt-2 text-base font-medium text-blue-400">
                  TVS NEXT
                </p>
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-400">
                June 2021 — August 2024
              </div>

            </div>

            {/* Metrics */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-2xl font-bold text-white">
                  2
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Production Systems
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-2xl font-bold text-white">
                  1,000–10,000
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Users Served
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-2xl font-bold text-white">
                  500+
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Employees Supported
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-2xl font-bold text-white">
                  10+
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  REST APIs
                </p>
              </div>

            </div>

            {/* Responsibilities */}

            <div className="mt-10">

              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                Key Contributions
              </h4>

              <div className="mt-6 space-y-5">

                <div className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                  <p className="text-sm leading-7 text-gray-400">
                    Delivered full-stack features across two production
                    systems: a banking modernisation platform for a US
                    client serving 1,000–10,000 users, and an internal
                    Employee Management System supporting 500+ employees.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                  <p className="text-sm leading-7 text-gray-400">
                    Developed and maintained 10+ REST APIs using C# and
                    ASP.NET Core to support application workflows and
                    integrations.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                  <p className="text-sm leading-7 text-gray-400">
                    Built and enhanced frontend functionality using Angular
                    and TypeScript, integrating user-facing features with
                    backend services.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                  <p className="text-sm leading-7 text-gray-400">
                    Developed and optimised SQL Server queries, stored
                    procedures and database operations to support application
                    performance and reliability.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                  <p className="text-sm leading-7 text-gray-400">
                    Collaborated with cross-functional teams in an Agile
                    development environment across requirements, development,
                    testing and production delivery.
                  </p>
                </div>

              </div>

            </div>

            {/* Technologies */}

            <div className="mt-10">

              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                Technologies
              </h4>

              <div className="mt-5 flex flex-wrap gap-2">

                {[
                  "C#",
                  ".NET",
                  "ASP.NET Core",
                  "Angular",
                  "TypeScript",
                  "SQL Server",
                  "REST APIs",
                  "Azure",
                  "Git",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-gray-400 transition hover:border-blue-500/40 hover:text-blue-400"
                  >
                    {technology}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Projects */}

      <section
        id="projects"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            Featured Projects
          </p>

          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Things I've built.
            </h2>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              A selection of academic and personal projects exploring
              software development, information retrieval and AI.
            </p>
          </div>


          {/* Project Grid */}

          <div className="mt-12 grid gap-6 md:grid-cols-2">


            {/* ==================== PROJECT 1 ==================== */}

            <ProjectCard
              number="01"
              type="AI / Generative AI"
              title="GenAI Test Scenario Generator"
              description="An AI-based system for automatically generating software test scenarios from user stories and acceptance criteria using transformer models and large language models."
              technologies={[
                "Python",
                "NLP",
                "Prompt Engineering",
                "LLMs",
                "Transformer Models",
              ]}
              link="https://github.com/MOHAMEDAfrath/genai-test-scenario-generator"
            />


            {/* ==================== PROJECT 2 ==================== */}

            <ProjectCard
              number="02"
              type="Information Retrieval / AI"
              title="AIVista"
              description="An AI-powered semantic image retrieval system combining BLIP-generated image captions with traditional information retrieval techniques including VSM, BM25 and a unigram language model."
              technologies={[
                "Python",
                "Flask",
                "BLIP",
                "Information Retrieval",
                "Scrapy Framework"
              ]}
              link="https://github.com/MOHAMEDAfrath/AIVista"
            />


            {/* ==================== PROJECT 3 ==================== */}

            <ProjectCard
              number="03"
              type="Multi-Agent AI"
              title="Clash Of Minds AI"
              description="A multi-agent AI application where two language models debate a user-selected topic while a third model evaluates their arguments and determines the winner."
              technologies={[
                "JavaScript",
                "LLMs",
                "Prompt Engineering",
                "Hugging Face",
                "Multi-Agent AI",
              ]}
              link="https://github.com/MOHAMEDAfrath/clash-of-minds-ai"
            />

          </div>

        </div>
      </section>


      {/* Education */}
      <section
        id="education"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            Education
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* MSc */}

            <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Postgraduate
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    MSc in Computing
                  </h3>

                  <p className="mt-1 text-blue-400">
                    Artificial Intelligence
                  </p>
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
                  MSc
                </span>

              </div>

              <p className="mt-7 text-sm font-medium text-gray-300">
                Dublin City University
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Dublin, Ireland
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">

                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Focus Areas
                </p>

                <div className="mt-4 flex flex-wrap gap-2">

                  {[
                    "Artificial Intelligence",
                    "NLP",
                    "Machine Learning",
                    "Transformers",
                    "LLMs",
                    "Generative AI",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>


            {/* Bachelors */}

            <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Undergraduate
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    B.E. Computer Science
                  </h3>

                  <p className="mt-1 text-blue-400">
                    Computer Science and Engineering
                  </p>
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
                  B.E.
                </span>

              </div>

              <p className="mt-7 text-sm font-medium text-gray-300">
                Velammal Engineering College
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Chennai, India
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">

                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Specialisation
                </p>

                <div className="mt-4 flex flex-wrap gap-2">

                  {[
                    "Computer Science",
                    "Software Development",
                    "Programming",
                    "Database Systems",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==================== RECOGNITION ==================== */}

      <section
        id="recognition"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            Recognition
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <p className="text-2xl">🏆</p>

              <h3 className="mt-5 text-xl font-semibold">
                Spotlight of Excellence Award
              </h3>

              <p className="mt-2 text-sm text-blue-400">
                TVS NEXT
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Recognition received for professional contribution
                and excellence in software delivery.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <p className="text-2xl">🏆</p>

              <h3 className="mt-5 text-xl font-semibold">
                Super Squad Award
              </h3>

              <p className="mt-2 text-sm text-blue-400">
                TVS NEXT
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Team recognition highlighting collaboration and
                contribution toward successful project delivery.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Contact */}

      <section
        id="contact"
        className="border-t border-white/10 px-6 py-32"
      >
        <div className="mx-auto max-w-5xl">

          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">

            {/* Left */}

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
                Get In Touch
              </p>

              <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                Let's build something
                <span className="text-blue-500">
                  {" "}great.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-gray-500">
                I'm open to Software Developer opportunities, interesting
                projects and conversations around .NET, full-stack development
                and AI.
              </p>

              <a
                href="mailto:afrathismath@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Get In Touch →
              </a>

            </div>


            {/* Right */}

            <div className="space-y-4">

              {/* Email */}

              <a
                href="mailto:afrathismath@gmail.com"
                className="group block rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-blue-500/40 hover:bg-white/[0.04]"
              >
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Email
                </p>

                <p className="mt-2 text-sm text-gray-300 transition group-hover:text-white">
                  afrathismath@gmail.com
                </p>
              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/mohamed-afrath/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-blue-500/40 hover:bg-white/[0.04]"
              >
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  LinkedIn
                </p>

                <p className="mt-2 text-sm text-gray-300 transition group-hover:text-white">
                  Connect with me →
                </p>
              </a>


              {/* GitHub */}

              <a
                href="https://github.com/MOHAMEDAfrath"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-blue-500/40 hover:bg-white/[0.04]"
              >
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  GitHub
                </p>

                <p className="mt-2 text-sm text-gray-300 transition group-hover:text-white">
                  View my repositories →
                </p>
              </a>


              {/* Location */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Location
                </p>

                <p className="mt-2 text-sm text-gray-300">
                  Dublin, Ireland
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Footer */}
      {/* ==================== FOOTER ==================== */}

      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-xs text-gray-600 md:flex-row md:items-center">

          <p>
            © 2026 Mohamed Afrath. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            {/* <a
              href="YOUR_GITHUB_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a> */}

            <a
              href="#"
              className="transition hover:text-white"
            >
              Back to top ↑
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}


/* ==================== SKILL GROUP ==================== */

function SkillGroup({
  number,
  title,
  description,
  skills,
}: {
  number: string;
  title: string;
  description: string;
  skills: string[];
}) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/[0.025]
        p-7
        transition
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:bg-white/[0.04]
      "
    >

      <div className="flex items-start justify-between">

        <span className="text-xs font-medium tracking-widest text-gray-600">
          {number}
        </span>

        <span className="text-lg text-gray-700 transition group-hover:text-blue-400">
          +
        </span>

      </div>


      <h3 className="mt-7 text-xl font-semibold">
        {title}
      </h3>


      <p className="mt-3 text-sm leading-7 text-gray-500">
        {description}
      </p>


      <div className="mt-6 flex flex-wrap gap-2">

        {skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.02]
              px-3
              py-1.5
              text-xs
              text-gray-400
              transition
              hover:border-blue-500/30
              hover:text-blue-400
            "
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}


/* ==================== PROJECT CARD ==================== */

function ProjectCard({
  number,
  type,
  title,
  description,
  technologies,
  link,
}: {
  number: string;
  type: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}) {
  return (
    <article
      className="
        group
        relative
        rounded-3xl
        border
        border-white/10
        bg-white/[0.025]
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:bg-white/[0.04]
      "
    >

      {/* Top row */}

      <div className="flex items-start justify-between">

        <span className="text-xs font-medium tracking-widest text-gray-600">
          {number}
        </span>

        <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-[10px] uppercase tracking-wider text-blue-400">
          {type}
        </span>

      </div>


      {/* Title */}

      <div className="mt-8 flex items-start justify-between gap-4">

        <h3 className="text-2xl font-semibold leading-tight">
          {title}
        </h3>

        <span className="shrink-0 text-xl text-gray-600 transition duration-300 group-hover:text-blue-400">
          ↗
        </span>

      </div>


      {/* Description */}

      <p className="mt-5 text-sm leading-7 text-gray-500">
        {description}
      </p>


      {/* Technologies */}

      <div className="mt-7 flex flex-wrap gap-2">

        {technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.02]
              px-3
              py-1.5
              text-xs
              text-gray-400
              transition
              group-hover:border-white/15
            "
          >
            {technology}
          </span>
        ))}

      </div>


      {/* GitHub */}

      <div className="mt-8 border-t border-white/10 pt-6">

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-gray-300
            transition
            hover:text-white
          "
        >
          View on GitHub
          <span className="text-blue-400">→</span>
        </a>

      </div>

    </article>
  );
}

export default App;