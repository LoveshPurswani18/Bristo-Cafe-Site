import coffeeMug from '../assets/Coffee mug-circle.png';

export default function Home() {
  return (
    <div className="bg-secondary-1 min-h-[calc(100vh-6rem)] flex items-center justify-center">
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
    </div>
  );
}
