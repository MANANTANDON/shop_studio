import { SpeakerPage } from "@/components/CategoryPages/SpeakerPage";
import { HomeLayout } from "@/components/Layout/HomeLayout";
import Head from "next/head";
import React from "react";

export default function Index() {
  return (
    <>
      <Head></Head>
      <HomeLayout>
        <SpeakerPage />
      </HomeLayout>
    </>
  );
}
