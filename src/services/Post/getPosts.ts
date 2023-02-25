import { Post } from "../../constants/post";
import { api } from "../api";

export async function getPosts(): Promise<Post[]> {
  const { data } = await api.get("/posts");
  return data;
}