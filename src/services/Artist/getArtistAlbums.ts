import { Album } from "../../constants/album";
import { api } from "../api";

export async function getArtistAlbums(artistId: number): Promise<Album[]> {
  const { data } = await api.get(`/users/${artistId}/albums`);
  return data;
}