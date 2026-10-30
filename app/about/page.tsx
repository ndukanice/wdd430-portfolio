import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">About Me</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        I am a web development student learning to build modern, full-stack, AI,
        applications with Next.js, React and TypeScript. This portfolio is my
        first Next.js project for WDD 430.
      </p>
      <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <SkillCard
          category="Frontend"
          skills={["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]}
        />
        <SkillCard
          category="Backend & Data"
          skills={["Node.js", "MongoDB", "Python", "TypeScript"]}
        />
      </div>
    </div>
  );
}
