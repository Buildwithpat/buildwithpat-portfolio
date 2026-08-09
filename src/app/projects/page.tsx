import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCase } from "@/components/sections/ProjectCase";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: `Projects — ${SITE.name}`,
  description:
    "The complete portfolio archive — every product BuildWithPat has shipped or is actively building.",
};

export default function ProjectsPage() {
  return (
    <>
      <header className="fixed top-0 left-0 z-[1000] flex h-18 w-full items-center px-5 md:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full border border-line-subtle bg-surface-0/70 px-4 py-2 text-body-sm font-medium text-ink-0 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-surface-2"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back home
        </Link>
      </header>

      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 py-28 md:px-8 md:py-36">
        <SectionHeading
          eyebrow="Full Archive"
          title="Everything I've shipped or am shipping."
          description="Every product, from the ones that are live today to the one I'm building right now."
        />

        <div className="flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((project) => (
            <ProjectCase key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
