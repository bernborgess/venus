import { z } from "zod";

export const AddressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: z.object({
    lat: z.string(),
    lgn: z.string()
  })
});

export type Address = z.infer<typeof AddressSchema>;

export const CompanySchema = z.object({
  name: z.string(),
  catchPhrase: z.string(),
  bs: z.string()
});


export type Company = z.infer<typeof CompanySchema>;

export const ArtistSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string(),
  address: AddressSchema.optional(),
  phone: z.string(),
  website: z.string(),
  company: CompanySchema.optional()
});

export type newArtist = z.infer<typeof ArtistSchema>

export const emptyArtist: newArtist = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
};

export interface Artist extends newArtist {
  id: number
}

