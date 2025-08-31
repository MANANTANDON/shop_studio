import { Box, Container } from "@mui/material";
import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const HomeLayout = ({ children }) => {
  return (
    <>
      <Box sx={{ m: -1 }}>
        <Header />
        <Container maxWidth="lg">{children}</Container>
        <Footer />
      </Box>
    </>
  );
};
