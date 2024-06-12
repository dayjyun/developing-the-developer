import { Typography } from "@mui/material"
import "./Introduction.scss"
import cvsHealthLogo from "../../assets/images/cvs-health-logo.jpg"
import interaptLogoBox from "../../assets/images/interapt_logo-box.png"

export default function Introduction() {
    return (
      <div className="introduction">
        <Typography variant="h1">Kevin Barrios</Typography>
        <div className="details">
          <Typography variant="h3">
            Junior Software Engineer
          </Typography>
          <Typography variant="h3">Chicago - Buffalo Grove</Typography>
          <Typography variant="h3">SDE Platform</Typography>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="logo-container">
          <div
            className="logo"
            title="Interapt"
            style={{
              backgroundImage: `url(${interaptLogoBox})`,
              transform: "scale(2)",
            }}
          ></div>
          <div
            className="logo"
            title="CVS Health"
            style={{
              backgroundImage: `url(${cvsHealthLogo})`,
              transform: "scale(2)",
            }}
          ></div>
        </div>
      </div>
    );
}
