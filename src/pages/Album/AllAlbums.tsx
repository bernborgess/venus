import { Button, Stack } from "@mui/material";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { ActionButtons } from "../../components/ActionButtons";
import { DataGridVenus } from "../../components/DataGridVenus";
import { WaitingFetchCircle } from "../../components/WaitingFetchCircle";
import { Album } from "../../constants/album";
import { useRouting } from "../../routes/useRouting";
import { useApi } from "../../services";
import { Container, TableContent } from "./styles";


const albumsColumns: Array<GridColDef & { field: keyof Album }> = [
  { field: "title", headerName: "Nome", flex: 3 },
  {
    field: "id", headerName: "Ações", flex: 1,
    renderCell: (params: GridCellParams) =>
      <ActionButtons id={params.value} />
  }
];


export function AllAlbums() {

  const { getAlbums } = useApi();

  const { navigateToAlbumCreate } = useRouting();

  const [albums, setAlbums] = useState<Album[] | null>(null);

  useEffect(() => {

    const fetch = async () => {
      const albumsBack = await getAlbums();
      setAlbums(albumsBack);
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
          onClick={navigateToAlbumCreate}
        >
          Cadastrar
        </Button>
      </Stack>

      <TableContent>
        {
          !albums
            ? <WaitingFetchCircle />
            :
            <DataGridVenus
              rows={albums}
              columns={albumsColumns}
            />
        }
      </TableContent>

    </Container>

  );
}