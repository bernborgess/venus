import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  MoreVert as MoreVertIcon,
  Share as ShareIcon
} from "@mui/icons-material";
import {
  Avatar, Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Typography
} from "@mui/material";
import { Artist } from "../../constants/artist";
import { useRouting } from "../../routes";


export function ArtistCard(artist: Artist) {
  const { navigateToArtistProfile } = useRouting();
  return (
    <Card sx={{ m: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: "blue",
              cursor: "pointer"
            }}
            aria-label="artist-profile"
            onClick={() => navigateToArtistProfile(artist.id)}
          >
            {artist.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings"
            onClick={() => alert("EHRLEKJ")}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={artist.name}
        sx={{
          textTransform: "capitalize"
        }}
      />

      <CardContent >
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {artist.email}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton
          aria-label="share"
        >
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}