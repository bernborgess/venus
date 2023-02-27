import { createContext } from "react";

export interface RoutingState {
  routeTitle: string,

  navigateToHome: () => void,

  navigateToAllArtists: () => void,
  navigateToArtistCreate: () => void,
  navigateToArtistProfile: (artistId: number) => void,
  navigateToArtistPosts: (artistId: number) => void,

  navigateToAllAlbums: () => void,
  navigateToAlbumCreate: () => void,

  navigateToFeed: () => void,

  navigateToPostComments: (postId: number) => void,

  navigateBack: () => void
}

export const RoutingContext = createContext<RoutingState | undefined>(undefined);
