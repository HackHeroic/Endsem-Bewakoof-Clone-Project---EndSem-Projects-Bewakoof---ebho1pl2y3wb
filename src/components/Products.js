import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Example() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit="50"' , {
        method: "GET",
        headers: {
          "projectID": "ebho1pl2y3wb",
        },
      });

      const data = await response.json();
      console.log(data.results);
      console.log("Fetched products data:", data.data);

      setProducts(data.data);
    };

    getProducts();
  }, []);

  console.log("Updated products array:", products);

  const bestSellers = products.filter(item => {
    return (item.sellerTag == "best seller");
  })

  console.log("best sellers array:",bestSellers)

  const trending = products.filter(item => {
    return (item.sellerTag == "trending");
  })

  console.log("trending array:",trending)

  const newArrival = products.filter(item => {
    return (item.sellerTag == "new arrival");
  })

  console.log("new arrival array:",newArrival)

  const topRated = products.filter(item => {
    return (item.sellerTag == "top rated");
  })

  console.log("topRated array:",topRated)



  return (
    <div className="bg-white absolute top-[68px]" >
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 ">
        <h2 className="font-light text-4xl text-center pb-10 italic">BESTSELLERS</h2>
        <div className="flex overflow-x-auto gap-x-6">

          {bestSellers.map((product) => (
            <Link 
            className="group flex-shrink-0 w-60"
            to={`/product/${product._id}`}
            key = {product._id}
            >
                {/* <a key={product._id}  className="group flex-shrink-0 w-60"> */}
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200">
                    <img
                    src={product.displayImage}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">₹{product.price}</p>
                {/* </a> */}
            </Link>

          ))}
        </div>
      </div>


      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 ">
        <h2 className="font-light text-4xl text-center pb-10 italic">Trending</h2>
        <div className="flex overflow-x-auto gap-x-6">
          {trending.map((product) => (
            <Link 
                className="group flex-shrink-0 w-60"
                to = {`/product/${product._id}`}
                key = {product._id}>
                {/* <a key={product.id} href={product.href} className="group flex-shrink-0 w-60"> */}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200">
                <img
                  src={product.displayImage}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">₹{product.price}</p>
            {/* </a> */}
            </Link>

          ))}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 ">
        <h2 className="font-light text-4xl text-center pb-10 italic">TOP RATED</h2>
        <div className="flex overflow-x-auto gap-x-6">
          {topRated.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id} className="group flex-shrink-0 w-60">
                {/* <a key={product.id} href={product.href} className="group flex-shrink-0 w-60"> */}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200">
                <img
                  src={product.displayImage}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">₹{product.price}</p>
            {/* </a> */}
            </Link>

          ))}
        </div>
      </div>


      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 ">
        <h2 className="font-light text-4xl text-center pb-10 italic">New Arrival</h2>
        <div className="flex overflow-x-auto gap-x-6">
          {newArrival.map((product) => (
            <Link className="group flex-shrink-0 w-60" 
            key={product._id}
            to={`/product/${product._id}`}>
                {/* <a key={product.id} href={product.href} className="group flex-shrink-0 w-60"> */}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200">
                <img
                  src={product.displayImage}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">₹{product.price}</p>
            {/* </a> */}
            </Link>

          ))}
        </div>
      </div>

    </div>
  );
}
