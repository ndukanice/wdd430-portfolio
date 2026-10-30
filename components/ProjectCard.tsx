type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  href,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 p-5 shadow-sm dark:border-gray-800">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs dark:bg-gray-800"
          >
            {tag}
          </li>
        ))}
      </ul>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium underline"
        >
          View project
        </a>
      )}
    </article>
  );
}
