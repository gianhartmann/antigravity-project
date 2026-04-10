import React from "react";

interface SectionHeadingProps {
  readonly title: string;
  readonly accentTitle?: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly className?: string;
  readonly align?: "left" | "center";
}

export const SectionHeading: React.FC<Readonly<SectionHeadingProps>> = ({
  title,
  accentTitle,
  subtitle,
  description,
  className = "",
  align = "left",
}) => {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      {subtitle && (
        <span className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-headline font-extrabold text-4xl md:text-6xl lg:text-7xl text-on-surface tracking-tighter leading-[1.1] mb-4">
        {title}
        {accentTitle && (
          <span className="italic font-body font-normal text-primary">
            {" "}{accentTitle}
          </span>
        )}
      </h2>
      {description && (
        <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
