import { z } from "zod";

const AlbumSchema = z.object({
  title: z.string()
});



export interface newAlbum {
  title: string
}

export const emptyAlbum: newAlbum = {
  title: ""
};

export interface Album extends newAlbum {
  userId: number,
  id: number,
}


