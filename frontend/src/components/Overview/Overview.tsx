import { Typography } from "@mui/material";
import "./Overview.scss";
import aksLogo from "../../assets/images/aks-logo.png"
import postgresLogo from "../../assets/images/postgres-logo.jpg"
import javaLogo from "../../assets/images/java-logo.png"
import angularLogo from "../../assets/images/angular-logo.png"
import githubLogo from "../../assets/images/github-logo.jpg"
import reactLogo from "../../assets/images/react-logo.jpg"
import backstageLogo from "../../assets/images/backstage-icon.png"

export default function Overview() {
  return (
    <div className="overview">
      <Typography variant="h2">
        <em>SDE <s>Portal</s> Platform</em>
      </Typography>
      <p className="release-date">Released November 17, 2023</p>
      <br />
      <p className="description">Single-paged, user-friendly interface; backed by user testing</p>
      <p className="description">Reduced sections from 120+ to ~20</p>
      <p className="description">Faster processing time: 14 weeks to 2 weeks</p>
      <br />

      <div className="tech-info">
        <Typography variant="h3">Technologies</Typography>
        <br />

        <div className="logo-container">
          <div
            className="logo"
            title="Azure Kubernetes Service"
            style={{ backgroundImage: `url(${aksLogo})` }}
          ></div>
          <div
            className="logo"
            title="Postgres"
            style={{ backgroundImage: `url(${postgresLogo})` }}
          ></div>
          <div
            className="logo"
            title="Java"
            style={{ backgroundImage: `url(${javaLogo})` }}
          ></div>
          <div
            className="logo"
            title="Angular"
            style={{ backgroundImage: `url(${angularLogo})` }}
          ></div>
          <div
            className="logo"
            title="GitHub"
            style={{ backgroundImage: `url(${githubLogo})` }}
          ></div>
        </div>
      </div>
      <br />

      <div className="upgrades">
        <Typography variant="h3">Upgrades</Typography>
        <br />

        <div className="logo-container">
          <div
            className="logo"
            title="React"
            style={{ backgroundImage: `url(${reactLogo})` }}
          ></div>
          <div
            className="logo"
            title="Backstage"
            style={{ backgroundImage: `url(${backstageLogo})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
