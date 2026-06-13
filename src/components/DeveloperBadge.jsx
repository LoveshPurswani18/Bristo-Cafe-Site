import { useState, useEffect } from 'react';
import { X, Code2, Mail } from 'lucide-react';

export default function DeveloperBadge() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-expand the badge after 2.5 seconds to catch attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* The expanded card */}
      <div 
        className={`fixed bottom-24 left-1/2 sm:left-auto sm:right-6 bg-[#1E1C1B]/95 backdrop-blur-md border border-secondary-1/20 shadow-2xl rounded-2xl p-6 w-[calc(100vw-2rem)] max-w-[360px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom sm:origin-bottom-right z-50 ${
          isExpanded 
            ? '-translate-x-1/2 sm:translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto' 
            : '-translate-x-1/2 sm:translate-x-0 translate-y-8 scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={() => setIsExpanded(false)}
          className="absolute top-4 right-4 text-white-cream/50 hover:text-white-cream transition-colors cursor-pointer"
          aria-label="Close message"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-center gap-2 mb-3">
          <Code2 size={20} className="text-secondary-1" />
          <span className="text-secondary-1 text-sm font-bold tracking-wider uppercase">Portfolio Project</span>
        </div>
        
        <h4 className="font-heading text-white-cream text-2xl mb-2 pr-6 leading-tight">
          Designed & Engineered by Lovesh
        </h4>
        
        <p className="text-white-cream/80 text-sm font-body mb-5 leading-relaxed">
          Want a premium, high-converting website like this for your own business? Let's build something amazing together.
        </p>
        
        <a 
          href="mailto:loveshpradeeppurswani@gmail.com" 
          className="flex items-center justify-center gap-2 w-full bg-secondary-1 text-black-100 font-bold py-3 rounded-xl hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-md"
        >
          <Mail size={18} />
          <span>Get in Touch</span>
        </a>
      </div>

      {/* The floating toggle pill */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
        <div 
          className={`flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
            isExpanded ? 'scale-75 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
          }`}
        >
          <button 
            onClick={() => setIsExpanded(true)}
            className="flex items-center justify-center bg-[#1E1C1B] text-secondary-1 shadow-2xl border border-secondary-1/20 p-4 rounded-full transition-transform hover:scale-110 cursor-pointer"
            aria-label="Open Developer Info"
          >
            <Code2 size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
