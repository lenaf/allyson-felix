"use client";

export default function PreviewBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-400 text-black text-center py-2 z-50 font-bold">
      🔍 PREVIEW MODE - Viewing draft content
      <button 
        onClick={() => window.location.href = window.location.pathname}
        className="ml-4 underline hover:no-underline"
      >
        Exit Preview
      </button>
    </div>
  );
}