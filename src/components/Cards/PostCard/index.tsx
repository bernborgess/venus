import {
  Comment as CommentIcon, MoreVert as MoreVertIcon
} from "@mui/icons-material";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader, IconButton,
  Typography
} from "@mui/material";
import { Artist } from "../../../constants/artist";
import { Post } from "../../../constants/post";
import { useRouting } from "../../../routes/useRouting";

type Props = {
  post: Post,
  artist?: Artist
}

export function PostCard({
  post: {
    id,
    title,
    body
  },
  artist
}: Props) {

  const { navigateToPostComments } = useRouting();

  return (
    <Card sx={{ m: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            {artist?.username?.charAt(0) || "U"}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={new Date().toLocaleDateString("fr-FR")}
        sx={{
          textTransform: "capitalize"
        }}
      />
      <CardContent >
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="comments"
          onClick={() => navigateToPostComments(id)}
        >
          <CommentIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}