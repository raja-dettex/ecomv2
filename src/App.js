import "./styles.css";
import { Product } from "./components/ProductComponent/Product";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const {
          data: { data }
        } = await axios.get("Products.json");
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    })();
  });
  return (
    <div className="d-flex  gap wrap">
      {products &&
        products.length > 0 &&
        products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </div>
  );
}
