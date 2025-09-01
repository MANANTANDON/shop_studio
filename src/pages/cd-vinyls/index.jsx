import { VinylsPage } from "@/components/CategoryPages/VinylsPage";
import { HomeLayout } from "@/components/Layout/HomeLayout";
import Head from "next/head";
import React from "react";

export default function Index() {
  return (
    <>
      <Head></Head>
      <HomeLayout>
        <VinylsPage />
      </HomeLayout>
    </>
  );
}
