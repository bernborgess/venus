import { api } from "./api";

export async function deleteArtist(artistId: number): Promise<void> {
  await api.delete(`/users/${artistId}`);
}