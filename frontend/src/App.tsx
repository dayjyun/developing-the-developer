import "./App.css";
import SpecialThanks from "./components/SpecialThanks/SpecialThanks";
import { Container } from "@mui/material";
import NavBar from "./components/navbar/NavBar";
import EPAWorld from "./components/EPA World/EPAWorld";
import Next from "./components/Next/Next";
import Overview from "./components/Overview/Overview";

function App() {
  return (
    <div>
      <NavBar />
      <Container sx={{ minWidth: 320 }}>
        <EPAWorld />
        <Overview />
        <Next />
        <SpecialThanks />
      </Container>
    </div>
  );
}

export default App;
