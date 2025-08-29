"use client";

import BannerSlider from "../components/lime-light/BannerSlider";
import ProductsGrid from "../components/lime-light/ProductsGrid";
import ReadyToWear from "../components/lime-light/ReadyToWear";

export default function HomePage() {
  const unstitchedProducts = [
    { src: "/image1.jpg", name: "Stylish", alt: "Stylish Outfit" },
    { src: "/image2.jpg", name: "Embroidered", alt: "Embroidered Outfit" },
    { src: "/image3.jpeg", name: "Printed", alt: "Printed Outfit" },
    { src: "/image4.jpeg", name: "Formal", alt: "Formal Outfit" },
  ];

  const readyProducts = [
    { src: "/image1.jpg", name: "Product 1", alt: "Ready Product 1" },
    { src: "/image2.jpg", name: "Product 2", alt: "Ready Product 2" },
    { src: "/image3.jpeg", name: "Product 3", alt: "Ready Product 3" },
    { src: "/image4.jpeg", name: "Product 4", alt: "Ready Product 4" },
    { src: "/banner1.jpg", name: "Product 5", alt: "Ready Product 5" },
    { src: "/banner2.png", name: "Product 6", alt: "Ready Product 6" },
    { src: "/banner3.jpg", name: "Product 7", alt: "Ready Product 7" },
    { src: "/banner4.png", name: "Product 8", alt: "Ready Product 8" },
  ];

  return (
    <div className="homepage">
      <BannerSlider />
      <ProductsGrid title="UNSTITCHED" products={unstitchedProducts} />
      <ReadyToWear products={readyProducts} />
    </div>
  );
}
