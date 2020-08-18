import React from "react";
import PropTypes from "prop-types";
import { p_card, p_card__image, p_card__info } from "./Product.module.scss";

const Product = (props) => {
  const { image, name, brand, actualPrice } = props;
  return (
    <div className={p_card}>
      <div className={p_card__image}>
        <img src={image} alt={name} />
      </div>
      <div className={p_card__info}>
        <p>Brand: <span>{brand}</span></p>  
        <p>Name: <span>{name}</span></p>
        <p>Price: <span>{actualPrice} kr</span></p>
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  actualPrice: PropTypes.string.isRequired,
};

export default Product;
