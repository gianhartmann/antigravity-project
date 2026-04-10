import React from "react";

interface StatCardProps {
  readonly value: string;
  readonly label: string;
  readonly className?: string;
}

export const StatCard: React.FC<Readonly<StatCardProps>> = ({
  value,
  label,
  className = "",
}) => {
  return (
    <div
      className={`bg-surface-container-low p-8 md:p-10 flex flex-col justify-center ${className}`}
    >
      <div className="font-headline font-black text-4xl md:text-5xl text-primary mb-2 tracking-tight">
        {value}
      </div>
      <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
