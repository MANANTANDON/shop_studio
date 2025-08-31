import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 5,
        }}
      >
        <Box sx={{ borderTop: "1px solid grey", px: 5, pt: 2 }}>
          <Typography
            className="inter"
            textAlign={"center"}
            sx={{
              color: "grey",
              fontSize: "12px",
            }}
          >
            © {currentYear} <span>SnowChild Studios</span>
          </Typography>
          <Typography
            className="inter"
            textAlign={"center"}
            sx={{
              color: "grey",
              fontSize: "12px",
              mt: 0.5,
            }}
          >
            <a href="/privacy-policy" style={{ color: "grey" }}>
              Privacy Policy
            </a>{" "}
            •{" "}
            <a href="/tnc" style={{ color: "grey" }}>
              Terms & Conditions
            </a>
          </Typography>
        </Box>
      </Box>
    </>
  );
};
