import { Typography } from "@mui/material";
import "./Platform.scss";
import aksLogo from "../../assets/images/aks-logo.png";
import postgresLogo from "../../assets/images/postgres-logo.jpg";
import javaLogo from "../../assets/images/java-logo.png";
import angularLogo from "../../assets/images/angular-logo.png";
import githubLogo from "../../assets/images/github-logo.jpg";
import ModalEx from "./Modal/ModalEx";
import ToggleEx from "./Toggle/ToggleEx";

export default function Platform() {
  return (
    <div className="platform">
      <Typography variant="h2">
        SDE{" "}
        <s>
          <em>Portal</em>
        </s>{" "}
        Platform
      </Typography>
      <p className="release-date">Released November 17, 2023</p>
      <p className="description">
        Single-paged, user-friendly interface: backed by user testing
      </p>
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
            style={{
              backgroundImage: `url(${aksLogo})`,
              transform: "scale(1.8)",
              margin: "8px 0",
            }}
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
            style={{
              backgroundImage: `url(${angularLogo})`,
              transform: "scale(1.5)",
            }}
          ></div>
          <div
            className="logo"
            title="GitHub"
            style={{
              backgroundImage: `url(${githubLogo})`,
              transform: "scale(1.2)",
            }}
          ></div>
        </div>
      </div>
      <br />
      <br />

      <div className="contributions">
        <Typography variant="h4">Contributions</Typography>

        <div className="platform-examples">
          <div style={{ margin: "0 auto" }}>
            <ModalEx />
          </div>
          <ToggleEx />
        </div>
      </div>
    </div>
  );
}
