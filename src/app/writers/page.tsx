"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, TrendingUp, UserPlus, Users, X } from "lucide-react";
import { useState } from "react";

const WritersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("All");

  const topics = [
    "All",
    "Technology",
    "Lifestyle",
    "Business",
    "Health",
    "Travel",
    "Food",
    "Design",
    "Science",
  ];

  const writers = [
    {
      id: 1,
      name: "Sarah Chen",
      bio: "Tech writer passionate about AI, web development, and the future of technology. Sharing insights from 10+ years in the industry.",
      avatar: "/professional-woman-portrait.png",
      followers: 12500,
      stories: 87,
      topics: ["Technology", "Business"],
      verified: true,
    },
    {
      id: 2,
      name: "Marcus Johnson",
      bio: "Leadership coach and business strategist helping teams build resilient cultures. Former Fortune 500 executive.",
      avatar: "/professional-man-portrait.png",
      followers: 8900,
      stories: 64,
      topics: ["Business", "Lifestyle"],
      verified: true,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      bio: "Environmental scientist writing about sustainability, climate action, and green technology solutions for a better tomorrow.",
      avatar: "/scientist-woman-portrait.jpg",
      followers: 15200,
      stories: 92,
      topics: ["Science", "Technology"],
      verified: true,
    },
    {
      id: 4,
      name: "David Kim",
      bio: "Productivity expert and minimalist. Helping people achieve more by doing less through intentional living and smart systems.",
      avatar: "/asian-man-portrait.png",
      followers: 10300,
      stories: 78,
      topics: ["Lifestyle", "Business"],
      verified: false,
    },
    {
      id: 5,
      name: "Maya Patel",
      bio: "Travel writer and photographer exploring hidden gems across Southeast Asia. Sharing stories, tips, and cultural insights.",
      avatar: "/travel-photographer-woman.jpg",
      followers: 18700,
      stories: 124,
      topics: ["Travel", "Lifestyle"],
      verified: true,
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      bio: "Sleep scientist and wellness advocate. Translating complex research into practical advice for better health and performance.",
      avatar: "/doctor-man-portrait.jpg",
      followers: 22400,
      stories: 156,
      topics: ["Health", "Science"],
      verified: true,
    },
    {
      id: 7,
      name: "Alex Thompson",
      bio: "UI/UX designer and front-end developer. Crafting beautiful, accessible web experiences and sharing design principles.",
      avatar: "/designer-portrait.png",
      followers: 14800,
      stories: 95,
      topics: ["Design", "Technology"],
      verified: true,
    },
    {
      id: 8,
      name: "Rachel Green",
      bio: "Financial educator demystifying cryptocurrency, investing, and personal finance for the everyday person.",
      avatar: "/financial-advisor-woman.png",
      followers: 19200,
      stories: 108,
      topics: ["Business", "Technology"],
      verified: true,
    },
    {
      id: 9,
      name: "Chef Antonio Rossi",
      bio: "Italian chef sharing authentic Mediterranean recipes, cooking techniques, and the philosophy of slow food.",
      avatar: "/chef-portrait.png",
      followers: 16500,
      stories: 142,
      topics: ["Food", "Lifestyle"],
      verified: false,
    },
    {
      id: 10,
      name: "Priya Sharma",
      bio: "Data scientist and AI researcher exploring the intersection of machine learning, ethics, and society.",
      avatar: "/data-scientist-woman.jpg",
      followers: 11200,
      stories: 73,
      topics: ["Technology", "Science"],
      verified: true,
    },
    {
      id: 11,
      name: "Michael Chen",
      bio: "Startup founder and entrepreneur sharing lessons learned from building and scaling multiple successful companies.",
      avatar: "/entrepreneur-man.png",
      followers: 25600,
      stories: 189,
      topics: ["Business", "Technology"],
      verified: true,
    },
    {
      id: 12,
      name: "Sophie Laurent",
      bio: "Fashion designer and sustainability advocate reimagining the future of ethical fashion and conscious consumption.",
      avatar: "/fashion-designer-woman.jpg",
      followers: 13400,
      stories: 86,
      topics: ["Lifestyle", "Design"],
      verified: false,
    },
  ];

  const filteredWriters = writers.filter((writer) => {
    const matchesTopic =
      selectedTopic === "All" || writer.topics.includes(selectedTopic);
    const matchesSearch =
      searchQuery === "" ||
      writer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      writer.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      writer.topics.some((topic) =>
        topic.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesTopic && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Discover Writers
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connect with talented writers from around the world. Follow your
              favorites and never miss their latest stories.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Writers</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Stories</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">2M+</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">
                  New This Month
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="sticky top-16 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search writers..."
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
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="hidden sm:inline">
                {filteredWriters.length} writers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Filters */}
      <section className="border-b bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedTopic === topic
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Writers Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:hidden text-sm text-muted-foreground">
            {filteredWriters.length} writers found
          </div>

          {filteredWriters.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No writers found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedTopic("All");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredWriters.map((writer) => (
                <Card
                  key={writer.id}
                  className="group overflow-hidden border-border hover:border-accent transition-all duration-300"
                >
                  <CardContent className="p-6 space-y-4">
                    {/* Avatar and Name */}
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16 border-2 border-border">
                        <AvatarImage
                          src={writer.avatar || "/placeholder.svg"}
                          alt={writer.name}
                        />
                        <AvatarFallback className="text-lg font-semibold">
                          {writer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground text-lg truncate">
                            {writer.name}
                          </h3>
                          {writer.verified && (
                            <svg
                              className="w-5 h-5 text-accent flex-shrink-0"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                          )}
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                          <span>
                            {writer.followers.toLocaleString()} followers
                          </span>
                          <span>•</span>
                          <span>{writer.stories} stories</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {writer.bio}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2">
                      {writer.topics.map((topic) => (
                        <Badge
                          key={topic}
                          variant="secondary"
                          className="text-xs"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    {/* Follow Button */}
                    <Button className="w-full gap-2 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <UserPlus className="h-4 w-4" />
                      Follow
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More */}
          {filteredWriters.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="bg-transparent">
                Load More Writers
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-background">
            <CardContent className="p-8 lg:p-12">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                  Become a Writer
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join our community of talented writers and share your unique
                  perspective with readers around the world.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" className="h-12 px-8 gap-2" asChild>
                    <a href="/register">
                      <UserPlus className="h-5 w-5" />
                      Start Writing Today
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 bg-transparent"
                    asChild
                  >
                    <a href="/about">Learn More</a>
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

export default WritersPage;
