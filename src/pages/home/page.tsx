import Layout from "../../components/layout/Layout";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import ReservationsSection from "./components/ReservationsSection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <ReservationsSection />
      <ContactSection />
    </Layout>
  );
}