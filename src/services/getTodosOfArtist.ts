import { Todo } from "../constants/todo";
import { api } from "./api";

export async function getTodosOfArtist(artistId: number): Promise<Todo[]> {
  const { data } = await api.get(`/users/${artistId}/todos`);
  return data;
}