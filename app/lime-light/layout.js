// app/layout.js  (SERVER component - yahan use client NAHI hoga)
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";

export const metadata = {
  title: "My E-Commerce Store",
  description: "Buy the best products online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
