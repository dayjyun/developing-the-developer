import "./EPAWorld.scss";
import sdeLogo from "../../assets/images/sde-logo.png";
import { Typography } from "@mui/material";
import wordCloud from "../../assets/images/wc.png"

export default function EPAWorld() {
  return (
    <div className="epa-world">
      <div className="epa-world-header">
        <Typography variant="h2">EPA World</Typography>
        <h3 className="plus-icon">+</h3>
        <div className="sde-logo-container">
          <img src={sdeLogo} alt="SDE logo" className="sde-logo" />
        </div>
      </div>
      <br />
      <br />

      {/* <TextSphere /> */}
      <div className="word-cloud-container"><img src={wordCloud} alt="Word Cloud" className="epa-world-word-cloud" /></div>
      <br />

      <div className="text-area">
        <p>
          SDE's mission is to automate and accelerate requests that are commonly
          channeled through ServiceNow
        </p>
        <ul>
          <li>Cut down processing time</li>
          <li>Automation</li>
        </ul>
        <br />
        <div style={{ display: "flex", width: "75%", gap: "30px" }}>
          <p>
            The goal is to improve developers' lives and create a rich internal
            open-source community for sharing and improving reusable code and
            solutions.
          </p>
          <p>
            Building a developer platform will simplify and consolidate the
            developer experience by enabling self-service access to all
            developer tools and automated services.
          </p>
        </div>
      </div>
    </div>
  );
}
