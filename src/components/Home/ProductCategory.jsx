import { MUSIC } from "@/constant";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ProductCard } from "../Cards/ProductCard";

export const ProductCategory = ({ title }) => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "20px", md: "30px" }, fontWeight: "600" }}
            className="inter"
          >
            {title}
          </Typography>
          <Typography
            component={"a"}
            href="/"
            sx={{
              position: "relative",
              color: "#080808",
              textDecoration: "none",
              fontWeight: 500,
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -2,
                width: "100%",
                height: "2px",
                background: "linear-gradient(90deg, #fba141, #fa0b41, #733b7f)",
                transform: "scaleX(0)",
                transformOrigin: "right",
                transition: "transform 0.3s ease",
              },
              "&:hover::after": {
                transform: "scaleX(1)",
                transformOrigin: "left",
              },
            }}
            className="inter"
          >
            See More
          </Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Grid container>
            {MUSIC.slice(0, 4).map((item, key) => (
              <Grid
                item
                size={3}
                key={key}
                sx={{ pl: key !== 0 && 1, pr: key !== 3 && 1 }}
              >
                <ProductCard music={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
