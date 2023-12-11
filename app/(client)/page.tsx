import { listProducts } from "@/app/(client)/service/product.service";
import ProductCart from "./components/product-card";
import Link from "next/link";
// import avatar from "@/public/next.svg"
// import NextImage from "next/image";


export const metadata = {
  title: "Next.js tutorial",
  description: "The React Framework for the Web",
  icons:
    "https://watchdirect.com.au/cdn/shop/files/Bulova-MarineStar-2_400x.jpg?v=1695347157",
};

export default async function Home() {
  const { products, total, limit, skip } = await listProducts();

  console.log(products, total, limit, skip);
  return (
    <div className="product-list">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <ProductCart key={product.id} {...product} ></ProductCart>
        </Link>
      ))}
    </div>
  );
}
