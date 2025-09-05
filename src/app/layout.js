// app/layout.js
import LayoutWrapper from "./components/LayoutWrapper/LayoutWrapper";
import Providers from "./providers";

export const metadata = {
  title: "My E-Commerce Store",
  description: "Buy the best products online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
