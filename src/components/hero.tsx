import {
  ArrowRight,
  BookOpen,
  PenSquare,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-sm px-4 py-1.5">
              Join 10,000+ writers sharing their stories
            </Badge>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Where stories come to life
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              Discover thought-provoking articles, share your unique
              perspective, and connect with a community of passionate writers
              and readers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="text-base h-12 px-8 gap-2" asChild>
                <Link href="/register">
                  <PenSquare className="h-5 w-5" />
                  Start Writing
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base h-12 px-8 bg-transparent"
                asChild
              >
                <Link href="/explore">Explore Stories</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">
                Active Writers
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">
                Stories Published
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-foreground">2M+</div>
              <div className="text-sm text-muted-foreground">
                Monthly Readers
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-3">
                Featured Stories
              </h2>
              <p className="text-muted-foreground text-lg">
                Handpicked stories from our community
              </p>
            </div>
            <Button variant="ghost" className="hidden sm:flex gap-2" asChild>
              <Link href="/stories">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Art of Minimalist Living",
                excerpt:
                  "Discover how simplifying your life can lead to greater happiness and fulfillment in unexpected ways.",
                author: "Sarah Chen",
                readTime: "8 min read",
                category: "Lifestyle",
                image: "/lifestyle.jpg",
              },
              {
                title: "Building Resilient Teams",
                excerpt:
                  "Learn the key principles that transform good teams into great ones through trust and collaboration.",
                author: "Marcus Johnson",
                readTime: "12 min read",
                category: "Leadership",
                image: "/leadership.jpg",
              },
              {
                title: "The Future of Sustainable Tech",
                excerpt:
                  "Exploring how technology and sustainability intersect to create a better tomorrow for everyone.",
                author: "Elena Rodriguez",
                readTime: "10 min read",
                category: "Technology",
                image: "/technology.jpg",
              },
            ].map((story, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:border-accent transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[3/2] overflow-hidden bg-muted">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <Badge variant="secondary" className="text-xs">
                    {story.category}
                  </Badge>
                  <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      {story.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {story.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 sm:hidden">
            <Button variant="ghost" className="gap-2" asChild>
              <Link href="/stories">
                View All Stories
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why BlogSpace Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why BlogSpace?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to share your voice and grow your audience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                <PenSquare className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Beautiful Editor
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Write with a distraction-free editor designed for creativity and
                focus.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Engaged Community
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with readers and writers who share your passions and
                interests.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Grow Your Reach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built-in tools to help your stories reach the right audience and
                grow your following.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Explore Topics
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover stories across diverse categories
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Technology",
              "Lifestyle",
              "Business",
              "Health",
              "Travel",
              "Food",
              "Design",
              "Science",
              "Culture",
              "Education",
              "Finance",
              "Entertainment",
            ].map((topic) => (
              <Link
                key={topic}
                href={`/topics/${topic.toLowerCase()}`}
                className="px-6 py-3 rounded-full border border-border hover:border-accent hover:bg-accent/5 text-foreground hover:text-accent transition-all duration-200 text-sm font-medium"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Loved by Writers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See what our community has to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "BlogSpace gave me the platform to share my voice. The community here is incredibly supportive and engaged.",
                author: "Alex Thompson",
                role: "Tech Writer",
              },
              {
                quote:
                  "The editor is a dream to use. I can focus on writing without any distractions. It's exactly what I needed.",
                author: "Maya Patel",
                role: "Lifestyle Blogger",
              },
              {
                quote:
                  "I've grown my audience from zero to thousands in just six months. The reach here is incredible.",
                author: "James Wilson",
                role: "Business Consultant",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t">
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-background">
            <CardContent className="p-8 lg:p-12">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <BookOpen className="h-12 w-12 text-accent mx-auto" />
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                  Get the best stories weekly
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join our newsletter and receive curated stories, writing tips,
                  and community highlights every week.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 bg-background"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 px-8 whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance max-w-3xl mx-auto">
            Ready to share your story with the world?
          </h2>
          <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of writers who are already sharing their unique
            perspectives on BlogSpace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-base h-12 px-8 gap-2"
              asChild
            >
              <Link href="/register">
                <PenSquare className="h-5 w-5" />
                Start Writing for Free
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base h-12 px-8 border-accent-foreground/20 hover:bg-accent-foreground/10 text-accent-foreground bg-transparent"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
