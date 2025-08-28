// app/layout.js
import Navbar from "../components/lime-light/navbar/navbar";
// import Footer from "./components/Footer";

export const metadata = {
  title: "My E-Commerce Store",
  description: "Buy the best products online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
