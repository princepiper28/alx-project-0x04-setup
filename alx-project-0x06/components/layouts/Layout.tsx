import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface"; // ✅ Using imported type

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
