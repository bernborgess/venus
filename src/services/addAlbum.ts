import { newAlbum } from "../constants/album";
import { api } from "./api";

export async function addAlbum(body: newAlbum): Promise<void> {
  await api.post("/albums", body);
}