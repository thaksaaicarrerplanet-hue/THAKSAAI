import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LiquidScrollContainer from '../components/ui/LiquidScrollContainer';

export default function PublicLayout() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050811] text-[#F7F8F4] overflow-x-clip selection:bg-[#C7F36B] selection:text-[#050811]">
      <Navbar />
      <LiquidScrollContainer>
        <main id="main" tabIndex={-1} className="relative z-10 flex-1 pt-[72px] focus:outline-none">
          <Outlet />
        </main>
      </LiquidScrollContainer>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
