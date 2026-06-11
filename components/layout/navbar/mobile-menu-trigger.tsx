// components/layout/navbar/mobile-menu-trigger.tsx
"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/navbar/mobile-menu";

export function MobileMenuTrigger() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setMobileMenuOpen(true)}
        className={cn(
          "md:hidden w-10.5 h-10.5 rounded-xl",
          "border border-border bg-glass",
          "flex items-center justify-center text-text",
          "hover:bg-glass-2 transition-colors",
        )}
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {/* Mobile Drawer iske sath hi render ho jayega */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}