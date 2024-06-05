import "./App.css";
import SpecialThanks from "./components/SpecialThanks/SpecialThanks";
import { Container } from "@mui/material";
import NavBar from "./navbar/NavBar";
import EPAWorld from "./components/EPAWorld/EPAWorld";
import Next from "./components/Next/Next";
import Overview from "./components/Overview/Overview";
import Challenges from "./components/Challenges/Challenges";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <div>
      <NavBar />
      <Container sx={{ minWidth: 320, paddingBottom: 10 }}>
        <Introduction />
        <EPAWorld />
        <Overview />
        <Challenges />
        <Next />
        <SpecialThanks />
      </Container>
    </div>
  );
}

export default App;
