

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl shadow p-4 hover:shadow-lg duration-300 bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-contain mb-4"
            />

            <h2 className="font-semibold text-sm line-clamp-2">
              {item.title}
            </h2>

            <p className="text-red-700 font-bold mt-2">${item.price}</p>

            <Link to={`/Product/${item.id}`}>
              <button className="mt-4 w-full bg-red-900 text-white py-2 rounded-lg hover:bg-red-800">
                View
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;