import { Edit as EditIcon } from "@mui/icons-material";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGridVenus } from "../components/DataGridVenus";
import { WaitingFetchCircle } from "../components/WaitingFetchCircle";
import { Artist } from "../constants/artist";
import { ApiContext } from "../services";


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

function ActionButtons({ id }: { id: number }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`${id}`)}>
      <EditIcon />
    </div>
  );
}



export function AllArtists() {

  const {
    getArtists
  } = useContext(ApiContext);

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