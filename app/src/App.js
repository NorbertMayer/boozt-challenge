import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
import Sorting from "./components/Sorting";
import { container, header } from "./App.module.scss";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(50);
  const totalNumberOfPages = products.length / productsPerPage;

  useEffect(() => {
    axios
      .get("http://localhost/boozt-challenge/server/api/read.php")
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onHandlePrevious = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onHandleNext = () => {
    if (currentPage !== totalNumberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onSortByLowPrice = () => {
    const sortListByLowPrice = [...products].sort(
      (a, b) => a.actual_price - b.actual_price
    );
    setProducts(sortListByLowPrice);
  };

  const onSortByHigherPrice = () => {
    const sortListByHigherPrice = [...products].sort(
      (a, b) => b.actual_price - a.actual_price
    );
    setProducts(sortListByHigherPrice);
  };

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={container}>
      <div className={header}>
        <Sorting
          onSortByLowPrice={onSortByLowPrice}
          onSortByHigherPrice={onSortByHigherPrice}
        />
        <Pagination
          products={products}
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          onHandlePrevious={onHandlePrevious}
          onHandleNext={onHandleNext}
        />
      </div>

      <ProductList curentProducts={currentProducts} />
    </div>
  );
}

export default App;
