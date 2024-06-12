import "./App.scss";
import SpecialThanks from "./components/7 - SpecialThanks/SpecialThanks";
import { Container} from "@mui/material";
import NavBar from "./navbar/NavBar";
import EPAWorld from "./components/3 - EPAWorld/EPAWorld";
import Beyond from "./components/6 - Beyond/Beyond";
import Platform from "./components/4 - Platform/Platform";
import Experience from "./components/5 - Experience/Experience";
import Introduction from "./components/1 - Introduction/Introduction";
import Background from "./components/2 - Background/Background";
import Footer from "./components/999-Footer/Footer";

function App() {
  return (
    <div>
      <div >
        <NavBar />
      </div>
      <Container sx={{ minWidth: 320 }}>
        <div id="introduction"><Introduction /></div>
        <div id="background"><Background /></div>
        <div id="epa-world"><EPAWorld /></div>
        <div id="sde-platform"><Platform /></div>
        <div id="experience"><Experience /></div>
        <div id="coding-and-beyond"><Beyond /></div>
        <div id="special-thanks"><SpecialThanks /></div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
