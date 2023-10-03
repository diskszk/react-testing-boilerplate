import { PathParams, ResponseResolver, RestContext, RestRequest } from "msw";
import { Post } from "../../types";

const mockData: Post[] = [
  {
    id: "1",
    title: "post1",
    body: "hello world!",
  },
  {
    id: "2",
    title: "post2",
    body: "good night.",
  },
];

const get: ResponseResolver<
  RestRequest<never, PathParams<string>>,
  RestContext
> = (_req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mockData));
};

const getById: ResponseResolver<
  RestRequest<never, PathParams<string>>,
  RestContext
> = (req, res, ctx) => {
  const { id } = req.params;

  const target = mockData.find((post) => post.id === id);
  if (!target) {
    return res(
      ctx.status(404),
      ctx.json({
        errorMessage: "Not Found",
      })
    );
  }

  return res(ctx.status(200), ctx.json(target));
};

const mockPosts = {
  get,
  getById,
};

export default mockPosts;
