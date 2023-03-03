import { Comment } from "../../constants/comment";
import { api } from "../api";

export async function getPostComments(postId: number): Promise<Comment[]> {
  const { data } = await api.get(`posts/${postId}/comments`);
  return data;
}