import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import SpecialThanks from "./components/7 - SpecialThanks/SpecialThanks";
import { Container, IconButton } from "@mui/material";
import NavBar from "./navbar/NavBar";
import EPAWorld from "./components/3 - EPAWorld/EPAWorld";
import Beyond from "./components/6 - Beyond/Beyond";
import Platform from "./components/4 - Platform/Platform";
import Experience from "./components/5 - Experience/Experience";
import Introduction from "./components/1 - Introduction/Introduction";
import Background from "./components/2 - Background/Background";
import Footer from "./components/999-Footer/Footer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const sections = [
  "introduction",
  "background",
  "epa-world",
  "sde-platform",
  "experience",
  "coding-and-beyond",
  "special-thanks",
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // useEffect(() => {
  //   document.title = "Developing the Developer";

  //   const favicon =
  //     document.querySelector("link[rel='icon']") ||
  //     document.createElement("link");
  //   favicon.rel = "icon";
  //   favicon.href = "../favicon.ico";
  //   document.head.appendChild(favicon);
  // }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setCurrentSection(sections.indexOf(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sectionRefs?.current.forEach((ref: any) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const element = sectionRefs.current[index];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
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
        <div id="introduction" ref={(el) => (sectionRefs.current[0] = el)}>
          <Introduction />
        </div>
        <div id="background" ref={(el) => (sectionRefs.current[1] = el)}>
          <Background />
        </div>
        <div id="epa-world" ref={(el) => (sectionRefs.current[2] = el)}>
          <EPAWorld />
        </div>
        <div id="sde-platform" ref={(el) => (sectionRefs.current[3] = el)}>
          <Platform />
        </div>
        <div id="experience" ref={(el) => (sectionRefs.current[4] = el)}>
          <Experience />
        </div>
        <div id="coding-and-beyond" ref={(el) => (sectionRefs.current[5] = el)}>
          <Beyond />
        </div>
        <div id="special-thanks" ref={(el) => (sectionRefs.current[6] = el)}>
          <SpecialThanks />
        </div>
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
          <IconButton onClick={handleUpArrow}>
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
