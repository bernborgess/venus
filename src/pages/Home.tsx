import { styled, Typography } from "@mui/material";

const HomeContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const HomeTitle = styled(Typography)({
  fontSize: "4rem",
  fontWeight: "bold",
  color: "#f44336",
});

const HomeMessage = styled(Typography)({
  fontSize: "1.5rem",
  color: "#555",
  textAlign: "center"
});

export function Home() {

  return (
    <HomeContainer>
      <HomeTitle>Venus</HomeTitle>
      <HomeMessage>
        O sistema dos artistas das estrelas 🌟
      </HomeMessage>
    </HomeContainer>
  );
}



