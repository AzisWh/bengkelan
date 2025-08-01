"use client";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
