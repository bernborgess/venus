import { Button, Stack } from "@mui/material";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { ActionButtons } from "../../components/ActionButtons";
import { DataGridVenus } from "../../components/DataGridVenus";
import { WaitingFetchCircle } from "../../components/WaitingFetchCircle";
import { Artist } from "../../constants/artist";
import { useApi } from "../../services";
import { Container, TableContent } from "./styles";


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
          onClick={() => alert("SDLFKJLS")}
        >
          Cadastrar
        </Button>
      </Stack>

      <TableContent>
        {
          !artists
            ? <WaitingFetchCircle />
            :
            <DataGridVenus
              rows={artists}
              columns={artistColumns}
            />
        }
      </TableContent>

    </Container>
  );
}