import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { ActionButtons } from "../../components/ActionButtons";
import { DataGridVenus } from "../../components/DataGridVenus";
import { WaitingFetchCircle } from "../../components/WaitingFetchCircle";
import { Album } from "../../constants/album";
import { useApi } from "../../services";


const albumsColumns: Array<GridColDef & { field: keyof Album }> = [
  { field: "title", headerName: "Nome", flex: 3 },
  {
    field: "id", headerName: "Ações", flex: 1,
    renderCell: (params: GridCellParams) =>
      <ActionButtons id={params.value} />
  }
];


export function AllAlbums() {

  const {
    getAlbums
  } = useApi();

  const [albums, setAlbums] = useState<Album[] | null>(null);

  useEffect(() => {

    const fetch = async () => {
      const albumsBack = await getAlbums();
      setAlbums(albumsBack);
    };
    fetch();

  }, []);

  if (!albums)
    return <WaitingFetchCircle />;

  return (
    <div style={{
      height: "100vh",
      background: "white"
    }}>
      <DataGridVenus
        rows={albums}
        columns={albumsColumns}
      />
    </div>
  );
}