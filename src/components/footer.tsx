import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-semibold"
              >
                <div className="w-8 h-8 bg-accent rounded-lg" />
                <span className="font-serif">BlogSpace</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                A platform where writers and readers connect through powerful
                stories. Share your voice, discover new perspectives, and join a
                thriving community.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="https://twitter.com"
                  className="w-9 h-9 rounded-full bg-background border border-border hover:border-accent hover:bg-accent/5 flex items-center justify-center transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="https://facebook.com"
                  className="w-9 h-9 rounded-full bg-background border border-border hover:border-accent hover:bg-accent/5 flex items-center justify-center transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="w-9 h-9 rounded-full bg-background border border-border hover:border-accent hover:bg-accent/5 flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="w-9 h-9 rounded-full bg-background border border-border hover:border-accent hover:bg-accent/5 flex items-center justify-center transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="https://github.com"
                  className="w-9 h-9 rounded-full bg-background border border-border hover:border-accent hover:bg-accent/5 flex items-center justify-center transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/features"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stories"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/writers"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Writers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guidelines"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Guidelines
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    API Docs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/licenses"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-foreground mb-1">
                Stay in the loop
              </h3>
              <p className="text-sm text-muted-foreground">
                Get the latest stories and updates delivered to your inbox.
              </p>
            </div>
            <form className="flex w-full lg:w-auto gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full lg:w-64 h-10 bg-background"
                required
              />
              <Button
                type="submit"
                size="sm"
                className="h-10 px-6 whitespace-nowrap gap-2"
              >
                <Mail className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 BlogSpace. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/sitemap"
                className="hover:text-accent transition-colors"
              >
                Sitemap
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-accent transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="/status"
                className="hover:text-accent transition-colors"
              >
                Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
