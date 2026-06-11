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
    <div className="min-h-screen flex items-center justify-center bg-bg-2 text-text font-body antialiased selection:bg-mid selection:text-text">
      
      {/* Main Container Wrapper */}
      <div className="w-full max-w-md p-8 bg-surface border border-border rounded-2xl shadow-card transition-all duration-300 hover:shadow-brand md:p-10 mx-4">
        
        {/* Zenvy Brand Header (Har auth screen par consistent rahega) */}
        <header className="text-center mb-6 select-none">
          <h1 className="text-3xl font-extrabold tracking-tight font-display text-text">
            Zenvy
          </h1>
          <p className="text-xs sm:text-sm text-text-3 mt-1.5 font-medium tracking-wide">
            Zenvy International, Delivered Everywhere
          </p>
        </header>

        {/* Separator Line for clean UI structure */}
        <div className="h-px w-full bg-glass mb-6" />
        
        {/* Content Wrapper for Pages */}
        <main className="transition-all duration-200">
          {children}
        </main>
        
      </div>
    </div>
  );
}