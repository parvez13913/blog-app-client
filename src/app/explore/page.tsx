import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  BookOpen,
  Flame,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

const ExplorePage = () => {
  const trendingStories = [
    {
      id: 1,
      title: "The Future of AI in Creative Writing",
      excerpt:
        "How artificial intelligence is transforming the way we tell stories and create content.",
      author: "Sarah Chen",
      authorImage: "/lifestyle.jpg",
      readTime: "12 min read",
      category: "Technology",
      image: "/technology.jpg",

      trending: true,
    },
    {
      id: 2,
      title: "Minimalism: Less is More",
      excerpt:
        "A deep dive into the philosophy of minimalist living and its impact on mental health.",
      author: "Marcus Johnson",
      authorImage: "/lifestyle.jpg",
      readTime: "8 min read",
      category: "Lifestyle",
      image: "/leadership.jpg",
      trending: true,
    },
    {
      id: 3,
      title: "Building Sustainable Startups",
      excerpt:
        "The new wave of entrepreneurs prioritizing sustainability over rapid growth.",
      author: "Elena Rodriguez",
      authorImage: "/lifestyle.jpg",
      readTime: "15 min read",
      category: "Business",
      image: "/lifestyle.jpg",
      trending: true,
    },
  ];

  const featuredWriters = [
    {
      name: "Sarah Chen",
      bio: "Tech writer exploring AI, design, and the future of work",
      followers: "12.5K",
      stories: 45,
      image: "/technology.jpg",
    },
    {
      name: "Marcus Johnson",
      bio: "Lifestyle blogger sharing insights on minimalism and mindfulness",
      followers: "8.2K",
      stories: 32,
      image: "/technology.jpg",
    },
    {
      name: "Elena Rodriguez",
      bio: "Business strategist writing about sustainable entrepreneurship",
      followers: "15.3K",
      stories: 58,
      image: "/technology.jpg",
    },
    {
      name: "Dr. James Wilson",
      bio: "Health expert sharing evidence-based wellness advice",
      followers: "10.1K",
      stories: 41,
      image: "/technology.jpg",
    },
  ];

  const collections = [
    {
      title: "Startup Stories",
      description: "Real stories from founders building the next big thing",
      count: 24,
      image: "/leadership.jpg",
    },
    {
      title: "Mindful Living",
      description: "Practical guides for a more intentional life",
      count: 18,
      image: "/leadership.jpg",
    },
    {
      title: "Tech Trends 2025",
      description: "The technologies shaping our future",
      count: 31,
      image: "/leadership.jpg",
    },
    {
      title: "Travel Diaries",
      description: "Adventures and insights from around the world",
      count: 27,
      image: "/leadership.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Discover something new
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Explore the best stories on BlogSpace
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              Curated collections, trending topics, and featured writers. Find
              your next favorite read.
            </p>
          </div>
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
              <Flame className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                Trending Now
              </h2>
              <p className="text-muted-foreground">
                The most popular stories this week
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {trendingStories.map((story, index) => (
              <Card
                key={story.id}
                className="group overflow-hidden border-border hover:border-accent transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground gap-1">
                      <TrendingUp className="h-3 w-3" />#{index + 1} Trending
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <Badge variant="secondary" className="text-xs">
                    {story.category}
                  </Badge>
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <img
                      src={story.authorImage || "/placeholder.svg"}
                      alt={story.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">
                        {story.author}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {story.readTime}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Writers Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                  Featured Writers
                </h2>
                <p className="text-muted-foreground">
                  Voices you should follow
                </p>
              </div>
            </div>
            <Button variant="ghost" className="hidden sm:flex gap-2" asChild>
              <Link href="/writers">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWriters.map((writer) => (
              <Card
                key={writer.name}
                className="border-border hover:border-accent transition-all duration-300"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <img
                    src={writer.image || "/placeholder.svg"}
                    alt={writer.name}
                    className="w-20 h-20 rounded-full mx-auto border-2 border-accent/20"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {writer.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {writer.bio}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-6 pt-4 border-t text-sm">
                    <div>
                      <div className="font-semibold text-foreground">
                        {writer.followers}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Followers
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {writer.stories}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Stories
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full bg-transparent"
                  >
                    Follow
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Collections */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                Curated Collections
              </h2>
              <p className="text-muted-foreground">
                Handpicked stories organized by theme
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {collections.map((collection) => (
              <Card
                key={collection.title}
                className="group overflow-hidden border-border hover:border-accent transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 aspect-square sm:aspect-auto overflow-hidden bg-muted">
                    <img
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="flex-1 p-6 flex flex-col justify-center space-y-3">
                    <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground">
                        {collection.count} stories
                      </span>
                      <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Browse by Topic
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore stories across your favorite categories
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-nowrap mb-8">
              <TabsTrigger value="all">All Topics</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="travel">Travel</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "The Art of Minimalist Living",
                    category: "Lifestyle",
                    stories: 156,
                    image: "/leadership.jpg",
                  },
                  {
                    title: "Future of Technology",
                    category: "Technology",
                    stories: 243,
                    image: "/leadership.jpg",
                  },
                  {
                    title: "Entrepreneurship",
                    category: "Business",
                    stories: 189,
                    image: "/leadership.jpg",
                  },
                  {
                    title: "Wellness & Health",
                    category: "Health",
                    stories: 167,
                    image: "/leadership.jpg",
                  },
                  {
                    title: "Travel Adventures",
                    category: "Travel",
                    stories: 134,
                    image: "/leadership.jpg",
                  },
                  {
                    title: "Food & Nutrition",
                    category: "Food",
                    stories: 98,
                    image: "/leadership.jpg",
                  },
                ].map((topic) => (
                  <Card
                    key={topic.title}
                    className="group overflow-hidden border-border hover:border-accent transition-all duration-300 cursor-pointer"
                  >
                    <div className="aspect-[3/2] overflow-hidden bg-muted relative">
                      <img
                        src={topic.image || "/placeholder.svg"}
                        alt={topic.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge variant="secondary" className="text-xs mb-2">
                          {topic.category}
                        </Badge>
                        <h3 className="font-serif text-xl font-semibold text-white">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-white/80 mt-1">
                          {topic.stories} stories
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technology">
              <p className="text-center text-muted-foreground py-12">
                Technology stories coming soon...
              </p>
            </TabsContent>

            <TabsContent value="lifestyle">
              <p className="text-center text-muted-foreground py-12">
                Lifestyle stories coming soon...
              </p>
            </TabsContent>

            <TabsContent value="business">
              <p className="text-center text-muted-foreground py-12">
                Business stories coming soon...
              </p>
            </TabsContent>

            <TabsContent value="health">
              <p className="text-center text-muted-foreground py-12">
                Health stories coming soon...
              </p>
            </TabsContent>

            <TabsContent value="travel">
              <p className="text-center text-muted-foreground py-12">
                Travel stories coming soon...
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-background">
            <CardContent className="p-8 lg:p-12">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <Sparkles className="h-12 w-12 text-accent mx-auto" />
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                  Ready to share your story?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join our community of writers and start sharing your unique
                  perspective with readers around the world.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" className="h-12 px-8" asChild>
                    <Link href="/register">Start Writing</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 bg-transparent"
                    asChild
                  >
                    <Link href="/about">Learn More</Link>
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

export default ExplorePage;
