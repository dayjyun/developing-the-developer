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
            <p>Callback Functions</p>
            <p>Patience</p>
          </div>
        </div>
        <br />
        <Typography variant="h4">Challenges</Typography>
        Trying to understand what we were creating
        <ul>
          <li>Who needs it?</li>
          <li>What do they need?</li>
          <li>Why do they need it?</li>
          <li>What problem are we solving?</li>
          <li>Why is it important?</li>
          <li>What should the experience be like?</li>
        </ul>
        <br />
        <p>Couldn't share experience with peers</p>
        <p>Some questions I wanted to ask were unique</p>
        <br />
        <Typography variant="h4">Start from discovery</Typography>
        <p>
          I would have liked to have been in the discovery stage to gain
          insights into CVS and EPA, understand the team, objectives, acronyms,
          vision, blockers, and expectations.
        </p>
      </div>
    );
}
