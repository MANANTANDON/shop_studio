import { SPEAKERS } from "@/constant";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductsCard } from "../Cards/ProductsCard";
import { useRouter } from "next/router";
import { ChevronLeft } from "@mui/icons-material";

export const SpeakerPage = () => {
  const [shuffledMusic, setShuffledMusic] = useState(SPEAKERS);
  const router = useRouter();
  console.log(router, "LOCATION");

  useEffect(() => {
    setShuffledMusic([...SPEAKERS].sort(() => Math.random() - 0.5));
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
          <Typography className="inter">Speakers</Typography>
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
            Speakers
          </Typography>
        </Box>
        <Box sx={{ mx: -2 }}>
          <Grid container>
            {shuffledMusic.map((item, key) => (
              <Grid item size={{ xs: 6, sm: 4, md: 3 }} key={key} sx={{ p: 1 }}>
                <ProductsCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
