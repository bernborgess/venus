import { styled, Typography } from "@mui/material";

const NotFoundContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const NotFoundTitle = styled(Typography)({
  fontSize: "4rem",
  fontWeight: "bold",
  color: "#f44336",
});

const NotFoundMessage = styled(Typography)({
  fontSize: "1.5rem",
  color: "#555",
  textAlign: "center"
});

export function NotFound() {

  return (
    <NotFoundContainer>
      <NotFoundTitle>Página Indisponível</NotFoundTitle>
      <NotFoundMessage>
        O link que você seguiu pode estar quebrado ou a página pode ter sido removida.
      </NotFoundMessage>
    </NotFoundContainer>
  );
}

