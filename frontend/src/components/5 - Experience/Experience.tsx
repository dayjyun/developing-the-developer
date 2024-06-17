import { Typography } from "@mui/material";
import "./Experience.scss"

export default function Experience() {
    return (
      <div className="experience">
        <Typography variant="h2">Experience</Typography>
        <br />
        <br />

        <div className="xperience-top" style={{ textAlign: "left" }}>
          <div>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              XPerience
            </Typography>
            <div style={{ display: "flex", gap: 20 }}>
              <div style={{ width: 250 }}>
                <p>Daily pair programming</p>
                <p>Double daily standups</p>
                <p>Cross-functional team</p>
                <p>Weekly retros</p>
              </div>

              <div style={{ width: 250 }}>
                <p>IPMs</p>
                <p>User stories delegation</p>
                <p>Pseudo coding</p>
                <p>Black boxing</p>
              </div>

              <div style={{ width: 250 }}>
                <p>Debugging</p>
                <p>Code breaking</p>
                <p>Testing</p>
                <p>Refactoring</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="experience-mid">
          <div>
            <Typography variant="h4">Differences</Typography>
            <p>Cucumber -{">"} Mockito</p>
            <p>Maven -{">"} Gradle</p>
            <p>Angular -{">"} React</p>
          </div>
          <div>
            <Typography variant="h4">New</Typography>
            <p>Azure</p>
            <p>Figma</p>
            <p>Code Coverage</p>
            <p>Cypress</p>
            <p>Backstage</p>
          </div>

          <div>
            <Typography variant="h4">Reverse Engineer</Typography>
            <p>Object Oriented Programming</p>
            <p>Callback functions</p>
            <p>Reading efficiency</p>
            <p>Patience</p>
            <p>Researching</p>
          </div>
        </div>
        <br />
        <br />

        <div className="experience-bottom">
          <ul>
            <Typography variant="h4">Challenges</Typography>

            <p>Who needs it?</p>
            <p>What do they need?</p>
            <p>Why do they need it?</p>
            <p>What problem are we solving?</p>
            <p>Why is it important?</p>
            <p>What should the experience be like?</p>
          </ul>
          <br />
          <br />

          <ul>
            <Typography variant="h4">Discovery</Typography>
            <p>Insights about EPA</p>
            <p>Get to know the team</p>
            <p>Objectives</p>
            <p>Expectation</p>
            <p>Blockers</p>
            <p>Vision</p>
          </ul>
          <p></p>
        </div>
      </div>
    );
}
