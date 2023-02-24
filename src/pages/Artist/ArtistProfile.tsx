import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtistForm } from "../../components/Forms/ArtistForm";
import { WaitingFetchCircle } from "../../components/WaitingFetchCircle";
import { Artist, newArtist } from "../../constants/artist";
import { useApi } from "../../services";

export function ArtistProfile() {
  const { id } = useParams();
  const {
    getArtist
  } = useApi();

  const [artist, setArtist] = useState<Artist | null>(null);

  function updateArtist(partialArtist: Partial<newArtist>) {
    if (!artist)
      return;
    setArtist({ ...artist, ...partialArtist });
  }

  useEffect(() => {
    const fetch = async () => {
      if (!id) throw new Error("Id not found!");
      const artistBack = await getArtist(Number(id));
      setArtist(artistBack);
    };
    fetch();

  }, []);

  if (!artist)
    return <WaitingFetchCircle />;

  return (
    <div>
      <ArtistForm
        title="Perfil de Artista"
        artist={artist}
        updateArtist={updateArtist}
        onSubmit={(e, a) => {
          e.preventDefault();
          console.log(`Hi ${a.name}`);
        }}
      />
    </div >
  );
}