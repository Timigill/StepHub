"use client";

import { usePathname } from "next/navigation";
import Navbar from "../lime-light/navbar/navbar";
import Footer from "../lime-light/footer/footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // jahan Navbar/Footer hide karna ho
  const noLayoutRoutes = ["/lime-light/pages/login", "/lime-light/pages/signup"];
  const hideLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
