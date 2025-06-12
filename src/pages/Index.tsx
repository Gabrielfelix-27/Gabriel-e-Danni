import React from 'react';
import FloatingHearts from '../components/FloatingHearts';
import FallingHearts from '../components/FallingHearts';
import CoupleHeader from '../components/CoupleHeader';
import LoveTimer from '../components/LoveTimer';
import LoveLetter from '../components/LoveLetter';
import PhotoGallery from '../components/PhotoGallery';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B7C9A8] via-[#A3B18A] to-[#588157] relative overflow-hidden">
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Falling hearts animation on page load */}
      <FallingHearts />
      
      {/* Decorative elements com tons de sage */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#B7C9A8] rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#A3B18A] rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-[#DAD7CD] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-[#588157] rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#344E41] rounded-full blur-3xl"></div>
      </div>
      
      {/* Additional romantic overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <CoupleHeader />
        <LoveTimer />
        <LoveLetter />
        <PhotoGallery />
        <Footer />
      </div>
      
      {/* Subtle overlay for better contrast */}
      <div className="fixed inset-0 bg-black/10 pointer-events-none z-5"></div>
    </div>
  );
};

export default Index;
