import { MUSIC } from "@/constant";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../Cards/ProductCard";
//Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const ProductCategory = ({ title }) => {
  const isMobile = useMediaQuery("(max-width:768px)"); // Added 'px' unit

  const [shuffledMusic, setShuffledMusic] = useState(MUSIC);

  useEffect(() => {
    setShuffledMusic([...MUSIC].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <>
      <Box sx={{ mb: 10 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "28px", md: "30px" }, fontWeight: "600" }}
            className="inter"
          >
            {title}
          </Typography>
          {/* <Typography
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
          </Typography> */}
        </Box>
        <Box sx={{ mx: -2 }}>
          <Grid container>
            {shuffledMusic.map((item, key) => (
              <Grid item size={{ xs: 6, sm: 4, md: 3 }} key={key} sx={{ p: 1 }}>
                <ProductCard music={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
