import { Artist } from "../constants/artist";
import { api } from "./api";

export async function getArtist(artistId: number): Promise<Artist> {
  const { data } = await api.get(`/users/${artistId}`);
  return data;
}