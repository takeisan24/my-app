"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

interface GameLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  showFooter?: boolean;
  showBackToTop?: boolean;
}

const GameLayout = ({
  children,
  title,
  description,
  showFooter = true,
  showBackToTop = true
}: GameLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      <Navbar />
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <main className="relative">
        {/* Header Section */}
        {(title || description) && (
          <div className="text-center py-16 px-8">
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </main>

      {showFooter && <Footer />}
      {showBackToTop && <BackToTop />}
    </div>
  );
};

// Simple Layout without header section
export const SimpleGameLayout = ({
  children,
  showFooter = false,
  showBackToTop = true
}: {
  children: ReactNode;
  showFooter?: boolean;
  showBackToTop?: boolean;
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      <Navbar />
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <main className="relative z-10">
        {children}
      </main>

      {showFooter && <Footer />}
      {showBackToTop && <BackToTop />}
    </div>
  );
};

// Full Screen Layout (for games that need full screen)
export const FullScreenGameLayout = ({
  children,
  showNavbar = true
}: {
  children: ReactNode;
  showNavbar?: boolean;
}) => {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
      {showNavbar && <Navbar />}
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <main className={`relative z-10 ${showNavbar ? 'h-[calc(100vh-80px)]' : 'h-full'}`}>
        {children}
      </main>
    </div>
  );
};

export default GameLayout;
