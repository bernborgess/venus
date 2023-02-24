import { GridColDef } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { DataGridVenus } from "../components/DataGridVenus";
import { WaitingFetchCircle } from "../components/WaitingFetchCircle";
import { Artist } from "../constants/artist";
import { ApiContext } from "../services";

type Props = {}

const artistColumns: Array<GridColDef & { field: keyof Artist }> = [
  { field: 'name', headerName: "Nome" },
  { field: 'phone', headerName: "Telefone" },
  { field: 'website', headerName: "Site" }
]

export function AllArtists({ }: Props) {

  const {
    getArtists
  } = useContext(ApiContext);

  const [artists, setArtists] = useState<Artist[] | null>(null);

  useEffect(() => {

    const fetch = async () => {
      const artistsBack = await getArtists();
      setArtists(artistsBack);
    }
    fetch();

  }, []);

  if (!artists)
    return <WaitingFetchCircle />

  return (
    <div style={{
      height: '100vh',
      background: 'white'
    }}>
      <DataGridVenus
        rows={artists}
        columns={artistColumns}
      />
    </div>
  )
}