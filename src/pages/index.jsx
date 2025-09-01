import Head from "next/head";
import { ProductCategory } from "../components/Home/ProductCategory";
import { HomeLayout } from "@/components/Layout/HomeLayout";
import { HeroContainer } from "@/components/Home/HeroContainer";
import { Speakers } from "@/components/Home/Speakers";

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>
          Shop Snowchild Studio | Curated Vinyl Records & Amazon Finds
        </title>
        <meta
          name="description"
          content="Discover handpicked vinyl records and curated Amazon products. Shop The Weeknd vinyl, music CDs, tech gadgets, and lifestyle essentials at Shop Snowchild Studio."
        />
        <meta
          name="keywords"
          content="vinyl records, The Weeknd vinyl, music CDs, curated Amazon finds, After Hours vinyl, Dawn FM vinyl, Starboy vinyl, affiliate shopping, music collection, tech gadgets"
        />
        <meta name="author" content="Shop Snowchild Studio" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Mobile Responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/snowchild.png" />
        <link rel="apple-touch-icon" href="/snowchild.png" />
        <meta name="theme-color" content="#000000" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://shop.snowchildstudio.com" />

        {/* Language */}
        <html lang="en" />

        {/* Open Graph / Facebook */}
        <meta property="og:site_name" content="Shop Snowchild Studio" />
        <meta
          property="og:title"
          content="Shop Snowchild Studio | Curated Vinyl Records & Amazon Finds"
        />
        <meta
          property="og:description"
          content="Discover handpicked vinyl records and curated Amazon products. Shop The Weeknd vinyl, music CDs, tech gadgets, and lifestyle essentials."
        />
        <meta
          property="og:image"
          content="https://shop.snowchildstudio.com/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Shop Snowchild Studio - Curated Vinyl Records and Amazon Products"
        />
        <meta property="og:url" content="https://shop.snowchildstudio.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@snowchildstudio" />
        <meta name="twitter:creator" content="@snowchildstudio" />
        <meta
          name="twitter:title"
          content="Shop Snowchild Studio | Curated Vinyl Records & Amazon Finds"
        />
        <meta
          name="twitter:description"
          content="Handpicked vinyl records, music CDs, tech gadgets & lifestyle essentials from Amazon."
        />
        <meta
          name="twitter:image"
          content="https://shop.snowchildstudio.com/og-image.png"
        />
        <meta
          name="twitter:image:alt"
          content="Shop Snowchild Studio - Curated Products"
        />

        {/* Additional SEO */}
        <meta name="application-name" content="Shop Snowchild Studio" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="format-detection" content="telephone=no" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Shop Snowchild Studio",
              description:
                "Curated vinyl records and Amazon products including The Weeknd vinyl, music CDs, and tech gadgets",
              url: "https://shop.snowchildstudio.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://shop.snowchildstudio.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "Shop Snowchild Studio",
                logo: {
                  "@type": "ImageObject",
                  url: "https://shop.snowchildstudio.com/snowchild.png",
                },
              },
            }),
          }}
        />
      </Head>
      <HomeLayout>
        <HeroContainer />
        <Speakers title="Speakers" />
        <ProductCategory title="CDs / Vinyls" />
      </HomeLayout>
    </>
  );
}
