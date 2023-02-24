import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { ActionButtons } from "../components/ActionButtons";
import { DataGridVenus } from "../components/DataGridVenus";
import { WaitingFetchCircle } from "../components/WaitingFetchCircle";
import { Artist } from "../constants/artist";
import { useApi } from "../services";


const artistColumns: Array<GridColDef & { field: keyof Artist }> = [
  { field: "name", headerName: "Nome", flex: 1 },
  { field: "phone", headerName: "Telefone", flex: 1 },
  { field: "website", headerName: "Site", flex: 1 },
  {
    field: "id", headerName: "Ações", flex: 1,
    renderCell: (params: GridCellParams) =>
      <ActionButtons id={params.value} />
  }
];




export function AllArtists() {

  const {
    getArtists
  } = useApi();

  const [artists, setArtists] = useState<Artist[] | null>(null);

  useEffect(() => {

    const fetch = async () => {
      const artistsBack = await getArtists();
      setArtists(artistsBack);
    };
    fetch();

  }, []);

  if (!artists)
    return <WaitingFetchCircle />;

  return (
    <div style={{
      height: "100vh",
      background: "white"
    }}>
      <DataGridVenus
        rows={artists}
        columns={artistColumns}
      />
    </div>
  );
}