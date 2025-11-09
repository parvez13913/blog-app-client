import { AuthProvider } from "@/components/context/AuthContext";
import ApolloProviderWrapper from "@/lib/providers";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog App",
  description: "Blog built with Next.js + GraphQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProviderWrapper>
          <AuthProvider>
            {children}
            <Toaster position="top-right" />
          </AuthProvider>
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
