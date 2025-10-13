import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Large 404 Text */}
        <div className="relative">
          <h1 className="text-[12rem] md:text-[16rem] font-bold text-accent/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Page Not Found
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto text-balance">
                Oops! The story you&apos;re looking for seems to have wandered
                off. Let&apos;s get you back on track.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button asChild size="lg" className="min-w-[160px]">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-w-[160px] bg-transparent"
          >
            <Link href="/explore">
              <Search className="mr-2 h-4 w-4" />
              Explore Stories
            </Link>
          </Button>
        </div>

        {/* Back Link */}
        <div className="pt-8">
          <Button
            asChild
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Decorative Element */}
        <div className="pt-12 opacity-50">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-border" />
            <div className="h-2 w-2 rounded-full bg-accent" />
            <div className="h-px w-12 bg-border" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
