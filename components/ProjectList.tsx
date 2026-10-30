import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Personal Portfolio",
    description: "This site, built with Next.js, TypeScript and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Responsive Landing Page",
    description: "A mobile-first landing page built with HTML and CSS.",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Task Tracker",
    description: "A small app for tracking daily tasks with local storage.",
    tags: ["JavaScript", "React"],
  },
];

export default function ProjectList() {
  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}
