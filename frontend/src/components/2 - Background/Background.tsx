import {
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import "./Background.scss";
import chaseLogo from "../../assets/images/chase_logo_long_transparent.png";
import appAcademyLogo from "../../assets/images/app_academy_logo_long.png";
import interaptLogo from "../../assets/images/interapt_logo.png";
import generalAssemblyLogo from "../../assets/images/general_assembly_logo_long.webp";

export default function Background() {
  return (
    <div className="background">
      <Typography variant="h2">Background</Typography>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={5} style={{ textAlign: "center" }}>
                <img src={chaseLogo} alt="Chase Logo" className="chase-logo" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ textAlign: "center" }}>
                Teller -{">"} Banker
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                Small Business Specialist
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                Public Notary
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                Manager On Duty
              </TableCell>
            </TableRow>
          </TableBody>
          <br />
          <br />
          <br />
          
          <TableHead>
            <TableRow>
              <TableCell colSpan={5} style={{ textAlign: "center" }}>
                <img
                  src={appAcademyLogo}
                  alt="App Academy Logo"
                  className="app-academy-logo"
                  style={{ transform: "scale(1.1)" }}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={1} style={{ textAlign: "center" }}>
                1 Year Immersive Program
              </TableCell>
              <TableCell colSpan={1} style={{ textAlign: "center" }}>
                JavaScript, React, Express
              </TableCell>
              <TableCell colSpan={1} style={{ textAlign: "center" }}>
                Weekly Assessments 80%+ Pass Rate
              </TableCell>
              <TableCell colSpan={1} style={{ textAlign: "center" }}>
                Full-Stack Projects
              </TableCell>
            </TableRow>
          </TableBody>
          <br />
          <br />
          <br />

          <TableHead>
            <TableRow>
              <TableCell colSpan={5} style={{ textAlign: "center" }}>
                <img
                  src={interaptLogo}
                  alt="Interapt Logo"
                  style={{ transform: "scale(0.75)" }}
                />
                <img src={generalAssemblyLogo} alt="General Assembly Logo" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ textAlign: "center" }}>
                Supportive Staff
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                Java, Spring Boot, Angular
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                After Class Collaboration
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                Full-Stack Projects
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
