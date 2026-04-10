import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/data/mockData";

interface ProjectCardProps {
  readonly project: CaseStudy;
  readonly className?: string;
}

export const ProjectCard: React.FC<Readonly<ProjectCardProps>> = ({
  project,
  className = "",
}) => {
  return (
    <Link
      to={`/project/${project.slug}`}
      className={`group block ${className}`}
    >
      <div className="relative overflow-hidden mb-4">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.categories.map((cat) => (
            <Badge
              key={cat}
              variant="secondary"
              className="bg-inverse-surface/80 text-surface-bright font-label text-[10px] uppercase tracking-wider border-none backdrop-blur-sm"
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-headline font-bold text-xl md:text-2xl text-on-surface mb-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
            {project.description}
          </p>
        </div>
        {project.index && (
          <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant whitespace-nowrap mt-1">
            {project.index}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
