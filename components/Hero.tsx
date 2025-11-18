import React from 'react';
import { EBOOK_COVER_URL, EBOOK_PRICE } from '../constants';

interface HeroProps {
  onBuyNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuyNow }) => {
  return (
    <section id="hero" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-end">
            <img 
              src={EBOOK_COVER_URL} 
              alt="Graphic Guide to Residential Space Planning Ebook Cover" 
              className="rounded-lg shadow-2xl max-w-sm w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Master the Art of Residential Space Planning
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              The ultimate graphic guide to creating functional, beautiful, and harmonious living spaces. Perfect for designers, architects, and home enthusiasts.
            </p>
            <div className="mt-8">
              <button 
                onClick={onBuyNow} 
                className="bg-amber-500 text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-amber-600 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Buy Now for ${EBOOK_PRICE}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;