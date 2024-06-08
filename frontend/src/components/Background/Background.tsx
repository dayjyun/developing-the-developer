import {
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./Background.scss";
import chaseLogo from "../../assets/images/chase_logo_long_transparent.png";
import appAcademyLogo from "../../assets/images/app_academy_logo_long.png";
import interaptLogo from "../../assets/images/interapt_logo_long.webp";
import generalAssemblyLogo from "../../assets/images/general_assembly_logo_long.webp";

export default function Background() {
  return (
    <div className="background">
      <h2>Background</h2>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={5} style={{ textAlign: "center" }}>
                <img
                  src={chaseLogo}
                  alt="Chase Logo"
                  className="chase-logo"
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ textAlign: "center" }}>
                Teller -{">"} banker
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

          <TableHead>
            <TableRow>
              <TableCell colSpan={5} style={{ textAlign: "center" }}>
                <img
                  src={appAcademyLogo}
                  alt="App Academy Logo"
                  className="app-academy-logo"
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={1} style={{ textAlign: "center" }}>
                1 Year - Part Time Immersive Program
              </TableCell>
              <TableCell colSpan={1} style={{ textAlign: "center" }}>
                JavaScript, React, Express
              </TableCell>
              <TableCell colSpan={1} style={{ textAlign: "center" }}>
                Weekly Assessments with 80%+ passing score
              </TableCell>
              <TableCell colSpan={1} style={{ textAlign: "center" }}>
                Full-Stack Projects
              </TableCell>
            </TableRow>
          </TableBody>

          <TableHead>
            <TableRow>
              <TableCell colSpan={5} style={{ textAlign: "center" }}>
                <img
                  src={interaptLogo}
                  alt="Interapt Logo"
                />
                <img
                  src={generalAssemblyLogo}
                  alt="General Assembly Logo"
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2.5} style={{ textAlign: "center" }}>
                Java, Spring Boot, Angular
              </TableCell>
              <TableCell colSpan={2.5} style={{ textAlign: "center" }}>
                Team collaboration after class
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
