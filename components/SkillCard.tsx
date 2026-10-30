interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <article className="rounded-lg border border-gray-300 bg-white p-4 text-gray-900 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold">{category}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-900"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
