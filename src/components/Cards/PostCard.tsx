import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  MoreVert as MoreVertIcon,
  Share as ShareIcon
} from "@mui/icons-material";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader, Checkbox,
  IconButton,
  Typography
} from "@mui/material";
import { Post } from "../../constants/post";


export function PostCard({
  userId,
  id,
  title,
  body
}: Post) {

  return (
    <Card sx={{ m: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            BB
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
      {/* <CardMedia
        component="img"
        height="20%"
        image="https://www.universetoday.com/wp-content/uploads/2013/10/milky_way.jpg"
        alt="ALT"
        sizes="small"
      /> */}
      <CardContent >
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}