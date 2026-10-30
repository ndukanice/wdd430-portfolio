import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "TriageGuard",
    description:
      "An AI-powered clinical triage app for capturing patient intake, analyzing symptoms and vitals, and producing structured urgency recommendations grounded in clinical protocols and evidence citations.",
    technologies: ["TypeScript"],
    link: "https://github.com/ndukanice/TRIAGEGUARD",
  },
  {
    title: "Sacrament Meeting Planner",
    description: "A simple Next.js app that aids sacrament meeting planning.",
    technologies: ["Next.js", "TypeScript"],
    link: "https://github.com/ndukanice/sacrament-meeting",
  },
  {
    title: "Feast Together",
    description:
      "A web platform that helps users plan meals for small group gatherings, finding recipes that fit different dietary needs and preferences.",
    technologies: ["JavaScript"],
    link: "https://github.com/ndukanice/WDD330-Feast-Together",
  },
];

export default function Home() {
  return (
    <div>
      <section className="py-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">My Portfolio</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I&apos;m a full-stack developer learning Next.js and React. Here are
          some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </div>
  );
}
