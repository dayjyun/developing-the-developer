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
import { useEffect, useRef, useState } from "react";

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

  const introductionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const epaWorldRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const beyondRef = useRef<HTMLDivElement>(null);
  const specialThanksRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    introductionRef,
    backgroundRef,
    epaWorldRef,
    platformRef,
    experienceRef,
    beyondRef,
    specialThanksRef,
  ];

  useEffect(() => {
    document.title = "Developing the Developer";

    const favicon: HTMLLinkElement = document.querySelector("link[rel='icon']") || document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "../favicon.ico";
    document.head.appendChild(favicon);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleSectionIndex = sectionRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          setCurrentSection(visibleSectionIndex);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  const scrollToSection = (index: number) => {
    const sectionRef = sectionRefs[index];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
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
      <NavBar />
      <Container sx={{ minWidth: 320 }}>
        <div id="introduction" ref={introductionRef}><Introduction /></div>
        <div id="background" ref={backgroundRef}><Background /></div>
        <div id="epa-world" ref={epaWorldRef}><EPAWorld /></div>
        <div id="sde-platform" ref={platformRef}><Platform /></div>
        <div id="experience" ref={experienceRef}><Experience /></div>
        <div id="coding-and-beyond" ref={beyondRef}><Beyond /></div>
        <div id="special-thanks" ref={specialThanksRef}><SpecialThanks /></div>
        <div className="arrow-icons"
          style={{
            position: "fixed",
            bottom: 80,
            right: 50,
            gap: 10,
            display: "flex",
            flexDirection: "column",
            transform: "scale(1.5)",
          }}
        >
          <IconButton onClick={handleUpArrow}><ArrowUpwardIcon /></IconButton>
          <IconButton onClick={handleDownArrow}><ArrowDownwardIcon /></IconButton>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
