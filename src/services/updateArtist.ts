import { Artist } from "../constants/artist";
import { api } from "./api";

export async function updateArtist(body: Artist): Promise<void> {
  await api.put(`/users/${body.id}`, body);
}