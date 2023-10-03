import { rest } from "msw";
import mockPosts from "./resolvers/posts";

export const handlers = [
  rest.get("/api/posts", mockPosts.get),
  rest.get("/api/posts/:id", mockPosts.getById),
];
