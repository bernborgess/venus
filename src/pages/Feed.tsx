import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { PostCard } from "../components/Cards/PostCard";
import { WaitingFetchCircle } from "../components/WaitingFetchCircle";
import { Post } from "../constants/post";
import { useApi } from "../services";

export function Feed() {
  const { getPosts } = useApi();

  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const postsBack = await getPosts();
      setPosts(postsBack);
    };
    fetch();
  }, []);

  return (
    <Box
      flex={4}
      p={{ xs: 0, md: 2 }}
    >
      {!posts ?
        <WaitingFetchCircle />
        :
        posts.map((post, index) => (
          <PostCard
            key={index}
            post={post}
          />
        ))}
    </Box>
  );
}