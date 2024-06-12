import { Typography } from "@mui/material";
import "./Next.scss";
import dockerLogo from "../../assets/images/docker-logo.png";
import azureLogo from "../../assets/images/azure-logo.png";
import css3Logo from "../../assets/images/css3-logo.png";
import sdeIcon from "../../assets/images/sde-icon.jpg";
import reactLogo from "../../assets/images/react-logo_black-text.jpg";
import backstageLogo from "../../assets/images/backstage-icon.png";

export default function Next() {
  return (
    <div className="next">
      <Typography variant="h2">Coding and Beyond</Typography>
      <br />

      <em>
        <Typography variant="h4">Continuous Learning and Growth</Typography>
      </em>
      <br />

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
          style={{
            backgroundImage: `url(${dockerLogo})`,
            transform: "scale(1.4)",
          }}
        ></div>
      </div>
      <br />

      <div className="upgrades">
        <br />
        <div className="logo-container">
          <div
            className="logo"
            title="CSS3"
            style={{ backgroundImage: `url(${css3Logo})` }}
          ></div>
          <div
            className="logo"
            title="React"
            style={{
              backgroundImage: `url(${reactLogo})`,
              transform: "scale(1.2)",
            }}
          ></div>
          <div
            className="logo"
            title="Backstage"
            style={{ backgroundImage: `url(${backstageLogo})` }}
          ></div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <em>
        <Typography variant="h4">Engineering In Mind</Typography>
      </em>

      <br />
      <p>Bachelor's degree in CS</p>
      <br />

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
      <br />

      <p>Master the best practices!</p>
    </div>
  );
}
