import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
// import { Footer } from "@/components/layout/footer"; // banao baad mein

// ── In production: fetch session from cookies/JWT here ──
// import { getServerSession } from "@/lib/auth"
// const session = await getServerSession()

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  // TODO: Pass real session data once auth is wired
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar
        wishlistCount={2}     // → from session/DB
        countryCode="pk"       // → from cookie or user preference
        user={null}            // → null = logged out, object = logged in
      />
      <main className="flex-1">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
