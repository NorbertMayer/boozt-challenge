import React from 'react';
import PropTypes from "prop-types";
import { Btn } from './Button.module.scss';

const Button = (props) => {
    const {clicked, children} = props;
    return(
        <button className={Btn} onClick={clicked}>{children}</button>
    )
}

Button.propTypes = {
    clicked: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
};

export default Button;