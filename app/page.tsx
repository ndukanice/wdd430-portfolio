import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to my portfolio</h1>
      <p className="mt-2 mb-8 text-gray-600 dark:text-gray-400">
        Here are some of the projects I have worked on.
      </p>
      <ProjectList />
    </div>
  );
}
