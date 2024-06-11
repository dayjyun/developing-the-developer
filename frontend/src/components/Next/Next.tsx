import { Typography } from "@mui/material";
import "./Next.scss";
import dockerLogo from "../../assets/images/docker-logo.png";
import azureLogo from "../../assets/images/azure-logo.png";
import css3Logo from "../../assets/images/css3-logo.png";
import sdeIcon from "../../assets/images/sde-icon.jpg";

export default function Next() {
  return (
    <div className="next">
      <Typography variant="h2">Coding and Beyond</Typography>
      <br />
      <em>
        <Typography variant="h3">Continuous Learning and Growth</Typography>
      </em>
      <div className="logo-container">
        <div
          className="logo"
          title="SDE"
          style={{ backgroundImage: `url(${sdeIcon})` }}
        ></div>
        <div
          className="logo"
          title="MS Azure"
          style={{ backgroundImage: `url(${azureLogo})` }}
        ></div>
        <div
          className="logo"
          title="Docker"
          style={{ backgroundImage: `url(${dockerLogo})` }}
        ></div>
        <div
          className="logo"
          title="CSS3"
          style={{ backgroundImage: `url(${css3Logo})` }}
        ></div>
      </div>
      <br />

      <em>
        <Typography variant="h4">Engineering In Mind</Typography>
      </em>

      <p>Refactor and improve previous projects </p>
      <ul>
        <li>Backend</li>
        <li>Frontend</li>
        <li>Testing</li>
      </ul>
      <br />

      <p>Increase speed</p>
      <p>Increase knowledge</p>
      <p>Increase confidence</p>
      <p>Master the best practices</p>
    </div>
  );
}
