// src/app/auth/layout.tsx
import { ReactNode } from 'react';

// Next.js Metadata
export const metadata = {
  title: 'Zenvy | Authentication',
  description: 'Zenvy International, Delivered Everywhere',
};

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f9fa] text-[#0B2E33] font-sans antialiased selection:bg-[#93B1B5] selection:text-[#0B2E33]">
      
      {/* Main Container Wrapper */}
      <div className="w-full max-w-md p-8 bg-white border border-[rgba(11,46,51,0.11)] rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md md:p-10 mx-4">
        
        {/* Zenvy Brand Header (Har auth screen par consistent rahega) */}
        <header className="text-center mb-6 select-none">
          <h1 className="text-3xl font-extrabold tracking-tight font-display text-[#0B2E33]">
            Zenvy
          </h1>
          <p className="text-xs sm:text-sm text-[#898989] mt-1.5 font-medium tracking-wide">
            Zenvy International, Delivered Everywhere
          </p>
        </header>

        {/* Separator Line for clean UI structure */}
        <div className="h-[1px] w-full bg-[rgba(11,46,51,0.06)] mb-6" />
        
        {/* Content Wrapper for Pages */}
        <main className="transition-all duration-200">
          {children}
        </main>
        
      </div>
    </div>
  );
}