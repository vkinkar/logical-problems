import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Wrapper = styled.section`
  padding: 1em;
  background: #0d5664;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>Logical Problems Respository</Title>
      </Wrapper>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button variant="contained">Tic Tac Toe</Button>
        <Button variant="contained">Matrix</Button>
        <Button variant="contained" href="#contained-buttons">
          Memory Game
        </Button>
      </Stack>
    </div>
  );
}

export default App;
