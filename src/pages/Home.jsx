import { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import coffeeMug from '../assets/Coffee mug-circle.png';
import cafeExterior from '../assets/Cafe-Exterior.jpg';
import cafeInterior from '../assets/Cafe-Interior.jpg';
import food1 from '../assets/Food-1.jpg';
import food2 from '../assets/Food-2.jpg';

/* ─── USP Icon Components ─────────────────────────────────── */
const CoffeeMachineIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
    <rect x="8" y="12" width="32" height="40" rx="3" />
    <rect x="12" y="16" width="24" height="14" rx="2" />
    <circle cx="22" cy="36" r="4" />
    <line x1="22" y1="40" x2="22" y2="46" />
    <line x1="18" y1="46" x2="26" y2="46" />
    <line x1="40" y1="20" x2="56" y2="20" />
    <line x1="40" y1="28" x2="50" y2="28" />
    <line x1="40" y1="36" x2="52" y2="36" />
    <rect x="50" y="16" width="8" height="8" rx="1" />
  </svg>
);

const CafeChairIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
    <rect x="10" y="8" width="44" height="28" rx="3" />
    <rect x="14" y="12" width="16" height="10" rx="1.5" />
    <rect x="34" y="12" width="16" height="10" rx="1.5" />
    <line x1="10" y1="36" x2="54" y2="36" />
    <line x1="16" y1="36" x2="12" y2="56" />
    <line x1="48" y1="36" x2="52" y2="56" />
    <line x1="24" y1="36" x2="22" y2="56" />
    <line x1="40" y1="36" x2="42" y2="56" />
    <line x1="12" y1="52" x2="22" y2="52" />
    <line x1="42" y1="52" x2="52" y2="52" />
  </svg>
);

const ClocheDishIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
    <path d="M8 38 C8 24 56 24 56 38" />
    <line x1="6" y1="38" x2="58" y2="38" />
    <line x1="6" y1="44" x2="58" y2="44" />
    <line x1="32" y1="24" x2="32" y2="18" />
    <circle cx="32" cy="15" r="3" />
    <path d="M20 44 L16 56" />
    <path d="M44 44 L48 56" />
    <line x1="14" y1="56" x2="50" y2="56" />
  </svg>
);

const USP_ITEMS = [
  {
    icon: CoffeeMachineIcon,
    title: 'Artisanal Coffee\nCraftsmanship',
    description:
      'Experience the perfection of handcrafted coffee, meticulously sourced and prepared to tantalize your taste buds with every sip.',
  },
  {
    icon: CafeChairIcon,
    title: 'Cozy Haven for\nCoffee Enthusiasts',
    description:
      'Embrace the warmth of our inviting ambiance, a perfect spot to savor premium coffee, delightful pastries, and create cherished memories.',
  },
  {
    icon: ClocheDishIcon,
    title: 'Culinary Diversity,\nDietary Delights',
    description:
      'Indulge in a diverse menu that caters to all tastes, including vegan and gluten-free options, ensuring everyone\'s satisfaction with every visit.',
  },
];

/* ─── Main Component ──────────────────────────────────────── */
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Stable reference so useEffect doesn't re-fire on every render
  const slides = useMemo(() => [
    { image: cafeExterior, title: 'Cafe Exterior' },
    { image: cafeInterior, title: 'Cafe Interior' },
    { image: food1,        title: 'Food Plate 1'  },
    { image: food2,        title: 'Food Plate 2'  },
  ], []);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="flex flex-col">

      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="bg-secondary-1 min-h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Left: Text */}
            <div className="md:col-span-7 flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-xl mx-auto">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-primary-1 leading-tight tracking-normal">
                Welcome to Bristo Café
              </h1>
              <p className="font-body text-base md:text-lg lg:text-xl text-primary-1/90 font-light leading-relaxed max-w-lg">
                Indulge in artisanal coffee and delightful pastries in our cozy space. Join us for moments to cherish and conversations to remember.
              </p>
            </div>

            {/* Right: Coffee Mug */}
            <div className="md:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] aspect-square flex items-center justify-center">
                <img
                  src={coffeeMug}
                  alt="Bristo Cafe Latte Art Coffee Mug"
                  className="w-full h-auto drop-shadow-[0_20px_35px_rgba(30,28,27,0.5)] transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-width Image Carousel ─────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-black-100">
        <div className="relative w-full h-[500px] sm:h-[650px] md:h-[800px] lg:h-[900px] group">
          {/* Slides */}
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                  isActive
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-[1.03] pointer-events-none z-0'
                }`}
              >
                {/* Bottom vignette for dot legibility */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black-100/50 to-transparent z-10" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}

          {/* Prev / Next arrows — fade in on hover */}
          <button
            onClick={handlePrev}
            className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 bg-white-cream/85 hover:bg-white-cream text-primary-1 hover:text-primary-2 p-3.5 md:p-4 rounded-full shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 z-30 cursor-pointer opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 bg-white-cream/85 hover:bg-white-cream text-primary-1 hover:text-primary-2 p-3.5 md:p-4 rounded-full shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 z-30 cursor-pointer opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot indicators with pill morph animation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3.5 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-500 ease-out cursor-pointer h-2.5 rounded-full ${
                  index === activeIndex
                    ? 'bg-secondary-1 w-8 scale-110 shadow-md'
                    : 'bg-white-cream/50 hover:bg-white-cream/85 w-2.5 hover:scale-125'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── USP Section: Why Choose Bristo Café? ─────────────── */}
      <section className="bg-secondary-2 py-20 md:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium text-primary-1 text-center mb-16 md:mb-20 leading-tight">
            Why Choose Bristo Cafe?
          </h2>

          {/* Three-column USP cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
            {USP_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-5 group"
                >
                  {/* Icon */}
                  <div className="text-primary-1 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 mb-2">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl md:text-[28px] font-medium text-primary-1 leading-snug whitespace-pre-line">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-[15px] md:text-base text-black-75 font-light leading-relaxed max-w-xs mt-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

