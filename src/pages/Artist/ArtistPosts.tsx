import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostCard } from "../../components/Cards/PostCard";
import { WaitingFetchCircle } from "../../components/WaitingFetchCircle";
import { Artist } from "../../constants/artist";
import { Post } from "../../constants/post";
import { useNotification } from "../../context/notification";
import { useApi } from "../../services";

export function ArtistPosts() {
  const { getArtist, getArtistPosts } = useApi();

  const [artist, setArtist] = useState<Artist | null>(null);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const { id } = useParams();
  const { notify } = useNotification();

  useEffect(() => {
    const fetch = async () => {
      try {
        if (!id)
          throw new Error("Id de Artista não encontrado");

        const artistBack = await getArtist(Number(id));
        const postsBack = await getArtistPosts(Number(id));
        setArtist(artistBack);
        setPosts(postsBack);
      } catch (err: unknown) {
        notify(err);
      }
    };
    fetch();
  }, []);

  return (
    <Box
      flex={4}
      p={{ xs: 0, md: 2 }}
    >
      {!(posts && artist) ?
        <WaitingFetchCircle />
        :
        <>
          <Typography variant="h5">
            Mr {artist?.name} Posts

          </Typography>
          {posts.map((post, index) => (
            <PostCard
              key={index}
              post={post}
              artist={artist}
            />
          ))}
        </>
      }
    </Box>
  );
}