import Head from "next/head";
import { ProductCategory } from "../components/Home/ProductCategory";
import { HomeLayout } from "@/components/Layout/HomeLayout";
import { HeroContainer } from "@/components/Home/HeroContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop.SnowchildStudio</title>
        <meta name="description" content="Curated Amazon website for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroContainer />
        <ProductCategory title="Music" />
      </HomeLayout>
    </>
  );
}
