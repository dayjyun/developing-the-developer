import { Typography } from "@mui/material";
import "./Overview.scss";
import aksLogo from "../../assets/images/aks-logo.png"
import postgresLogo from "../../assets/images/postgres-logo.jpg"
import javaLogo from "../../assets/images/java-logo.png"
import angularLogo from "../../assets/images/angular-logo.png"
import githubLogo from "../../assets/images/github-logo.jpg"

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
        <Typography variant="h4">Technologies</Typography>
        <br />

        <div className="logo-container">
          <div
            className="logo"
            title="Azure Kubernetes Service"
            style={{ backgroundImage: `url(${aksLogo})`, transform: "scale(1.8)", margin: "8px 0" }}
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

      <div className="contributions">
        <Typography variant="h4">Contributions</Typography>
        <p>Modal</p>
        <p>Dashboard</p>
        <p>Cypress</p>
      </div>

    </div>
  );
}
