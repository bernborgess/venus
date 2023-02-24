import { Artist } from "../constants/artist";
import { api } from "./api";

export async function getArtists(): Promise<Artist[]> {
  const { data } = await api.get("/users");
  return data;
}