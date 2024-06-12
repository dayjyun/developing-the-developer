import { Typography } from "@mui/material";
import "./Experience.scss"

export default function Experience() {
    return (
      <div className="experience">
        <Typography variant="h2">Experience</Typography>
        <br />
        <br />
        <div className="experience-top">
          <div>
            <Typography variant="h4">Differences</Typography>
            <p>Cucumber -{">"} Mockito</p>
            <p>Maven -{">"} Gradle</p>
          </div>
          <div>
            <Typography variant="h4">New</Typography>
            <p>Azure</p>
            <p>Figma</p>
            <p>Code Coverage</p>
            <p>Cypress</p>
            <p>SonarQube</p>
          </div>

          <div>
            <Typography variant="h4">Reverse Engineer</Typography>
            <p>Object Oriented Programming</p>
            <p>Callback functions</p>
            <p>Patience</p>
            <p>Reading efficiency</p>
          </div>
        </div>
        <br />

        <div className="experience-bottom">
          <ul>
          <Typography variant="h4">Challenges</Typography>

            <li>Who needs it?</li>
            <li>What do they need?</li>
            <li>Why do they need it?</li>
            <li>What problem are we solving?</li>
            <li>Why is it important?</li>
            <li>What should the experience be like?</li>
          </ul>
          <br />
          <br />
          
          <ul>
          <Typography variant="h4">Discovery</Typography>
            <li>Insights about EPA</li>
            <li>Get to know the team</li>
            <li>Objectives</li>
            <li>Expectation</li>
            <li>Blockers</li>
            <li>Vision</li>
          </ul>
          <p>
          </p>
        </div>
      </div>
    );
}
