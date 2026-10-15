import { ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;           
  showBackButton?: boolean; 
}

export default function Layout({ children, title, showBackButton = false }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {title ? (
        <div className="flex-grow pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto w-full">
          
          {showBackButton && (
            <button 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-amber-600 hover:text-amber-500 transition-colors mb-8 group font-medium"
            >
              <i className="ri-arrow-left-line group-hover:-translate-x-1 transition-transform" />
              <span>{t("nav_back_home")}</span>
            </button>
          )}
          
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            {title}
          </h1>
          
          <div className="prose prose-stone max-w-none text-stone-700">
            {children}
          </div>
        </div>
      ) : (
        <div className="flex-grow">
          {children}
        </div>
      )}
      
      <Footer />
    </main>
  );
}