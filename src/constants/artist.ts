import { z } from "zod"

export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lgn: string
  }
};

export interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface newArtist {
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
}

export interface Artist extends newArtist {
  id: number
}

const ArtistSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string(),
  phone: z.string(),
  website: z.string()
});

type ArtistZ = z.infer<typeof ArtistSchema>

