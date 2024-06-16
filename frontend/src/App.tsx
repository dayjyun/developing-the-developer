import "./App.scss";
import SpecialThanks from "./components/7 - SpecialThanks/SpecialThanks";
import { Container, IconButton} from "@mui/material";
import NavBar from "./navbar/NavBar";
import EPAWorld from "./components/3 - EPAWorld/EPAWorld";
import Beyond from "./components/6 - Beyond/Beyond";
import Platform from "./components/4 - Platform/Platform";
import Experience from "./components/5 - Experience/Experience";
import Introduction from "./components/1 - Introduction/Introduction";
import Background from "./components/2 - Background/Background";
import Footer from "./components/999-Footer/Footer";
import { useEffect, useRef, useState } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const sections = [
  'introduction',
  'background',
  'epa-world',
  'sde-platform',
  'experience',
  'coding-and-beyond',
  'special-thanks'
];

function App() {
   const [currentSection, setCurrentSection] = useState(0);
   const introRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      document.title = "Developing the Developer";

      const favicon: HTMLLinkElement =
        document.querySelector("link[rel='icon']") ||
        document.createElement("link");
      favicon.rel = "icon";
      favicon.href = "../favicon.ico";
      document.head.appendChild(favicon);
    })

   const scrollToSection = (index: any) => {
     (document.getElementById(sections[index]) as HTMLElement).scrollIntoView({
       behavior: "smooth",
     });
     setCurrentSection(index);
   };

   const handleUpArrow = () => {
     if (currentSection > 0) {
       scrollToSection(currentSection - 1);
     }
   };

   const handleDownArrow = () => {
     if (currentSection < sections.length - 1) {
       scrollToSection(currentSection + 1);
     }
   };


  return (
    <div>
      <div>
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
        <div
          style={{
            position: "fixed",
            bottom: 50,
            right: 30,
            gap: 10,
            display: "flex",
            flexDirection: "column",
            transform: "scale(1.5)",
          }}
        >
          <IconButton onClick={handleUpArrow} >
            <ArrowUpwardIcon />
          </IconButton>
          <IconButton
            onClick={handleDownArrow}

          >
            <ArrowDownwardIcon />
          </IconButton>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
