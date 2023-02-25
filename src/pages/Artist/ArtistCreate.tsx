import { Button } from "@mui/material";
import { FormEvent, useState } from "react";
import { ArtistForm } from "../../components/Forms/ArtistForm";
import { ArtistSchema, emptyArtist, newArtist } from "../../constants/artist";
import { useNotification } from "../../context/notification";
import { useRouting } from "../../routes/useRouting";
import { useApi } from "../../services";

export function ArtistCreate() {

  const { addArtist } = useApi();
  const { navigateToAllArtists } = useRouting();
  const { notify, prompt } = useNotification();

  const [artist, setArtist] = useState(emptyArtist);

  function updateArtist(partialArtist: Partial<newArtist>) {
    if (!artist) return;
    setArtist({ ...artist, ...partialArtist });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>, newArtist: newArtist) {
    event.preventDefault();
    try {
      ArtistSchema.parse(newArtist);
      await addArtist(newArtist);
      prompt("Novo Artista Criado com sucesso!");
      navigateToAllArtists();
    } catch (err: unknown) {
      notify(err);
    }
  }

  return (
    <div>
      <ArtistForm
        title="Novo Artista"
        artist={artist}
        updateArtist={updateArtist}
        onSubmit={onSubmit}
      >
        <Button
          type="submit"
        >
          Criar
        </Button>
      </ArtistForm>
    </div >
  );
}