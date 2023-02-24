import { DataGrid, DataGridProps, ptBR } from "@mui/x-data-grid";



export function DataGridVenus(props: DataGridProps) {
  return (
    <DataGrid
      localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      experimentalFeatures={{ newEditingApi: true }}
      disableSelectionOnClick
      {...props}
    />
  );
}