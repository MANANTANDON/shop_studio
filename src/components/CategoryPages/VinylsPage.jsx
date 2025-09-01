import { MUSIC } from "@/constant";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ChevronLeft } from "@mui/icons-material";
import { ProductCard } from "../Cards/ProductCard";

export const VinylsPage = () => {
  const [shuffledMusic, setShuffledMusic] = useState(MUSIC);

  useEffect(() => {
    setShuffledMusic([...MUSIC].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <>
      <Box sx={{ mb: 10 }}>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, mb: 5, mt: 2 }}
        >
          <Box
            component={"a"}
            href="/"
            sx={{
              borderRadius: "5px",
              border: "1px solid #00000020",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ChevronLeft fontSize="medium" />
          </Box>
          <Typography className="inter">Music</Typography>
        </Box>
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
            Music
          </Typography>
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
