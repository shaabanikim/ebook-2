import React from 'react';
import { TABLE_OF_CONTENTS, EBOOK_PRICE } from '../constants';

interface TableOfContentsProps {
  onBuyNow: () => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ onBuyNow }) => {
  return (
    <section id="toc" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Inside The Guide</h2>
          <div className="space-y-4">
            {TABLE_OF_CONTENTS.map((item, index) => (
              <div key={index} className="bg-slate-100 p-4 rounded-lg text-left flex items-center shadow-sm">
                <span className="text-amber-600 font-bold w-40 text-sm">{item.chapter}</span>
                <span className="text-slate-700 font-medium flex-1">{item.title}</span>
              </div>
            ))}
          </div>
           <div className="mt-12">
              <button 
                onClick={onBuyNow} 
                className="bg-amber-500 text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-amber-600 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Your Copy for ${EBOOK_PRICE}
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;