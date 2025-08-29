import { Box, Container } from "@mui/material";
import React from "react";
import { Header } from "../Header/Header";

export const HomeLayout = ({ children }) => {
  return (
    <>
      <Box sx={{ m: -1 }}>
        <Header />
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </>
  );
};
