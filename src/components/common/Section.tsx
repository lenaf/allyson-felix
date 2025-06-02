
export default function Section(
  {
    children,
    className,
    ...rest
  }: React.HTMLProps<HTMLDivElement>) {
  return (
    <section
      className={`w-full relative scroll-mt-24 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </section>
  );
}
