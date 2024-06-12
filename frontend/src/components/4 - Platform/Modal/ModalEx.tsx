import { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";

export default function ModalEx () {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: "16px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" style={{ color: "#158af5" }}>
            SDE Platform
          </Typography>
          <Typography sx={{ mt: 1 }}>Explore the Fastlane!</Typography>
          <div style={{ paddingTop: "18px" }}>
            <Button variant="contained" onClick={handleClose}>
              Go!
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
