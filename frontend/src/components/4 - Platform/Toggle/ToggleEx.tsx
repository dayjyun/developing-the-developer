import React, { useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Typography,
} from "@mui/material";

const exampleRequests = [
  {
    id: 1,
    title: "Intake Request",
    description: "Description for request",
    status: "Pending",
  },
  {
    id: 2,
    title: "App Name",
    description: "Description for app",
    status: "Complete",
  },
];

export default function ToggleEx() {
  const [view, setView] = useState<"grid" | "list">("grid");

  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: "grid" | "list"
  ) => {
    if (newView) {
      setView(newView);
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Complete" ? "green" : "yellow";
  };

  return (
    <Box sx={{ width: "50%", textAlign: "center", mt: 4 }}>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleViewChange}
        aria-label="view toggle"
        sx={{ mb: 2 }}
      >
        <ToggleButton value="grid" aria-label="grid view">
          Grid
        </ToggleButton>
        <ToggleButton value="list" aria-label="list view">
          List
        </ToggleButton>
      </ToggleButtonGroup>

      <Box
        sx={{
          display: "flex",
          flexDirection: view === "grid" ? "row" : "column",
          gap: 2,
        }}
      >
        {exampleRequests.map((item) => (
          <Box
            key={item.id}
            sx={{
              border: "1px solid #ccc",
              padding: 2,
              width: view === "grid" ? "45%" : "100%",
              display: "flex",
              flexDirection: view === "grid" ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h6">{item.title}</Typography>
              {view === "grid" && <Typography>{item.description}</Typography>}
            </Box>
            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                bgcolor: getStatusColor(item.status),
                marginTop: "8px",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
