"use client";

export function SectionHeader({
  children,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h2 className="uppercase mb-6 tracking-normal text-primary" {...props}>
      {children}
    </h2>
  );
}

export function SectionSubHeader({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h3
      className={`uppercase mb-2 tracking-normal text-primary ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}
