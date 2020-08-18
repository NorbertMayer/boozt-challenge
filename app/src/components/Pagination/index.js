import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { p_pagination, p_pagination__pages } from "./Pagination.module.scss";

const Pagination = (props) => {
  const {
    products,
    productsPerPage,
    currentPage,
    onHandlePrevious,
    onHandleNext,
  } = props;
  const totalNumberOfPages = products.length / productsPerPage;

  const onClickPrevList = () => {
    onHandlePrevious();
  };

  const onClickNextList = () => {
    onHandleNext();
  };

  return (
    <div className={p_pagination}>
      <Button clicked={onClickPrevList}>&#8592;</Button>
      <span className={p_pagination__pages}>
        {currentPage} / {totalNumberOfPages}
      </span>
      <Button clicked={onClickNextList}>&#8594;</Button>
    </div>
  );
};

Pagination.propTypes = {
  products: PropTypes.array.isRequired,
  productsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onHandlePrevious: PropTypes.func.isRequired,
  onHandleNext: PropTypes.func.isRequired,
};

export default Pagination;
