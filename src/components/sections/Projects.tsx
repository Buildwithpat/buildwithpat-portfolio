import { PROJECTS } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCase } from "@/components/sections/ProjectCase";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 py-28 md:px-8 md:py-36"
    >
      <SectionHeading
        eyebrow="Projects"
        title="Selected work, not a stack of cards."
        description="Four products, four different problems — each one built its own way."
      />

      <div className="flex flex-col gap-24 md:gap-32">
        {PROJECTS.map((project) => (
          <ProjectCase key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
