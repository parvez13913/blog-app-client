import RegisterForm from "@/components/register-form";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero section */}
      <div className="hidden lg:flex lg:w-1/2 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/90 to-accent" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-accent-foreground">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-semibold"
          >
            <div className="w-8 h-8 bg-accent-foreground rounded-lg" />
            <span className="font-serif">BlogSpace</span>
          </Link>

          <div className="space-y-6 max-w-lg">
            <h1 className="font-serif text-5xl lg:text-6xl leading-tight text-balance">
              Share your stories with the world
            </h1>
            <p className="text-lg text-accent-foreground/90 leading-relaxed">
              Join our community of writers and readers. Create, publish, and
              discover compelling stories that matter.
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <div>
              <div className="text-3xl font-semibold">10K+</div>
              <div className="text-accent-foreground/80">Active Writers</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">50K+</div>
              <div className="text-accent-foreground/80">Stories Published</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form section */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <Link
            href="/"
            className="flex lg:hidden items-center gap-2 text-2xl font-semibold text-foreground"
          >
            <div className="w-8 h-8 bg-accent rounded-lg" />
            <span className="font-serif">BlogSpace</span>
          </Link>

          <div className="space-y-2">
            <h2 className="font-serif text-4xl text-foreground text-balance">
              Create your account
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Start your writing journey today. It only takes a minute.
            </p>
          </div>

          <RegisterForm />

          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-accent hover:text-accent/80 font-medium transition-colors"
            >
              Sign in
            </Link>
          </div>

          <p className="text-xs text-center text-muted-foreground leading-relaxed">
            By creating an account, you agree to our{" "}
            <Link
              href="/terms"
              className="underline hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
