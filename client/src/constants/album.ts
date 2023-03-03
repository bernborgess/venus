import { z } from "zod";

export const AlbumSchema = z.object({
  title: z.string()
    .min(1, "O título não pode ser vazio")
    .max(40, "O título deve ter no máximo 40 caracteres")
}).strict();

export type newAlbum = z.infer<typeof AlbumSchema>;

export const emptyAlbum: newAlbum = {
  title: ""
};

export interface Album extends newAlbum {
  userId: number,
  id: number,
}


