import "./App.css";
import SpecialThanks from "./components/SpecialThanks/SpecialThanks";
import { Container} from "@mui/material";
import NavBar from "./navbar/NavBar";
import EPAWorld from "./components/EPAWorld/EPAWorld";
import Next from "./components/Next/Next";
import Overview from "./components/Overview/Overview";
import Challenges from "./components/Challenges/Challenges";
import Introduction from "./components/Introduction/Introduction";
import Background from "./components/Background/Background";
function App() {
  return (
    <div>
      <NavBar />
      <Container sx={{ minWidth: 320, paddingBottom: 10 }}>
        <div id="introduction"><Introduction /></div>
        <div id="background"><Background /></div>
        <div id="epa-world"><EPAWorld /></div>
        <div id="overview"><Overview /></div>
        <div id="challenges"><Challenges /></div>
        <div id="next"><Next /></div>
        <div id="special-thanks"><SpecialThanks /></div>
      </Container>
    </div>
  );
}

export default App;
