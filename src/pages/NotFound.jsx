import { Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const NotFound = () => {
  const { colors } = useContext(AppContext);
  return (
    <main
      style={{
        backgroundColor: colors?.customPrimaryColor || "#f0f0f0", // Add a fallback color
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#fff",
          textTransform: "uppercase",
          typography: { xs: "h5", sm:"h2", md: "h1" }, // Responsive variant
        }}
      >
        Not Found
      </Typography>
    </main>
  );
};

export default NotFound;
