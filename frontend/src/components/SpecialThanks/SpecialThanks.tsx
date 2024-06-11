import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import teamMembers from "./Engineers.json";
import "./SpecialThanks.scss";

export default function SpecialThanks() {
  return (
    <div className="special-thanks">
      <Typography variant="h2">Special Thanks</Typography>
      <Typography variant="h3">
        Everyone's kindness, openness, laughter, and welcoming environment!
      </Typography>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body1">
            <strong>Engineers</strong>
          </Typography>
          {teamMembers.engineers.map((engineer, i) => (
            <div key={`${engineer.firstName} ${i}`}>
              {engineer.firstName} {engineer.lastName}
            </div>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">
            <strong>PMs</strong>
          </Typography>
          {teamMembers.pms.map((pm, i) => (
            <div key={`${pm.firstName} ${i}`}>
              {pm.firstName} {pm.lastName}
            </div>
          ))}
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
        <Grid item xs={4}>
          <Typography variant="body1">
            <strong>Supportive Members</strong>
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
