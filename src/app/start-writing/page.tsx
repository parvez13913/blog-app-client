"use client";
import { WriteForm } from "@/components/write-form";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WritePage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex items-start justify-end max-w-xs mt-7">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Start Writing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Share your thoughts and ideas with the world. Create a new post
            below.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-lg border border-border bg-card p-8">
          <WriteForm />
        </div>
      </div>
    </main>
  );
}
