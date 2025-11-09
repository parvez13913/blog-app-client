"use client";

import { Button } from "@/components/ui/button";
import { Menu, PenSquare, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "./context/AuthContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            <div className="w-8 h-8 bg-accent rounded-lg" />
            <span className="font-serif">BlogSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/explore"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Explore
            </Link>
            <Link
              href="/stories"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Stories
            </Link>
            <Link
              href="/writers"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Writers
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {user?.payload?.userId ? (
              <User className="h-8 w-8 cursor-pointer p-1 bg-gray-500 rounded-full" />
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
            )}
            <Button size="sm" className="gap-2" asChild>
              {user?.payload?.userId ? (
                <Link href="/start-writing">
                  <PenSquare className="h-4 w-4" />
                  Start Writing
                </Link>
              ) : (
                <Link href="/login">
                  <PenSquare className="h-4 w-4" />
                  Start Writing
                </Link>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <Link
              href="/explore"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              href="/stories"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Stories
            </Link>
            <Link
              href="/writers"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Writers
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 space-y-2 border-t">
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  Sign in
                </Link>
              </Button>
              <Button size="sm" className="w-full gap-2" asChild>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  <PenSquare className="h-4 w-4" />
                  Start Writing
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
