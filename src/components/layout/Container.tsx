import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({
  children,
  className = "",
  narrow = false,
}: ContainerProps) {
  const maxWidth = narrow ? "max-w-prose" : "max-w-3xl";

  return (
    <div className={`mx-auto w-full px-5 sm:px-6 ${maxWidth} ${className}`}>
      {children}
    </div>
  );
}
