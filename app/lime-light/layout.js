// app/layout.js
import "../lime-light/lime-light.css";
import Navbar from "./navbar/navbar";
// import Footer from "./components/Footer";

export const metadata = {
  title: "My E-Commerce Store",
  description: "Buy the best products online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
