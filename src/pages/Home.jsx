import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import coffeeMug from '../assets/Coffee mug-circle.png';
import cafeExterior from '../assets/Cafe-Exterior.jpg';
import cafeInterior from '../assets/Cafe-Interior.jpg';
import food1 from '../assets/Food-1.jpg';
import food2 from '../assets/Food-2.jpg';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: cafeExterior,
      tag: "Storefront",
      title: "Charming Exterior",
      description: "Step into our welcoming shop situated in the historic street neighborhood."
    },
    {
      image: cafeInterior,
      tag: "Ambiance",
      title: "Cozy Gatherings",
      description: "Comfortable seating, warm lighting, and a relaxing vibe for work or casual chats."
    },
    {
      image: food1,
      tag: "Artisanal",
      title: "Morning Delights",
      description: "Our hand-selected breakfast plates made from fresh organic local produce."
    },
    {
      image: food2,
      tag: "Gourmet",
      title: "Perfect Pairings",
      description: "Savory options designed to pair beautifully with our house espresso roast."
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

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
      {/* Hero Section */}
      <section className="bg-secondary-1 min-h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Left Column: Welcoming Text Block */}
            <div className="md:col-span-7 flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-xl mx-auto">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-primary-1 leading-tight tracking-normal">
                Welcome to Bristo Café
              </h1>
              <p className="font-body text-base md:text-lg lg:text-xl text-primary-1/90 font-light leading-relaxed max-w-lg">
                Indulge in artisanal coffee and delightful pastries in our cozy space. Join us for moments to cherish and conversations to remember.
              </p>
            </div>

            {/* Right Column: Hero Coffee Mug Image */}
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

      {/* Full-width & Full-height Gallery Section with Carousel */}
      <section className="relative w-full overflow-hidden bg-black-100">
        {/* Carousel Container */}
        <div
          className="relative w-full h-[500px] sm:h-[650px] md:h-[800px] lg:h-[900px] group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-[1.03] pointer-events-none z-0'
                }`}
              >
                {/* Subtle dark overlay at the bottom for indicator readability */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black-100/40 to-transparent z-10" />
                
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}

          {/* Navigation Arrows (Only visible on hover) */}
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

          {/* Dot Indicators with Morphing Pill Animations */}
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
    </div>
  );
}
