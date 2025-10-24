"use client";
import { ApolloProvider } from "@apollo/client/react";
import client from "./apolloClient";

export default function ApolloProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
