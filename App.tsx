
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TableOfContents from './components/TableOfContents';
import Testimonials from './components/Testimonials';
import PurchaseModal from './components/PurchaseModal';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero onBuyNow={handleOpenModal} />
        <Features />
        <TableOfContents onBuyNow={handleOpenModal} />
        <Testimonials />
      </main>
      <Footer />
      <PurchaseModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
