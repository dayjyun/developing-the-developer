import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import teamMembers from "./Engineers.json";
import "./SpecialThanks.scss";
import mario from "../../assets/images/mario.png"
import luigi from "../../assets/images/luigi.png"
import toad from "../../assets/images/toad.png"
import banana from "../../assets/images/mk-banana.png"

export default function SpecialThanks() {
  return (
    <div className="special-thanks">
      <Typography variant="h2">Special Thanks</Typography>
      <br />
      <Typography variant="h4">
        Kindness, Openness, Laughter, and Welcoming Environment!
      </Typography>
      <br />
      <br />

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div
            className="logo"
            title="Mario"
            style={{ backgroundImage: `url(${mario})` }}
          ></div>
          <br />
          <Typography variant="body1">
            <strong>PMs</strong>
          </Typography>
          {teamMembers.pms.map((pm, i) => (
            <div key={`${pm.firstName} ${i}`}>
              {pm.firstName} {pm.lastName}
            </div>
          ))}
          <br />
        </Grid>
        <Grid item xs={3}>
          <div
            className="logo"
            title="Luigi"
            style={{ backgroundImage: `url(${luigi})` }}
          ></div>
          <br />
          <Typography variant="body1">
            <strong>Engineers</strong>
          </Typography>
          {teamMembers.engineers.map((engineer, i) => (
            <div key={`${engineer.firstName} ${i}`}>
              {engineer.firstName} {engineer.lastName}
            </div>
          ))}
        </Grid>
        <Grid item xs={3}>
          <div
            className="logo"
            title="Toad"
            style={{ backgroundImage: `url(${toad})` }}
          ></div>
          <br />
          <Typography variant="body1">
            <strong>Designers</strong>
          </Typography>
          {teamMembers.designers.map((designer, i) => (
            <div key={`${designer.firstName} ${i}`}>
              {designer.firstName} {designer.lastName}
            </div>
          ))}
        </Grid>

        <Grid>
          <div
            className="logo"
            title="Banana"
            style={{ backgroundImage: `url(${banana})` }}
          ></div>
          <br />
          <Typography variant="body1">
            <strong>Honorable Mentions</strong>
          </Typography>
          {teamMembers.other.map((member, i) => (
            <div key={`${member.firstName} ${i}`}>
              {member.firstName} {member.lastName}
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
