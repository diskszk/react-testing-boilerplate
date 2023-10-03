import { Post } from "../../types";
import axios from "axios";
export async function fetchPosts(): Promise<Post[]> {
  const res = await axios.get<Post[]>("/api/posts");

  return res.data;
}
