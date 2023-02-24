import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WaitingFetchCircle } from "../components/WaitingFetchCircle";
import { Artist } from "../constants/artist";
import { ApiContext } from "../services";

export function ArtistProfile() {
  const { id } = useParams();
  const {
    getArtist
  } = useContext(ApiContext);

  const [artist, setArtist] = useState<Artist | null>(null);

  useEffect(() => {

    const fetch = async () => {
      if (!id) throw new Error("Id not found!");
      const artistBack = await getArtist(Number(id));
      setArtist(artistBack);
    }
    fetch();

  }, []);

  if (!artist)
    return <WaitingFetchCircle />


  return (
    <div>
      <h1>ARTIST PROFILE ID= {id}</h1>
      <ul>
        <li>{artist.name}</li>
        <li>{artist.username}</li>



      </ul>
    </div >
  )
}