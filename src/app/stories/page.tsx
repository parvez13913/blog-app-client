"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

const StoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    "All",
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
  ];

  const stories = [
    {
      id: 1,
      title: "The Art of Minimalist Living",
      excerpt:
        "Discover how simplifying your life can lead to greater happiness and fulfillment in unexpected ways.",
      author: "Sarah Chen",
      readTime: "8 min read",
      category: "Lifestyle",
      image: "/lifestyle.jpg",
      date: "Jan 15, 2025",
    },
    {
      id: 2,
      title: "Building Resilient Teams",
      excerpt:
        "Learn the key principles that transform good teams into great ones through trust and collaboration.",
      author: "Marcus Johnson",
      readTime: "12 min read",
      category: "Business",
      image: "/leadership.jpg",
      date: "Jan 14, 2025",
    },
    {
      id: 3,
      title: "The Future of Sustainable Tech",
      excerpt:
        "Exploring how technology and sustainability intersect to create a better tomorrow for everyone.",
      author: "Elena Rodriguez",
      readTime: "10 min read",
      category: "Technology",
      image: "/technology.jpg",
      date: "Jan 13, 2025",
    },
    {
      id: 4,
      title: "Mastering the Art of Productivity",
      excerpt:
        "Practical strategies to boost your productivity without burning out or sacrificing work-life balance.",
      author: "David Kim",
      readTime: "7 min read",
      category: "Business",
      image: "/technology.jpg",
      date: "Jan 12, 2025",
    },
    {
      id: 5,
      title: "A Journey Through Southeast Asia",
      excerpt:
        "Personal stories and travel tips from six months exploring the diverse cultures of Southeast Asia.",
      author: "Maya Patel",
      readTime: "15 min read",
      category: "Travel",
      image: "/technology.jpg",
      date: "Jan 11, 2025",
    },
    {
      id: 6,
      title: "The Science of Better Sleep",
      excerpt:
        "Evidence-based techniques to improve your sleep quality and wake up feeling refreshed every day.",
      author: "Dr. James Wilson",
      readTime: "9 min read",
      category: "Health",
      image: "/technology.jpg",
      date: "Jan 10, 2025",
    },
    {
      id: 7,
      title: "Modern Web Design Principles",
      excerpt:
        "Essential design principles every web designer should know to create beautiful, functional websites.",
      author: "Alex Thompson",
      readTime: "11 min read",
      category: "Design",
      image: "/technology.jpg",
      date: "Jan 9, 2025",
    },
    {
      id: 8,
      title: "Understanding Cryptocurrency",
      excerpt:
        "A beginner's guide to understanding blockchain technology and the world of digital currencies.",
      author: "Rachel Green",
      readTime: "13 min read",
      category: "Finance",
      image: "/technology.jpg",
      date: "Jan 8, 2025",
    },
    {
      id: 9,
      title: "The Mediterranean Diet Guide",
      excerpt:
        "Discover the health benefits and delicious recipes of the world's most celebrated eating pattern.",
      author: "Chef Antonio Rossi",
      readTime: "10 min read",
      category: "Food",
      image: "/technology.jpg",
      date: "Jan 7, 2025",
    },
  ];

  const filteredStories = stories.filter((story) => {
    const matchesCategory =
      selectedCategory === "All" || story.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Explore Stories
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover thought-provoking articles from writers around the world.
              Filter by topic or search for something specific.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="sticky top-16 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10 bg-background"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden gap-2 bg-transparent"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
            <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
              <span>{filteredStories.length} stories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-36 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 py-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-foreground text-lg">
                      Filter Stories
                    </h3>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Stories Grid */}
            <div className="flex-1">
              <div className="mb-6 lg:hidden text-sm text-muted-foreground">
                {filteredStories.length} stories found
              </div>

              {filteredStories.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground mb-4">
                    No stories found matching your criteria.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {filteredStories.map((story) => (
                    <Card
                      key={story.id}
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
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {story.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {story.date}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
                          {story.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
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
              )}

              {/* Load More Button */}
              {filteredStories.length > 0 && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent"
                  >
                    Load More Stories
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StoriesPage;
