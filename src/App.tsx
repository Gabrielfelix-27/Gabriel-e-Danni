import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const queryClient = new QueryClient();

const App = () => {
  const [showMain, setShowMain] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (!showMain) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50 transition-all duration-700">
        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => setShowMain(true), 400);
          }}
          className={`flex items-center gap-3 px-10 py-5 rounded-full font-bold text-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-2xl bg-[#588157] text-white hover:bg-[#6fa36b] scale-100`}
        >
          <Heart className="animate-heartbeat" size={32} fill="currentColor" />
          Surpresa
        </button>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
