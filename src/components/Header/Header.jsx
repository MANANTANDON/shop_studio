import { StoreRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          gap: 1,
          p: 2,
        }}
      >
        <Box
          sx={{
            borderRadius: "5px",
            background: `radial-gradient(circle at 0% 0%, 
              #e1ecf4 , 
              #fba141 , 
              #f76c56 , 
              #fa0b41 , 
              #e02173  )`,
            width: "fit-content",
          }}
        >
          <StoreRounded fontSize="large" sx={{ color: "#FFFFFF" }} />
        </Box>
        <Typography
          sx={{ fontSize: "24px", fontWeight: "600" }}
          className="inter"
        >
          Shop.SnowchildStudio
        </Typography>
      </Box>
    </>
  );
};
