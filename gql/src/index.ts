import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";

import resolvers from "./resolvers.js";

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

export interface Context {
  getDateNow: () => number;
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer<Context>(server, {
  context: async () => ({
    getDateNow: Date.now,
  }),
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
