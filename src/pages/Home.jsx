import { useState, useEffect, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import coffeeMug from '../assets/Coffee mug-circle.png';
import cafeExterior from '../assets/Cafe-Exterior.jpg';
import cafeInterior from '../assets/Cafe-Interior.jpg';
import food1 from '../assets/Food-1.jpg';
import food2 from '../assets/Food-2.jpg';
import espresso from '../assets/Espresso-1-C.png';
import croissants from '../assets/Croissants-C.png';
import redVelvet from '../assets/Red velvet cake-C.png';
import matcha from '../assets/Matcha green tea-C.png';
import avocadoToast from '../assets/Avocado toast-C.png';
import blueberryPancakes from '../assets/Bluberry pancake-C.png';
import reviewerMale1 from '../assets/male-1-C.png';
import reviewerFemale1 from '../assets/female-1-C.png';
import reviewerFemale2 from '../assets/female-2-C.png';
import reviewerMale2 from '../assets/male-2-C.png';

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

const FINEST_ITEMS = [
  {
    image: espresso,
    title: 'Signature Espresso\nblend',
    description: 'Our carefully curated and richly aromatic espresso blend is a must-try for coffee connoisseurs, offering a delightful burst of flavors.',
  },
  {
    image: croissants,
    title: 'Flaky Croissants-\nSweet & Savory',
    description: 'Indulge in our freshly baked, buttery croissants, available in both sweet (e.g., almond, chocolate) and savory (e.g., ham and cheese) options.',
  },
  {
    image: redVelvet,
    title: 'Decadent Red Velvet\nCake',
    description: 'Treat yourself to a slice of our velvety and moist red velvet cake, topped with luscious cream cheese frosting, a heavenly delight for dessert lovers.',
  },
  {
    image: matcha,
    title: 'Matcha Green Tea\nLatte',
    description: 'Experience the soothing and earthy goodness of our creamy Matcha Green Tea Latte, a delightful fusion of tradition and taste.',
  },
  {
    image: avocadoToast,
    title: 'Vegan Avocado Toast\nwith cream',
    description: 'Savor the goodness of our Vegan Avocado Toast, featuring smashed avocado, cherry tomatoes, and a drizzle of balsamic glaze on freshly baked artisanal bread.',
  },
  {
    image: blueberryPancakes,
    title: 'Blueberry Bliss\nPancakes',
    description: 'Indulge in a stack of fluffy pancakes bursting with plump, juicy blueberries. With maple syrup, topped with whipped cream. Best breakfast option.',
  },
];

const REVIEWS_DATA = [
  {
    image: reviewerMale1,
    name: 'Michael Lee',
    review: "I've been a regular at Bristo Cafe for years now, and it never disappoints! Their baristas are true coffee artists, and the selection of pastries is always tempting. The staff is friendly, making it feel like a second home. Bristo Cafe is my go-to spot for a perfect coffee break!",
  },
  {
    image: reviewerFemale1,
    name: 'Sarah M.',
    review: "I stumbled upon Bristo Cafe during my visit to NYC, and it turned out to be the highlight of my trip! The coffee was exceptional, and the ambiance was so cozy and inviting. Their almond croissant was to die for! Can't wait to visit again. Highly recommended!",
  },
  {
    image: reviewerFemale2,
    name: 'Emily Pough',
    review: "As a vegan, finding cafes with good plant-based options can be challenging. But Bristo Cafe pleasantly surprised me! Their Vegan Avocado Toast is delicious, and the vegan pastries are divine. The ambiance is lovely, making it a relaxing place to unwind with friends.",
  },
  {
    image: reviewerMale2,
    name: 'Jason',
    review: "\"Fantastic coffee and great service! The baristas at Bristo Cafe are true experts, and you can taste the difference in every cup. Their Red Velvet Cake is a showstopper. This cafe is a gem in the city!\"",
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

  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const pauseTimeoutRef = useRef(null);

  const handleUserInteraction = () => {
    setIsAutoPlayPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    
    // Resume auto-rotation after 5 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoPlayPaused(false);
    }, 5000);
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isAutoPlayPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, isAutoPlayPaused]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    handleUserInteraction();
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    handleUserInteraction();
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  // Swipe handlers for touchscreen devices
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <div className="flex flex-col">

      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="bg-secondary-1 flex items-center justify-center py-[clamp(4rem,10svh,8rem)] min-h-[100svh] overflow-hidden">
        <div className="max-w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[100px] min-[1720px]:px-[250px] w-full h-full flex items-center">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-12 lg:gap-0">
            {/* Left: Text */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 mt-4 lg:mt-0 lg:pr-8">
              <h1 className="text-h1 text-primary-1 leading-tight tracking-normal text-center lg:text-left">
                Welcome to Bristo Café
              </h1>
              <p className="text-body text-primary-1/90 text-center lg:text-left">
                Indulge in artisanal coffee and delightful pastries in our<br className="hidden xl:block" />
                cozy space. Join us for moments to cherish and<br className="hidden xl:block" />
                conversations to remember.
              </p>
            </div>

            {/* Right: Coffee Mug */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[clamp(280px,50vw,650px)] aspect-square flex items-center justify-center">
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
        <div 
          className="relative w-full min-h-[100svh] group"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
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
                onClick={() => {
                  handleUserInteraction();
                  setActiveIndex(index);
                }}
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
      <section className="bg-secondary-2 py-[clamp(6rem,10vw,10rem)] px-6 lg:px-12 flex flex-col justify-center">
        <div className="max-w-[1440px] mx-auto w-full">

          {/* Section Heading */}
          <h2 className="text-h2 text-primary-1 text-center mb-[clamp(4rem,6vw,6rem)] leading-tight">
            Why Choose Bristo Cafe?
          </h2>

          {/* Three-column USP cards */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-[clamp(3rem,6vw,5rem)] items-start">
            {USP_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group @container px-2"
                >
                  {/* Icon */}
                  <div className="text-primary-1 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 mb-6">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="text-h5 text-primary-1 leading-snug whitespace-pre-line mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body text-black-75 max-w-[340px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Café's Finest Section ──────────────────────────────── */}
      <section className="bg-primary-1 py-[clamp(6rem,10vw,10rem)] px-6 lg:px-12 flex flex-col justify-center">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* Section Heading */}
          <h2 className="text-h2 text-white-cream text-center mb-[clamp(4rem,6vw,6rem)] leading-tight">
            Café's Finest
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(2.5rem,8vw,8rem)]">
            {FINEST_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-secondary-2 rounded-[2rem] p-[clamp(2rem,4vw,3.5rem)] flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="w-[clamp(120px,20vw,180px)] h-auto aspect-square mb-6">
                  <img
                    src={item.image}
                    alt={item.title.replace('\n', ' ')}
                    className="w-full h-full drop-shadow-md hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="text-h4 text-primary-1 leading-snug whitespace-pre-line mb-4 font-semibold">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-body text-black-75 max-w-[340px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────────────────── */}
      <section className="bg-white-cream py-[clamp(6rem,10vw,8rem)] px-6 lg:px-12 flex justify-center">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-8 md:px-12 lg:px-24">
          <button className="bg-primary-1 hover:bg-primary-2 text-white-cream font-heading text-[clamp(1.5rem,2.5vw,2.25rem)] px-[clamp(3rem,5vw,5rem)] py-[clamp(1rem,2vw,1.5rem)] rounded-[1.25rem] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
            Visit Café
          </button>
          <button className="bg-secondary-1 hover:bg-[#c4ad84] text-primary-1 font-heading text-[clamp(1.5rem,2.5vw,2.25rem)] px-[clamp(3rem,5vw,5rem)] py-[clamp(1rem,2vw,1.5rem)] rounded-[1.25rem] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
            Explore our Menu
          </button>
        </div>
      </section>

      {/* ── Reviews Section ────────────────────────────────────── */}
      <section className="bg-white-cream pb-[clamp(6rem,10vw,10rem)] pt-0 px-6 lg:px-12 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* Section Heading */}
          <h2 className="text-h1 text-primary-1 text-center mb-[clamp(4rem,6vw,6rem)] leading-tight">
            Reviews
          </h2>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,5vw,4rem)]">
            {REVIEWS_DATA.map((review, index) => (
              <div
                key={index}
                className="bg-secondary-2 rounded-2xl p-[clamp(2rem,4vw,3.5rem)] flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Avatar */}
                <div className="w-[clamp(100px,15vw,140px)] h-auto aspect-square mb-6">
                  <img
                    src={review.image}
                    alt={`${review.name}'s Avatar`}
                    className="w-full h-full drop-shadow-md hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Review Text */}
                <p className="text-body text-black-75 leading-relaxed mb-8 grow">
                  {review.review}
                </p>

                {/* Name */}
                <h3 className="text-accent text-[clamp(2.5rem,4vw,3.5rem)] text-primary-1 leading-none mt-auto pt-4">
                  {review.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter Section ─────────────────────────────────── */}
      <section className="bg-primary-2 py-[clamp(6rem,10vw,8rem)] px-6 lg:px-12 flex justify-center">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col items-start lg:px-12">
          {/* Heading */}
          <h2 className="text-h1 text-white-cream mb-4 leading-tight">
            Newsletter
          </h2>

          {/* Description */}
          <p className="text-body text-white-cream/90 max-w-2xl mb-8 leading-relaxed">
            Sign-up for our newsletter to receive the latest news, promotions, and updates from Bristo Cafe directly in your inbox.
          </p>

          {/* Form Area */}
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-secondary-2 text-primary-1 px-6 py-4 rounded-xl flex-1 outline-none placeholder:text-primary-1/60 focus:ring-2 focus:ring-white-cream/50 transition-all min-w-0"
              required
            />
            <button
              type="submit"
              className="bg-secondary-1 hover:bg-[#c4ad84] text-primary-1 font-bold text-body px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

