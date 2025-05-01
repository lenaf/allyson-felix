"use client"

export default function SectionHeader({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h2 className="uppercase mb-6" {...props}>{children}</h2>
  );
}
