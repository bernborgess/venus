import {
  Box, Paper,
  styled,
  TextField,
  Typography
} from "@mui/material";
import { FormEvent, PropsWithChildren } from "react";
import { newAlbum } from "../../constants/album";

const InputField = styled(TextField)({
  required: true,
  variant: "outlined",
  fullWidth: true,
  autoComplete: "off"
});

interface Props {
  title: string,
  album: newAlbum,
  updateAlbum: (partialAlbum: Partial<newAlbum>) => void
  onSubmit?: (
    event: FormEvent<HTMLFormElement>,
    newAlbum: newAlbum) => void
}

export function AlbumForm({
  title,
  album,
  updateAlbum,
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
        onSubmit={(e) => onSubmit?.(e, album)}
      >
        <InputField
          id="name"
          name="name"
          label="Nome"
          value={album.title}
          onChange={(e) => updateAlbum({ title: e.target.value })}
        />
        {children}
      </Box>
    </Paper>
  );
}