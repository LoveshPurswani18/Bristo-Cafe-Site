import React, { useState } from 'react';

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 text-black-100 shrink-0">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 text-black-100 shrink-0">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 text-black-100 shrink-0">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export default function Contact() {
  const [galleryTab, setGalleryTab] = useState('interior');
  const [openFaq, setOpenFaq] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState('');

  const faqs = [
    {
      question: "Do I need to make a reservation?",
      answer: "Reservations are not required but highly recommended for larger groups or during peak hours to ensure availability."
    },
    {
      question: "What types of payment do you accept?",
      answer: "We accept cash, all major credit cards, and mobile payments like Apple Pay and Google Pay."
    },
    {
      question: "Do you offer vegan or gluten-free options?",
      answer: "Yes, we have a variety of vegan and gluten-free pastries, meals, and alternative milks for our beverages."
    },
    {
      question: "Is Wi-Fi available for customers?",
      answer: "Yes, we offer complimentary high-speed Wi-Fi for all our guests."
    },
    {
      question: "Do you host private events or parties?",
      answer: "Yes, our space is available for private booking. Please contact us through the form above for more details and availability."
    },
    {
      question: "How can I stay updated on upcoming events and promotions?",
      answer: "Follow us on our social media channels or subscribe to our newsletter to receive the latest updates."
    }
  ];

  const interiorImages = [
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=1200',
  ];

  const exteriorImages = [
    'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=1200',
    'https://plus.unsplash.com/premium_photo-1712736395898-02844eeb1968?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const activeImages = galleryTab === 'interior' ? interiorImages : exteriorImages;

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Contact and Timings Section */}
      <section className="bg-primary-2 py-20 md:py-24 px-6 md:px-12 lg:px-16 xl:px-24 flex items-center justify-center">
        <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-[80px] mx-auto">
          
          {/* Contact Information Card */}
          <div className="bg-secondary-1 rounded-[2rem] p-8 md:p-12 lg:py-16 flex flex-col justify-center items-center text-center shadow-lg">
            <h2 className="font-heading text-primary-1 text-[clamp(2.25rem,3.5vw,3rem)] leading-tight mb-10">
              Contact Information
            </h2>
            
            <div className="flex flex-col items-center justify-center gap-8">
              {/* Address */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <LocationIcon />
                  <h3 className="font-heading text-black-100 text-2xl sm:text-3xl leading-none font-normal">Address</h3>
                </div>
                <div className="text-black-75 text-base sm:text-lg font-light leading-relaxed flex flex-col">
                  <span>Bristo Cafe</span>
                  <span>123 Main Street</span>
                  <span>New York, NY 10001</span>
                  <span>United States</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <PhoneIcon />
                  <h3 className="font-heading text-black-100 text-2xl sm:text-3xl leading-none font-normal">Phone</h3>
                </div>
                <span className="text-black-75 text-base sm:text-lg font-light leading-relaxed">
                  +1 (555) 123-4567
                </span>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <MailIcon />
                  <h3 className="font-heading text-black-100 text-2xl sm:text-3xl leading-none font-normal">Email</h3>
                </div>
                <span className="text-black-75 text-base sm:text-lg font-light leading-relaxed">
                  info@bristocafe.com
                </span>
              </div>
            </div>
          </div>

          {/* Opening Hours Card */}
          <div className="bg-secondary-1 rounded-[2rem] p-8 md:p-12 lg:py-16 flex flex-col justify-center shadow-lg">
            <h2 className="font-heading text-primary-1 text-[clamp(2.25rem,3.5vw,3rem)] leading-tight mb-10 text-center">
              Opening Hours
            </h2>
            
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-[auto_1fr] gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6">
                {/* Monday */}
                <div className="font-heading text-black-100 text-xl sm:text-2xl font-normal">Monday</div>
                <div className="text-black-75 text-sm sm:text-base font-light self-center">9:00 AM - 7:00 PM</div>
                
                {/* Tuesday */}
                <div className="font-heading text-black-100 text-xl sm:text-2xl font-normal">Tuesday</div>
                <div className="text-black-75 text-sm sm:text-base font-light self-center">9:00 AM - 7:00 PM</div>
                
                {/* Wednesday */}
                <div className="font-heading text-black-100 text-xl sm:text-2xl font-normal">Wednesday</div>
                <div className="text-black-75 text-sm sm:text-base font-light self-center">9:00 AM - 7:00 PM</div>
                
                {/* Thursday */}
                <div className="font-heading text-black-100 text-xl sm:text-2xl font-normal">Thursday</div>
                <div className="text-black-75 text-sm sm:text-base font-light self-center">9:00 AM - 7:00 PM</div>
                
                {/* Friday */}
                <div className="font-heading text-black-100 text-xl sm:text-2xl font-normal">Friday</div>
                <div className="text-black-75 text-sm sm:text-base font-light self-center">9:00 AM - 7:00 PM</div>
                
                {/* Saturday */}
                <div className="font-heading text-black-100 text-xl sm:text-2xl font-normal">Saturday</div>
                <div className="text-black-75 text-sm sm:text-base font-light self-center">8:00 AM - 11:00 PM</div>
                
                {/* Sunday */}
                <div className="font-heading text-black-100 text-xl sm:text-2xl font-normal">Sunday</div>
                <div className="text-black-75 text-sm sm:text-base font-light self-center">8:00 AM - 11:00 PM</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CTA Section */}
      <section className="bg-white-cream py-16 md:py-24 flex items-center justify-center px-6 w-full">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 lg:gap-24 w-full max-w-[1000px] justify-center items-center">
          <button className="bg-primary-2 text-white-cream font-heading text-xl sm:text-2xl md:text-3xl py-4 sm:py-5 px-8 sm:px-12 md:px-20 rounded-[1.25rem] hover:bg-primary-1 transition-colors shadow-sm whitespace-nowrap w-full sm:w-auto">
            Contact Us
          </button>
          <button className="bg-secondary-1 text-black-100 font-heading text-xl sm:text-2xl md:text-3xl py-4 sm:py-5 px-8 sm:px-12 md:px-20 rounded-[1.25rem] hover:brightness-95 transition-all shadow-sm whitespace-nowrap w-full sm:w-auto">
            Get Directions
          </button>
        </div>
      </section>

      {/* 3. Social Media Section */}
      {/* 3. Social Media Section */}
      <section className="bg-white-cream pb-24 md:pb-32 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 w-full overflow-hidden">
        <h2 className="font-heading text-black-100 text-[clamp(2.5rem,5vw,4.5rem)] mb-10 sm:mb-16 md:mb-24 text-center">
          Follow us on
        </h2>
        
        <div className="grid grid-cols-4 gap-5 sm:gap-8 md:gap-8 lg:gap-12 xl:gap-16 max-w-[1200px] w-full">
          {/* Facebook */}
          <a href="#" className="group bg-transparent md:bg-secondary-2 rounded-[1rem] sm:rounded-[1.5rem] lg:rounded-[2rem] w-full flex flex-col items-center justify-center transition-transform hover:-translate-y-1 sm:hover:-translate-y-2 shadow-none md:shadow-sm md:hover:shadow-md aspect-square md:aspect-auto md:h-[170px] lg:h-[210px]">
            <div className="flex-1 flex items-center justify-center w-full">
              <svg viewBox="0 0 24 24" className="w-[48px] sm:w-[56px] md:w-[72px] lg:w-[88px] aspect-square transition-all duration-500 ease-out md:scale-100 md:group-hover:scale-[1.35]">
                 <rect width="24" height="24" rx="5" className="fill-[#1877F2] md:fill-black-100 md:group-hover:fill-[#1877F2] transition-colors duration-300" />
                 <path className="fill-white-cream md:fill-[#F5E2CC]" d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3l.46-3.56h-3.46V7.05c0-1.03.28-1.73 1.76-1.73z" />
              </svg>
            </div>
            <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 scale-75 md:max-h-12 md:opacity-100 md:mb-6 lg:mb-8 md:scale-100 md:group-hover:max-h-0 md:group-hover:opacity-0 md:group-hover:mb-0 md:group-hover:scale-75 flex-shrink-0">
              <span className="font-heading text-black-100 text-base md:text-xl lg:text-[1.75rem] leading-none">Facebook</span>
            </div>
          </a>

          {/* Instagram */}
          <a href="#" className="group bg-transparent md:bg-secondary-2 rounded-[1rem] sm:rounded-[1.5rem] lg:rounded-[2rem] w-full flex flex-col items-center justify-center transition-transform hover:-translate-y-1 sm:hover:-translate-y-2 shadow-none md:shadow-sm md:hover:shadow-md aspect-square md:aspect-auto md:h-[170px] lg:h-[210px]">
            <div className="flex-1 flex items-center justify-center w-full">
              <svg viewBox="0 0 24 24" className="w-[48px] sm:w-[56px] md:w-[72px] lg:w-[88px] aspect-square relative transition-all duration-500 ease-out md:scale-100 md:group-hover:scale-[1.35]">
                 <defs>
                   <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#FCAF45" />
                     <stop offset="50%" stopColor="#FD1D1D" />
                     <stop offset="100%" stopColor="#833AB4" />
                   </linearGradient>
                 </defs>
                 <rect width="24" height="24" rx="5" className="fill-[url(#ig-grad)] md:fill-black-100 md:group-hover:fill-[url(#ig-grad)] transition-all duration-300" />
                 <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" className="stroke-white-cream md:stroke-[#F5E2CC]" strokeWidth="1.8" fill="none" />
                 <circle cx="12" cy="12" r="3" className="stroke-white-cream md:stroke-[#F5E2CC]" strokeWidth="1.8" fill="none" />
                 <circle cx="16.5" cy="7.5" r="1" className="fill-white-cream md:fill-[#F5E2CC]" />
              </svg>
            </div>
            <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 scale-75 md:max-h-12 md:opacity-100 md:mb-6 lg:mb-8 md:scale-100 md:group-hover:max-h-0 md:group-hover:opacity-0 md:group-hover:mb-0 md:group-hover:scale-75 flex-shrink-0">
              <span className="font-heading text-black-100 text-base md:text-xl lg:text-[1.75rem] leading-none">Instagram</span>
            </div>
          </a>

          {/* Twitter */}
          <a href="#" className="group bg-transparent md:bg-secondary-2 rounded-[1rem] sm:rounded-[1.5rem] lg:rounded-[2rem] w-full flex flex-col items-center justify-center transition-transform hover:-translate-y-1 sm:hover:-translate-y-2 shadow-none md:shadow-sm md:hover:shadow-md aspect-square md:aspect-auto md:h-[170px] lg:h-[210px]">
            <div className="flex-1 flex items-center justify-center w-full">
              <svg viewBox="0 0 24 24" className="w-[48px] sm:w-[56px] md:w-[72px] lg:w-[88px] aspect-square transition-all duration-500 ease-out md:scale-100 md:group-hover:scale-[1.35]">
                 <defs>
                   <linearGradient id="tw-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#1DA1F2" />
                     <stop offset="100%" stopColor="#71C9F8" />
                   </linearGradient>
                 </defs>
                 <rect width="24" height="24" rx="5" className="fill-[url(#tw-grad)] md:fill-black-100 md:group-hover:fill-[url(#tw-grad)] transition-colors duration-300" />
                 <path className="fill-white-cream md:fill-[#F5E2CC]" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.71 2.14 2.95 4.02 2.99-1.47 1.15-3.32 1.83-5.33 1.83-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" transform="scale(0.65) translate(6.46, 6.46)" />
              </svg>
            </div>
            <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 scale-75 md:max-h-12 md:opacity-100 md:mb-6 lg:mb-8 md:scale-100 md:group-hover:max-h-0 md:group-hover:opacity-0 md:group-hover:mb-0 md:group-hover:scale-75 flex-shrink-0">
              <span className="font-heading text-black-100 text-base md:text-xl lg:text-[1.75rem] leading-none">Twitter</span>
            </div>
          </a>

          {/* Pinterest */}
          <a href="#" className="group bg-transparent md:bg-secondary-2 rounded-[1rem] sm:rounded-[1.5rem] lg:rounded-[2rem] w-full flex flex-col items-center justify-center transition-transform hover:-translate-y-1 sm:hover:-translate-y-2 shadow-none md:shadow-sm md:hover:shadow-md aspect-square md:aspect-auto md:h-[170px] lg:h-[210px]">
            <div className="flex-1 flex items-center justify-center w-full">
              <svg viewBox="0 0 24 24" className="w-[48px] sm:w-[56px] md:w-[72px] lg:w-[88px] aspect-square transition-all duration-500 ease-out md:scale-100 md:group-hover:scale-[1.35]">
                 <defs>
                   <linearGradient id="pin-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#CB2027" />
                     <stop offset="100%" stopColor="#E60023" />
                   </linearGradient>
                 </defs>
                 <rect width="24" height="24" rx="5" className="fill-[url(#pin-grad)] md:fill-black-100 md:group-hover:fill-[url(#pin-grad)] transition-colors duration-300" />
                 <path className="fill-white-cream md:fill-[#F5E2CC]" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.426 2.977 7.426 6.953 0 4.155-2.617 7.498-6.253 7.498-1.22 0-2.368-.633-2.763-1.385l-.752 2.871c-.272 1.042-1.006 2.348-1.503 3.141 1.144.354 2.355.545 3.601.545 6.621 0 11.988-5.367 11.988-11.987C24 5.367 18.638 0 12.017 0z" transform="scale(0.65) translate(6.46, 6.46)" />
              </svg>
            </div>
            <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 scale-75 md:max-h-12 md:opacity-100 md:mb-6 lg:mb-8 md:scale-100 md:group-hover:max-h-0 md:group-hover:opacity-0 md:group-hover:mb-0 md:group-hover:scale-75 flex-shrink-0">
              <span className="font-heading text-black-100 text-base md:text-xl lg:text-[1.75rem] leading-none">Pinterest</span>
            </div>
          </a>
        </div>
      </section>

      {/* 4. Image Gallery Section */}
      <section className="bg-secondary-1 py-20 md:py-32 px-6 flex flex-col items-center overflow-hidden w-full">
        <h2 className="font-heading text-black-100 text-[clamp(2.5rem,5vw,4.5rem)] mb-10 text-center">
          Image Gallery
        </h2>

        <div className="relative bg-primary-1 p-2 rounded-full grid grid-cols-2 mb-12 sm:mb-16 shadow-inner w-[95%] max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[600px]">
          {/* Sliding Pill Background */}
          <div 
            className="absolute top-2 bottom-2 left-2 w-[calc(50%-8px)] bg-secondary-1 rounded-full shadow-md transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0"
            style={{ transform: galleryTab === 'interior' ? 'translateX(0)' : 'translateX(100%)' }}
          />

          <button
            onClick={() => setGalleryTab('interior')}
            className={`relative z-10 py-3 sm:py-3.5 rounded-full font-heading text-lg sm:text-xl transition-colors duration-500 text-center outline-none focus-visible:ring-2 focus-visible:ring-secondary-1 ${
              galleryTab === 'interior'
                ? 'text-black-100'
                : 'text-white-cream hover:text-secondary-2'
            }`}
          >
            Interior
          </button>
          <button
            onClick={() => setGalleryTab('exterior')}
            className={`relative z-10 py-3 sm:py-3.5 rounded-full font-heading text-lg sm:text-xl transition-colors duration-500 text-center outline-none focus-visible:ring-2 focus-visible:ring-secondary-1 ${
              galleryTab === 'exterior'
                ? 'text-black-100'
                : 'text-white-cream hover:text-secondary-2'
            }`}
          >
            Exterior
          </button>
        </div>

        <div className="grid w-full max-w-[1200px]" style={{ gridTemplateAreas: "'stack'" }}>
          {/* Interior Images */}
          <div 
            style={{ gridArea: 'stack' }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full transition-all duration-700 ease-in-out ${
              galleryTab === 'interior' 
                ? 'opacity-100 translate-x-0 pointer-events-auto z-10' 
                : 'opacity-0 -translate-x-12 pointer-events-none z-0'
            }`}
          >
            {interiorImages.map((src, index) => (
              <div key={src} className="w-full aspect-[4/3] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-lg group relative bg-black-10">
                <img
                  src={src}
                  alt={`Interior view ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Exterior Images */}
          <div 
            style={{ gridArea: 'stack' }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full transition-all duration-700 ease-in-out ${
              galleryTab === 'exterior' 
                ? 'opacity-100 translate-x-0 pointer-events-auto z-10' 
                : 'opacity-0 translate-x-12 pointer-events-none z-0'
            }`}
          >
            {exteriorImages.map((src, index) => (
              <div key={src} className="w-full aspect-[4/3] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-lg group relative bg-black-10">
                <img
                  src={src}
                  alt={`Exterior view ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Location Section */}
      <section className="bg-white-cream py-20 md:py-32 px-4 sm:px-6 flex flex-col items-center w-full overflow-hidden">
        <h2 className="font-heading text-black-100 text-[clamp(2.5rem,5vw,4.5rem)] mb-10 text-center">
          Location
        </h2>
        
        <div className="w-[92%] sm:w-[95%] md:w-full max-w-[1200px] min-w-0 h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-md border border-black-5 bg-black-5 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527998699!2d-74.14448744576391!3d40.697631233346514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1718224536923!5m2!1sen!2s" 
            style={{ border: 0, width: '100%', height: '100%', maxWidth: '100%' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Cafe Location Map"
            className="absolute inset-0 w-full h-full max-w-full grayscale-[20%] contrast-125 opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
          />
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="bg-secondary-2 py-20 md:py-32 px-6 flex flex-col items-center w-full">
        <h2 className="font-heading text-black-100 text-[clamp(2.5rem,5vw,4.5rem)] mb-12 md:mb-16 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="w-full max-w-[800px] flex flex-col gap-5 sm:gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="flex flex-col w-full">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full bg-primary-1 text-white-cream py-5 px-6 sm:px-10 rounded-[1.25rem] flex items-center justify-between font-heading text-lg sm:text-xl transition-colors hover:brightness-110 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-black-100 cursor-pointer"
                >
                  <span className="text-left pr-4">{faq.question}</span>
                  <div className="shrink-0 flex items-center justify-center w-8 h-8">
                    {isOpen ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    )}
                  </div>
                </button>
                <div 
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-12 pt-4 md:pt-6 pb-2 text-black-100 text-base sm:text-lg font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Get in Touch Form Section */}
      <section className="bg-primary-2 py-20 md:py-32 px-6 flex justify-center w-full">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
          <div className="w-full max-w-[600px] flex flex-col">
            <h2 className="font-heading text-white-cream text-[clamp(3.5rem,6vw,5rem)] leading-tight tracking-wide mb-10">
              Get in touch with us
            </h2>
            
            <form className="flex flex-col gap-5 sm:gap-6 w-full relative z-10" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-secondary-2 text-black-100 placeholder:text-black-75 py-4 px-6 rounded-[0.5rem] outline-none focus-visible:ring-2 focus-visible:ring-white-cream text-lg"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-secondary-2 text-black-100 placeholder:text-black-75 py-4 px-6 rounded-[0.5rem] outline-none focus-visible:ring-2 focus-visible:ring-white-cream text-lg"
              />
              <input 
                type="tel" 
                placeholder="Phone No." 
                className="w-full bg-secondary-2 text-black-100 placeholder:text-black-75 py-4 px-6 rounded-[0.5rem] outline-none focus-visible:ring-2 focus-visible:ring-white-cream text-lg"
              />
              
              {/* Custom Dropdown */}
              <div className="relative flex flex-col w-full z-20">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full bg-secondary-2 text-black-100 py-4 px-6 outline-none focus-visible:ring-2 focus-visible:ring-white-cream text-lg flex items-center justify-between text-left transition-colors cursor-pointer ${
                    isDropdownOpen ? 'rounded-t-[0.5rem]' : 'rounded-[0.5rem]'
                  }`}
                >
                  <span className={selectedPurpose ? "text-black-100" : "text-black-75"}>
                    {selectedPurpose || "Purpose"}
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 text-black-75 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out w-full bg-secondary-2 rounded-b-[0.5rem] overflow-hidden shadow-md ${
                    isDropdownOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden flex flex-col">
                    <div className="pb-3 flex flex-col w-full">
                      {["Feedback", "General Enquiry", "Reservation Request"].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setSelectedPurpose(option);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full text-left px-10 py-2.5 text-black-75 hover:text-black-100 hover:bg-secondary-1 transition-colors text-lg cursor-pointer"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <textarea 
                placeholder="Message" 
                rows="6"
                className="w-full bg-secondary-2 text-black-100 placeholder:text-black-75 py-4 px-6 rounded-[0.5rem] outline-none focus-visible:ring-2 focus-visible:ring-white-cream text-lg resize-none relative z-10"
              />
              
              <button 
                type="submit" 
                className="mt-6 self-center lg:self-start bg-secondary-1 text-black-100 font-bold text-lg py-3 px-12 rounded-[0.5rem] hover:brightness-110 transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-white-cream cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
