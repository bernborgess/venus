import { Album } from "../constants/album";
import { api } from "./api";

export async function getAlbums(): Promise<Album[]> {
  const { data } = await api.get("/albums");
  return data;
}