"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function WriteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsLoading(true);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim(),
          published,
          authorId: 1,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to create post");
      }

      const data = await response.json();
      setSuccess(true);
      setTitle("");
      setContent("");
      setPublished(false);

      // Optionally redirect to the post
      setTimeout(() => {
        window.location.href = `/posts/${data.id}`;
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error Message */}
      {error && (
        <Card className="border-destructive/50 bg-destructive/10 p-4">
          <p className="text-sm text-destructive">{error}</p>
        </Card>
      )}

      {/* Success Message */}
      {success && (
        <Card className="border-emerald-500/50 bg-emerald-500/10 p-4">
          <p className="text-sm text-emerald-600 dark:text-emerald-400">
            Post created successfully! Redirecting...
          </p>
        </Card>
      )}

      {/* Title Field */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Post Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your post title..."
          required
          className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Content Field */}
      <div>
        <label htmlFor="content" className="block text-sm font-medium">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post content here..."
          required
          rows={12}
          className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Publish Toggle */}
      <div className="flex items-center gap-3">
        <label
          htmlFor="published"
          className="flex cursor-pointer items-center gap-2"
        >
          <input
            type="checkbox"
            id="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="h-4 w-4 rounded border-input accent-primary"
          />
          <span className="text-sm font-medium">Publish immediately</span>
        </label>
        <span className="text-xs text-muted-foreground">
          {published
            ? "Your post will be visible to everyone"
            : "Your post will be saved as draft"}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <Button
          type="submit"
          disabled={isLoading || !title.trim() || !content.trim()}
          className="flex-1 cursor-pointer"
        >
          {isLoading ? "Creating..." : "Create Post"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setTitle("");
            setContent("");
            setPublished(false);
            setError("");
            setSuccess(false);
          }}
          disabled={isLoading}
          className="cursor-pointer"
        >
          Clear
        </Button>
      </div>
    </form>
  );
}
