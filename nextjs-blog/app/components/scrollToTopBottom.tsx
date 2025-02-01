'use client'

import { cn } from '@/lib/utils'

export default function ScrollToTopButton() {
  // Use browser API directly without hooks
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Attach scroll listener when component mounts
  if (typeof window !== 'undefined') {
    document.addEventListener('scroll', () => {
      const button = document.getElementById('scroll-top-button');
      if (button) {
        if (window.scrollY > 400) {
          button.classList.remove('hidden');
          button.classList.add('flex');
        } else {
          button.classList.add('hidden');
          button.classList.remove('flex');
        }
      }
    });
  }

  return (
    <button
      id="scroll-top-button"
      className={cn(
        "fixed bottom-10 right-10 py-2 px-4 hidden",
        "rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]",
        "bg-[length:200%_100%] font-medium text-slate-400 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
       
      )}
      onClick={scrollToTop}
    >
      Return to Top
    </button>
  );
}