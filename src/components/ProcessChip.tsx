import React from "react";

interface ProcessChipProps {
  readonly label: string;
  readonly className?: string;
}

export const ProcessChip: React.FC<Readonly<ProcessChipProps>> = ({
  label,
  className = "",
}) => {
  return (
    <span
      className={`bg-surface-variant px-6 py-3 rounded-full font-label text-xs uppercase font-bold tracking-wider text-on-surface-variant hover:bg-surface-variant/80 transition-colors cursor-default select-none ${className}`}
    >
      {label}
    </span>
  );
};

export default ProcessChip;
