


import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return <h1 className="text-center mt-10 text-2xl">Loading...</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link
        to="/product"
        className="inline-block mb-6 bg-red-900 text-white px-4 py-2 rounded"
      >
        Back
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border rounded-xl shadow p-6 bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <h2 className="text-2xl font-semibold text-red-900 mb-4">
            ${product.price}
          </h2>

          <p className="text-gray-700 mb-4">{product.description}</p>

          <p className="font-semibold">
            Category:{" "}
            <span className="font-normal text-gray-700">
              {product.category}
            </span>
          </p>

          <p className="font-semibold mt-2">
            Rating:{" "}
            <span className="font-normal text-gray-700">
              {product.rating?.rate} / 5
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductView;