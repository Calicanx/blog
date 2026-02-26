import Image from "next/image";
import type { FC } from "react";

interface VolunteeringItemProps {
  volunteer: {
    organization: string;
    logo?: string;
    role: string;
    period: string;
    location: string;
    website?: string;
    responsibilities: string[];
  };
}

const VolunteeringItem: FC<VolunteeringItemProps> = ({ volunteer }) => {
  return (
    <div>
      <h3 className="font-medium text-xl mb-1 tracking-tighter flex items-center">
        {volunteer.logo && (
          <Image
            src={volunteer.logo}
            alt={volunteer.organization}
            width={20}
            height={20}
            className="mr-4 print-logo"
          />
        )}
        <span className={volunteer.logo ? "ml-2" : ""}>
          {volunteer.organization}
        </span>
      </h3>
      {volunteer.website && (
        <a
          href={volunteer.website}
          className="hidden print:block text-xs text-blue-600 dark:text-blue-400 mb-1 no-underline font-normal"
        >
          {volunteer.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
        </a>
      )}
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {volunteer.role} | {volunteer.period} | {volunteer.location}
      </p>
      <ul>
        {volunteer.responsibilities.map((responsibility, rIndex) => (
          <li key={rIndex}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default VolunteeringItem;
