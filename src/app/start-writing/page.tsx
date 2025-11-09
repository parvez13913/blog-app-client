import { WriteForm } from "@/components/write-form";

export const metadata = {
  title: "Start Writing",
  description: "Create a new blog post",
};

export default function WritePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
