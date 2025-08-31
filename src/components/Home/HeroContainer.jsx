import { Box, Typography } from "@mui/material";
import React from "react";

export const HeroContainer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          my: 5,
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: "bold" }}
          className="inter"
        >
          Curated for{" "}
          <Box
            component="span"
            sx={{
              background:
                "radial-gradient(circle at 0% 0%, #e1ecf4 , #fba141 , #f76c56 , #fa0b41 , #e02173  )",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            You.
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "32px", md: "42px" },
            fontWeight: "bold",
            mt: { xs: -1, md: -2 },
          }}
          className="inter"
        >
          Shipped by{" "}
          <Box
            component="span"
            sx={{
              background:
                "radial-gradient(circle at 0% 0%, #e02173 , #733b7f, #15416c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Amazon.
          </Box>
        </Typography>
        <Box sx={{ my: 3 }}>
          <Typography
            className="inter"
            textAlign="center"
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            Discover the most loved products from Amazon — handpicked and
            approved by shoppers like you.
          </Typography>
          <Typography
            className="inter"
            textAlign="center"
            sx={{ fontSize: { xs: "14px", md: "16px" }, my: { xs: 1, md: 0 } }}
          >
            🎯 No endless scrolling. No confusion. Just curated picks that save
            you time.
          </Typography>
          <Typography
            className="inter"
            fontWeight={"300"}
            textAlign="center"
            sx={{ mt: 1 }}
          >
            <i>Updated weekly.</i>
          </Typography>
        </Box>
      </Box>
    </>
  );
};
