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
      className={`inline-block px-5 py-2.5 bg-surface-variant/60 rounded-full font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold transition-colors hover:bg-surface-variant ${className}`}
    >
      {label}
    </span>
  );
};

export default ProcessChip;
