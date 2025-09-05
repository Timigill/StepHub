"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail() {
  const { id } = useParams();

  // 👇 same 8 products jo Stylish page me hain
  const products = [
    {
      id: 1,
      name: "3 Piece Karandi Suit",
      img: "/image1.jpg",
      desc: "Embroidered Unstitched",
      price: 6499,
      oldPrice: 7499,
    },
    {
      id: 2,
      name: "3 Piece Khaddar Suit",
      img: "/image4.jpeg",
      desc: "Embroidered Unstitched",
      price: 4999,
    },
    {
      id: 3,
      name: "3 Piece Khaddar Suit",
      img: "/image3.jpeg",
      desc: "Embroidered Unstitched",
      price: 6499,
    },
    {
      id: 4,
      name: "Khaddar Shirt",
      img: "/image2.jpg",
      desc: "Printed Unstitched",
      price: 959,
      oldPrice: 1199,
      discount: "20% OFF",
    },
    {
      id: 5,
      name: "Khaddar Shirt",
      img: "/image2.jpg",
      desc: "Printed Unstitched",
      price: 959,
      oldPrice: 1199,
      discount: "20% OFF",
    },
    {
      id: 6,
      name: "Khaddar Shirt",
      img: "/image2.jpg",
      desc: "Printed Unstitched",
      price: 959,
      oldPrice: 1199,
      discount: "20% OFF",
    },
    {
      id: 7,
      name: "Khaddar Shirt",
      img: "/image2.jpg",
      desc: "Printed Unstitched",
      price: 959,
      oldPrice: 1199,
      discount: "20% OFF",
    },
    {
      id: 8,
      name: "Khaddar Shirt",
      img: "/image2.jpg",
      desc: "Printed Unstitched",
      price: 959,
      oldPrice: 1199,
      discount: "20% OFF",
    },
  ];

  // Product ko id se dhoondo
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-8 text-red-600">Product not found</div>;
  }

  return (
    <div className="p-8">
      <Link href="/lime-light/stylish" className="text-blue-500 underline">
        ← Back to Stylish
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
        {/* Left side image */}
        <div>
          <Image
            src={product.img}
            alt={product.name}
            width={500}
            height={600}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right side details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.desc}</p>

          <div className="mt-4">
            <span className="text-2xl font-bold">Rs. {product.price}</span>
            {product.oldPrice && (
              <span className="ml-4 line-through text-gray-500">
                Rs. {product.oldPrice}
              </span>
            )}
          </div>

          {product.discount && (
            <p className="mt-2 text-green-600">{product.discount}</p>
          )}

          <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
