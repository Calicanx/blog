import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Separator from "./separator";
import Chip from "./chip";

interface ProjectCardProps {
  title: string;
  logo?: string;
  description: string;
  technologies: string[];
  website: string;
  discontinued?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  logo,
  description,
  technologies,
  website,
  discontinued,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        {logo ? (
          <Image
            src={logo}
            alt={title}
            width={24}
            height={24}
            className="mr-2"
          />
        ) : (
          <p className="mt-0 mb-0">{"->"}</p>
        )}
        <h3 className="font-medium text-xl tracking-tight mt-0 mb-0 ml-1">
          <Link href={website} target="_blank" rel="noopener noreferrer">
            {title}
          </Link>
        </h3>
        {discontinued && (
          <span className="ml-3 text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
            Discontinued
          </span>
        )}
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {technologies.map((tech, idx) => (
          <Chip key={idx} tech={tech} />
        ))}
      </div>
      <Separator />
    </div>
  );
};

export default ProjectCard;
