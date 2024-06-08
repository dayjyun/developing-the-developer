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

export default function Background() {
  return (
    <div className="background">
      <h2>Background</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={5} style={{ textAlign: "center" }}>
                <img
                  src="../../assets/images/chase_logo_long.jpg"
                  alt="Chase Logo"
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
                  src="../../assets/images/app_academy_logo_long.png"
                  alt="App Academy Logo"
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
                  src="../../assets/images/interapt_logo_long.jpg"
                  alt="Interapt Logo"
                />
                <img
                  src="../../assets/images/general_assembly_logo_long.webp"
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
