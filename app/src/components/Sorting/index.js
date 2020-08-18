import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { sort } from "./Sorting.module.scss";

const Sorting = (props) => {
  const { onSortByLowPrice, onSortByHigherPrice } = props;
  const onLowPrice = () => {
    onSortByLowPrice();
  };

  const onHighPrice = () => {
    onSortByHigherPrice();
  };

  return (
    <div className={sort}>
      <p>Sort price:</p>
      <Button clicked={onLowPrice}>Low</Button>
      <Button clicked={onHighPrice}>High</Button>
    </div>
  );
};

Sorting.propTypes = {
  onSortByLowPrice: PropTypes.func.isRequired,
  onSortByHigherPrice: PropTypes.func.isRequired,
};

export default Sorting;
