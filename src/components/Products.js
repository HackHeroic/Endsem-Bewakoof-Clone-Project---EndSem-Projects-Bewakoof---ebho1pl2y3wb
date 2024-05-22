import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';          // Core CSS
import 'primeicons/primeicons.css';                        // Icons
import './Carousal.css';                                   // Custom CSS for carousel

export default function Example() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=50', {
        method: "GET",
        headers: {
          "projectID": "ebho1pl2y3wb",
        },
      });

      const data = await response.json();
      console.log("Fetched products data:", data.data);
      setProducts(data.data);
    };

    getProducts();
  }, []);

  console.log("Updated products array:", products);

  const bestSellers = products.filter(item => item.sellerTag === "best seller");
  const trending = products.filter(item => item.sellerTag === "trending");
  const newArrival = products.filter(item => item.sellerTag === "new arrival");
  const topRated = products.filter(item => item.sellerTag === "top rated");

  console.log("best sellers array:", bestSellers);
  console.log("trending array:", trending);
  console.log("new arrival array:", newArrival);
  console.log("topRated array:", topRated);

  const productTemplate = (product) => {
    return (
      <div className="carousel-item" key={product._id}>
        <Link to={`/product/${product._id}`} className="group flex-shrink-0 w-full">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
            <img
              src={product.displayImage}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">₹{product.price}</p>
        </Link>
      </div>
    );
  };

  return (
    <div className="bg-white absolute top-[68px]">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="font-light text-4xl text-center pb-10 italic">BESTSELLERS</h2>
        <Carousel value={bestSellers} itemTemplate={productTemplate} numVisible={4} numScroll={2} />
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="font-light text-4xl text-center pb-10 italic">TRENDING</h2>
        <Carousel value={trending} itemTemplate={productTemplate} numVisible={4} numScroll={2} />
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="font-light text-4xl text-center pb-10 italic">TOP RATED</h2>
        <Carousel value={topRated} itemTemplate={productTemplate} numVisible={4} numScroll={2} />
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="font-light text-4xl text-center pb-10 italic">NEW ARRIVAL</h2>
        <Carousel value={newArrival} itemTemplate={productTemplate} numVisible={4} numScroll={2} />
      </div>
    </div>
  );
}
