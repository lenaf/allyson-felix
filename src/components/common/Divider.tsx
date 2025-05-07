"use client"

export default function Divider({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${className ?? ''} flex-grow w-full relative border-t border-gray-400`}></div>
  );
}
