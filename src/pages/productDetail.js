import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/product/${productId}`,
        {
          method: "GET",
          headers: {
            "accept": "application/json",
            "projectID": "ebho1pl2y3wb",
          },
        }
      );

      const data = await response.json();
      console.log("my data is", data.data);
      setProduct(data.data);
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const otherImages = product.images;
  const sizes = product.size;

  return (
    <div className="flex bg-white p-8 left-0 absolute top-[70px]">
      <div className="flex flex-col items-start space-y-4 w-max">
        {otherImages.map((item, index) => (
          <div key={index} className="w-full h-24 overflow-hidden">
            <img
              src={item}
              alt={`Product ${index}`}
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center w-2/3 p-4">
        <img
          className="max-w-[70%]"
          src={product.displayImage}
          alt="Loading"
        />
      </div>

      <div className="flex flex-col p-4 w-1/3">
        <h2 className="text-2xl font-bold">{product.seller.name}</h2>
        <p className="text-lg">{product.name}</p>
        <br />
        <br />
        <h2 className="text-xl font-semibold">₹{product.price}</h2>
        <p>Inclusive of all taxes.</p>
        <br />
        <br />
        <p className="font-semibold">Select size</p>
        <div className="flex space-x-2 mt-2">
          {sizes.map((size, index) => (
            <button
              key={index}
              className="px-4 py-2 border rounded hover:bg-gray-200"
            >
              {size}
            </button>
          ))}
        </div>

        <br/>
        <br/>
        
        <div className="description">
            {product.description}
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
