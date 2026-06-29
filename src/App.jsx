import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import ProductView from "./Pages/ProductView";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />

        {/* Product detail page */}
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>
    </>
  );
}

export default App;