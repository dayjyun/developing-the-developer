import { Typography } from "@mui/material";
import "./Beyond.scss";
import dockerLogo from "../../assets/images/docker-logo.png";
import azureLogo from "../../assets/images/azure-logo.png";
import css3Logo from "../../assets/images/css3-logo.png";
import sdeIcon from "../../assets/images/sde-icon-transparent.png";
import reactLogo from "../../assets/images/react-logo_black-text.jpg";
import backstageLogo from "../../assets/images/backstage-icon.png";

export default function Beyond() {
  return (
    <div className="beyond">
      <Typography variant="h2">Coding and Beyond</Typography>
      <br />
      <br />
      <Typography variant="h4">Continuous Learning and Growth</Typography>
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
          <div
            className="logo"
            title="CSS3"
            style={{ backgroundImage: `url(${css3Logo})` }}
          ></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <Typography variant="h4">Engineering In Mind</Typography>
      <br />
      <div className="engineering-in-mind">
        <div>
          <p>Bachelor's degree in CS</p>
          <p>Participate in hackathons</p>
          <p>Contribute to open-source projects</p>
          <p>Mentorship</p>
        </div>
        <div>
          <p>Refactor and improve</p>
          <ul>
            <li>Backend</li>
            <li>Frontend</li>
            <li>Testing</li>
          </ul>
        </div>
        <br />
        <div>
          <p>Increase knowledge</p>
          <p>Increase speed</p>
          <p>Increase confidence</p>
          <br />
        </div>
      </div>
      <br />

      <Typography variant="h5">Master Best Practices!</Typography>
    </div>
  );
}
