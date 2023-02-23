import { newArtist } from "../constants/artist";
import { api } from "./api";

export async function addArtist(body: newArtist): Promise<void> {
  await api.post(`/users`, body);
}