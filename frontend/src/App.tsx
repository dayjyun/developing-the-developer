import "./App.css";
import Thanks from "./components/Thanks";
import { Container } from "@mui/material";
import NavBar from "./components/navbar/NavBar";
import EPAWorld from "./components/EPA World";

function App() {
  return (
    <div>
      <NavBar />
      <Container sx={{ minWidth: 320 }}>
        <EPAWorld />
        <Thanks />
      </Container>
    </div>
  );
}

export default App;
