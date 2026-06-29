import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
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

  if (products.length === 0) {
    return <h1 className="text-center mt-10 text-2xl">Loading...</h1>;
  }

  const heroProduct = products[0];
  const promoProducts = products.slice(1, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-red-100 rounded-3xl p-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-5">
              Welcome to Our Shop
            </h1>

            <h2 className="text-2xl font-semibold mb-4">
              {heroProduct.title}
            </h2>

            <p className="text-gray-700 mb-6">
              {heroProduct.description}
            </p>

            <h3 className="text-3xl font-bold text-red-900 mb-6">
              ${heroProduct.price}
            </h3>

            <button className="bg-red-900 text-white px-8 py-3 rounded-full hover:bg-red-800 duration-300">
              Shop Now
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={heroProduct.image}
              alt={heroProduct.title}
              className="w-72 h-72 object-contain"
            />
          </div>
        </div>
      </section>

      {/* 3 Products Under Hero */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h1 className="text-3xl font-bold text-center text-red-900 mb-10">
          Featured Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {promoProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-2xl shadow-md p-6 hover:shadow-xl duration-300"
            >
              <div className="flex justify-center mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 object-contain"
                />
              </div>

              <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-red-900">
                  ${item.price}
                </h3>

                <button className="bg-red-900 text-white px-5 py-2 rounded-full hover:bg-red-800 duration-300">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;