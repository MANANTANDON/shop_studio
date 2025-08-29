import { ShoppingCartRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ProductCard = ({ music }) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          borderRadius: "28px",
          p: "7px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "277px",
            width: "100%",
            borderRadius: "23px",
            border: "1px solid #e8e8e890",
          }}
        >
          <Image
            src={music.img}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Box sx={{ px: 1, pt: 2 }}>
          <Typography
            fontSize="12px"
            sx={{ color: "#44444E80", fontWeight: "400" }}
            className="inter"
          >
            {music.type}
          </Typography>
          <Box sx={{ my: 1 }}>
            <Typography
              fontSize={{ xs: "16px", md: "18px" }}
              sx={{ color: "#38344A", fontWeight: "600" }}
              className="inter"
            >
              {music.name}
            </Typography>
            <Typography
              fontSize={{ xs: "14px", md: "16px" }}
              sx={{ color: "#4B4950", fontWeight: "400" }}
              className="inter"
            >
              <i>{music.artist}</i>
            </Typography>
          </Box>
          <Typography
            className="inter"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              color: "#44444E80",
              fontSize: "12px",
            }}
          >
            {music.description}
          </Typography>
          <a href={music.link}>
            <Button
              className="inter"
              sx={{
                textTransform: "none",
                bgcolor: "#2D2636",
                border: "1.5px solid #55515E",
                borderRadius: "26px",
                color: "#FFFFFF",
                fontWeight: "500",
                my: 2,
              }}
              startIcon={<ShoppingCartRounded sx={{ color: "#FFFFFF" }} />}
              fullWidth
            >
              Buy
            </Button>
          </a>
        </Box>
      </Box>
    </>
  );
};
