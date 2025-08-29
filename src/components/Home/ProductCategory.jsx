import { MUSIC } from "@/constant";
import { Box, Typography } from "@mui/material";
import React from "react";
import { ProductCard } from "../Cards/ProductCard";

//Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const ProductCategory = ({ title }) => {
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
            sx={{ fontSize: { xs: "24px", md: "30px" }, fontWeight: "600" }}
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
        <Box sx={{ my: 1 }}>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              500: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
          >
            {MUSIC.slice(0, 4).map((item, key) => (
              <SwiperSlide key={key}>
                <ProductCard music={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};
