import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { ArtistCard } from "../../components/Cards/ArtistCard";
import { WaitingFetchCircle } from "../../components/WaitingFetchCircle";
import { Artist } from "../../constants/artist";
import { useRouting } from "../../routes/useRouting";
import { useApi } from "../../services";
import { Container } from "./styles";


export function AllArtists() {

  const {
    getArtists,
  } = useApi();

  const { navigateToArtistCreate } = useRouting();

  const [artists, setArtists] = useState<Artist[] | null>(null);

  useEffect(() => {

    const fetch = async () => {
      const artistsBack = await getArtists();
      setArtists(artistsBack);
    };
    fetch();

  }, []);


  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <Button
          variant="contained"
          sx={{ paddingLeft: 10, paddingRight: 10 }}
          onClick={navigateToArtistCreate}
        >
          Cadastrar
        </Button>
      </Stack>

      {!artists ?
        <WaitingFetchCircle />
        :
        <Stack>
          {artists.map((artist, index) => (
            <ArtistCard
              key={index}
              {...artist}
            />
          ))}
        </Stack>
      }


    </Container>
  );
}