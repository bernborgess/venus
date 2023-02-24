import {
  Box, Button, Paper,
  styled,
  TextField,
  Typography
} from "@mui/material";
import { FormEvent, PropsWithChildren } from "react";
import { newArtist } from "../../constants/artist";

const InputField = styled(TextField)({
  required: true,
  variant: "outlined",
  fullWidth: true,
  autoComplete: "off"
});

interface Props {
  title: string,
  artist: newArtist,
  updateArtist: (partialArtist: Partial<newArtist>) => void
  onSubmit?: (
    event: FormEvent<HTMLFormElement>,
    newArtist: newArtist) => void
}

export function ArtistForm({
  title,
  artist,
  updateArtist,
  onSubmit,
  children
}: PropsWithChildren<Props>) {

  return (
    <Paper>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" }
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => onSubmit?.(e, artist)}
      >
        <InputField
          id="name"
          name="name"
          label="Nome"
          value={artist.name}
          onChange={(e) => updateArtist({ name: e.target.value })}
        />
        <InputField
          id="username"
          name="username"
          label="Username"
          value={artist.username}
          onChange={(e) => updateArtist({ username: e.target.value })}
        />
        <InputField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={artist.email}
          onChange={(e) => updateArtist({ email: e.target.value })}
        />
        {children}
        <Button
          type="submit"
        >
          SUBMIT
        </Button>
      </Box>
    </Paper>
  );
}