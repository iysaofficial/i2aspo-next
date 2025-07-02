import { useEffect, useState } from "react";
import Head from "next/head";
import Navigation from "@/components/Navbar";
import HeroSection from "@/components/MainHero";
import AboutSection from "@/components/AboutSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import AfterMovie from "@/components/AfterMovie";
import NewsletterSection from "@/components/NewsletterSection";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hanya jalan di client
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Render preloader hanya di client, setelah mount
  if (loading) return <Preloader />;

  return (
    <>
      <Head>
        <title>
          I2ASPO - Indonesia International Applied Science Project Olympiad
        </title>
        <meta name="description" content="I2ASPO Official Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About */}
      <AboutSection />

      {/* Categories */}
      <CategorySection />

      {/* After Movie Section */}
      <AfterMovie />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
