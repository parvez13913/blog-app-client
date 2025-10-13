import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Globe,
  Heart,
  PenSquare,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Empowering voices, one story at a time
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              BlogSpace is a platform built for writers and readers who believe
              in the power of storytelling to inspire, educate, and connect
              people across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
                Our Mission
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We believe everyone has a story worth sharing. BlogSpace was
                  created to democratize publishing and give writers of all
                  backgrounds a platform to share their unique perspectives with
                  the world.
                </p>
                <p>
                  Founded in 2020, we&apos;ve grown from a small community of
                  passionate writers to a thriving platform with over 10,000
                  active contributors and millions of monthly readers across
                  150+ countries.
                </p>
                <p>
                  Our mission is simple: to create a space where quality content
                  thrives, meaningful conversations happen, and diverse voices
                  are celebrated.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">10K+</div>
                  <div className="text-sm text-muted-foreground">
                    Active Writers
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">
                    Stories Published
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">2M+</div>
                  <div className="text-sm text-muted-foreground">
                    Monthly Readers
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">150+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The principles that guide everything we do at BlogSpace
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                <PenSquare className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Quality First
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We prioritize thoughtful, well-crafted content over clickbait.
                Every story on BlogSpace is curated to ensure it adds value to
                our community.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Community Driven
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our platform is shaped by the needs and feedback of our writers
                and readers. We&apos;re building this together, one story at a
                time.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Diverse Voices
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We celebrate diversity in all its forms. BlogSpace is a home for
                perspectives from every corner of the world and every walk of
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                BlogSpace began in a small apartment in San Francisco, where
                three friends shared a common frustration: existing blogging
                platforms were either too complicated, too restrictive, or too
                focused on viral content rather than quality writing.
              </p>
              <p>
                We envisioned a platform that would put writers first—a place
                where the focus was on the craft of storytelling, not gaming
                algorithms or chasing metrics. A space where readers could
                discover thought-provoking content without being bombarded by
                ads and distractions.
              </p>
              <p>
                What started as a side project quickly grew into something much
                bigger. Writers from around the world began joining our
                community, sharing stories that ranged from personal essays to
                technical deep-dives, from creative fiction to investigative
                journalism.
              </p>
              <p>
                Today, BlogSpace is home to thousands of writers and millions of
                readers. But our core mission remains the same: to create a
                platform where great writing is celebrated, diverse voices are
                amplified, and meaningful connections are made through the power
                of storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real stories from our community members
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Career Growth
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Sarah Chen, Tech Writer
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  &quot;BlogSpace helped me build my portfolio and establish
                  myself as a thought leader in my field. Within six months, I
                  landed my dream job at a major tech company.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Community Connection
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Marcus Johnson, Lifestyle Blogger
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  &quot;I&apos;ve connected with readers and fellow writers from
                  around the world. The community here is incredibly supportive
                  and has helped me grow as a writer.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Published Author
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Elena Rodriguez, Fiction Writer
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  &quot;My short stories on BlogSpace caught the attention of a
                  literary agent. I now have a book deal and it all started
                  here.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Personal Growth
                    </div>
                    <div className="text-sm text-muted-foreground">
                      James Wilson, Personal Essays
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  &quot;Writing on BlogSpace has been therapeutic. Sharing my
                  experiences has helped me process difficult times and connect
                  with others going through similar challenges.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-background">
            <CardContent className="p-8 lg:p-12">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                  Join Our Community
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you&apos;re a seasoned writer or just starting out,
                  BlogSpace is the perfect place to share your voice and connect
                  with readers who care about quality content.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" className="h-12 px-8 gap-2" asChild>
                    <Link href="/register">
                      <PenSquare className="h-5 w-5" />
                      Start Writing Today
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
