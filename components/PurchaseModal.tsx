import React, { useState, useEffect } from 'react';
import { PurchaseStep } from '../types';
import { EBOOK_PRICE } from '../constants';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<PurchaseStep>(PurchaseStep.Email);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      // Reset state when modal is closed
      setTimeout(() => {
        setStep(PurchaseStep.Email);
        setEmail('');
        setError('');
        setIsLoading(false);
      }, 300); // Delay to allow for closing animation
    }
  }, [isOpen]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setStep(PurchaseStep.Payment);
  };

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(PurchaseStep.Confirmation);
    }, 2000); // Simulate payment processing time
  };

  if (!isOpen) {
    return null;
  }

  const renderContent = () => {
    switch (step) {
      case PurchaseStep.Email:
        return (
          <>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Get Your Ebook</h3>
            <p className="text-slate-600 mb-6">Enter your email address to receive the ebook after purchase.</p>
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                required
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button type="submit" className="w-full bg-amber-500 text-black font-bold py-3 px-6 rounded-lg mt-6 hover:bg-amber-600 transition-colors duration-300">
                Proceed to Payment
              </button>
            </form>
          </>
        );
      case PurchaseStep.Payment:
        return (
          <>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Complete Your Purchase</h3>
            <p className="text-slate-600 mb-2">You are purchasing the "Graphic Guide to Residential Space Planning".</p>
            <p className="text-slate-600 mb-6">A copy will be sent to <span className="font-bold">{email}</span>.</p>
            <button
              onClick={handlePayment}
              disabled={isLoading}
              className="w-full bg-[#ffc439] text-[#003087] font-bold py-3 px-6 rounded-lg hover:bg-[#f0b92f] transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#003087]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 mr-2" viewBox="0 0 48 30" xmlns="http://www.w3.org/2000/svg"><path fill="#003087" d="M26.24 23.65c-1.14 0-2.1-.27-2.9-.8-1.57-.99-2.36-2.5-2.36-4.54 0-2.1.8-3.66 2.37-4.65 1.6-1 3.58-1.47 5.92-1.47h1.4v-.88c0-.75-.1-1.33-.3-1.74-.2-.4-.5-.73-.9-.94-.4-.2-.9-.32-1.5-.32-1.1 0-2.03.3-2.8.9-.78.6-1.17 1.4-1.17 2.4H19.7c0-1.4.4-2.58 1.18-3.55.78-.97 1.84-1.63 3.16-2 1.33-.35 2.8-.35 4.4 0 1.2.27 2.1.84 2.7 1.7.6.85.9 1.9.9 3.2v8.5h-3.4v-1.9h-.3c-.5.7-1.1 1.2-1.9 1.5-.8.3-1.6.5-2.6.5zm.3-2.6c.6 0 1.1-.1 1.5-.3.4-.2.7-.5.9-.8.2-.3.3-.7.3-1.2v-1.4h-1.6c-1.3 0-2.3.2-3 .6-.7.4-1.1 1-1.1 1.8 0 .8.3 1.4.9 1.8.6.4 1.4.6 2.1.6zM3.44 23.35h3.4v-22.9h-3.4v22.9zM15.44.45h3.8l-4.4 22.9h-3.8L15.44.45zM35.64 12.05c-.3-1-.8-1.7-1.4-2.2-.6-.5-1.4-.7-2.3-.7s-1.7.2-2.3.7c-.6.5-1.1 1.2-1.4 2.2l-3.3 11.3h3.5l.8-2.9h4.9l.5 2.9h3.4l-3.3-11.3zm-3.6 5.8 1.2-4.6c.1-.5.3-.9.4-1.3.1-.4.2-.8.2-1.1l.2 1.1c.1.4.2.8.4 1.3l1.2 4.6h-3.6z"></path></svg>
              )}
              {isLoading ? 'Processing...' : `Pay $${EBOOK_PRICE.toFixed(2)} USD`}
            </button>
          </>
        );
      case PurchaseStep.Confirmation:
        return (
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
               <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-700">Thank You!</h3>
            <p className="text-slate-600">Your purchase is complete. The "Graphic Guide to Residential Space Planning" has been sent to <span className="font-bold">{email}</span>.</p>
             <button onClick={onClose} className="w-full bg-slate-200 text-slate-800 font-bold py-3 px-6 rounded-lg mt-8 hover:bg-slate-300 transition-colors duration-300">
                Close
              </button>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md m-auto relative transform transition-transform duration-300 scale-95" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default PurchaseModal;