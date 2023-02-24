import { FormEvent, useState } from "react";
import { ArtistForm } from "../../components/Forms/ArtistForm";
import { emptyArtist, newArtist } from "../../constants/artist";
import { useApi } from "../../services";

export function ArtistCreate() {

  const {
    addArtist
  } = useApi();

  const [artist, setArtist] = useState(emptyArtist);

  function updateArtist(partialArtist: Partial<newArtist>) {
    if (!artist)
      return;
    setArtist({ ...artist, ...partialArtist });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>, newArtist: newArtist) {
    event.preventDefault();
    try {
      if (!newArtist.address)
        throw new Error("YOU FUCKED UP");
      await addArtist(newArtist);
      console.log("NOVO ARTISTA CRIADO!");
    } catch (err) {
      console.log(err);
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