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
        <Typography
          className="inter"
          sx={{
            color: "grey",
            fontSize: "12px",
            borderTop: "1px solid grey",
            px: 5,
            pt: 2,
          }}
        >
          © {currentYear} <span>SnowChild Studios</span>
        </Typography>
      </Box>
    </>
  );
};
