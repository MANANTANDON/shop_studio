import { ShoppingCartRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ProductsCard = ({ item }) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#F3F3F3",
          borderRadius: "12px",
          p: "7px",
          border: "1px solid #e8e8e8",
          // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: { xs: "180px", md: "277px" },
            width: "100%",
            borderRadius: "10px",
            border: "1px solid #e8e8e890",
          }}
        >
          <Image
            src={item?.img}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            unoptimized
          />
        </Box>
        <Box sx={{ px: 1, pt: 2 }}>
          <Typography
            fontSize="12px"
            sx={{ color: "#44444E80", fontWeight: "400" }}
            className="inter"
          >
            {item?.type}
          </Typography>
          <Box sx={{ my: 1 }}>
            <Typography
              fontSize={{ xs: "16px", md: "18px" }}
              sx={{
                color: "#38344A",
                fontWeight: "600",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
              className="inter"
            >
              {item?.name}
            </Typography>
            <Typography
              fontSize={{ xs: "14px", md: "16px" }}
              sx={{ color: "#4B4950", fontWeight: "400" }}
              className="inter"
            >
              <i>{item?.brand}</i>
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
            {item?.description}
          </Typography>
          <a href={item?.link}>
            <Button
              className="inter"
              sx={{
                textTransform: "none",
                bgcolor: "#2D2636",
                border: "1.5px solid #55515E",
                borderRadius: "7px",
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
