import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCase } from "@/components/sections/ProjectCase";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 py-28 md:px-8 md:py-36"
    >
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work, not a stack of cards."
          description="Three products, three different problems — each one built its own way."
        />
        <Link
          href="/projects"
          className="group flex shrink-0 items-center gap-1.5 rounded-full bg-ink-0 px-5 py-2.5 text-body-sm font-medium text-surface-0 shadow-[var(--shadow-elevation-1)] transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[var(--shadow-elevation-2)]"
        >
          View All Projects
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCase key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
