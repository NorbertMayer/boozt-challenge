import React from "react";
import Product from "../Product";
import PropTypes from "prop-types";
import { p_container, p_list } from "./ProductList.module.scss";

const ProductList = (props) => {
  const { curentProducts } = props;

  let productList = curentProducts.map((product) => {
    return (
      <Product
        key={product.id}
        image={product.image}
        name={product.product_name}
        actualPrice={product.actual_price}
        brand={product.brand_name}
      />
    );
  });
  return (
    <div className={p_container}>
      <div className={p_list}>{productList}</div>
    </div>
  );
};

ProductList.propTypes = {
  curentProducts: PropTypes.array.isRequired,
};

export default ProductList;
