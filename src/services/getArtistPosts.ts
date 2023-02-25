import { Post } from "../constants/post";
import { api } from "./api";

export async function getArtistPosts(artistId: number): Promise<Post[]> {
  const { data } = await api.get(`users/${artistId}/posts`);
  return data;
}