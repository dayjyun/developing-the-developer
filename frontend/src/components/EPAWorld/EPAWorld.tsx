import TextSphere from "./TextSphere/TextSphere"
import "./EPAWorld.scss"
import sdeLogo from "../../assets/images/sde-logo.png";
import { Typography } from "@mui/material";

export default function EPAWorld() {
    return (
      <div className="epa-world">
        <Typography variant="h2">EPA World</Typography>
        <div className="sde-logo-container">
          <img src={sdeLogo} alt="SDE logo" className="sde-logo" />
        </div>
        <TextSphere />
        <div className="text-area">
          <p>
            SDE's mission is to automate and accelerate requests that are
            commonly channeled through ServiceNow
          </p>
          <ul>
            <li>Cut down processing time</li>
            <li>Automation</li>
          </ul>
          <br />
          <div style={{display: "flex", width: "75%", gap: "30px"}}>
              <p>
                The goal is to improve developers' lives and create a rich internal
                open-source community for sharing and improving reusable code and
                solutions.
              </p>
              <p>
                Building a developer platform will simplify and consolidate the developer
                experience by enabling self-service access to all developer tools
                and automated services.
              </p>
          </div>
        </div>
      </div>
    );
}
