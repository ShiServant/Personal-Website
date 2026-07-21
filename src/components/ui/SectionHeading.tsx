interface SectionHeadingProps {
  title: string;
  description?: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm text-muted sm:text-base">{description}</p>
      )}
    </div>
  );
}
