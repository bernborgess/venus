import { FormEvent, useState } from "react";
import { ArtistForm } from "../../components/Forms/ArtistForm";
import { emptyArtist, newArtist } from "../../constants/artist";
import { useNotification } from "../../context/notification";
import { useApi } from "../../services";

export function ArtistCreate() {

  const {
    addArtist
  } = useApi();

  const { notify, prompt } = useNotification();

  const [artist, setArtist] = useState(emptyArtist);

  function updateArtist(partialArtist: Partial<newArtist>) {
    if (!artist)
      return;
    setArtist({ ...artist, ...partialArtist });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>, newArtist: newArtist) {
    event.preventDefault();
    try {
      await addArtist(newArtist);
      prompt("Novo Artista Criado com sucesso!");
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
      />
    </div >
  );
}